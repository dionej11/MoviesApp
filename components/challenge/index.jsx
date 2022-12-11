import { useState } from 'react';
import { useAuth } from '../../pages/context/authContext';
import {database} from '../../firebase'
import { ref, set } from "firebase/database";
import Swal from 'sweetalert2';

import {
    CONTAINER,
    TEXT_CHALLENGE__p,
    RANGE_CON__div,
    RANGE__progress
} from './styles';

export const Challenge = ({challe, setChan}) =>{
    const { user } = useAuth();
    
    const newChallenger = async (cant) => {
        try {
            set(ref(database, `users/${user.uid}/challenge`), {
                max: cant,
                value: 0
            });
            setChan({max:cant, value:0});
            Swal.fire('Reto creado con exito');
        } catch (error) {
            console.log(error);
        }
    }

    const modal = async () => {
        const { value: cant } = await Swal.fire({
            input: 'number',
            inputLabel: 'La cantidad de peliculas que ingreses serán tu nuevo reto del 2022',
            background: "#040814",
            color: "#F1F1F1",
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes ingresar un valor!'
                }
            }
        })
        if (cant) {
            newChallenger(cant);
        }
    }

    return(
        <CONTAINER>
            <TEXT_CHALLENGE__p>Movier Reto 2022</TEXT_CHALLENGE__p>
            <RANGE_CON__div>
                {
                    challe ? 
                    <>
                        <RANGE__progress max={challe.max} value={challe.value} type="range" />
                        <span>{`${challe.value}/${challe.max}`}</span>
                    </>: 
                    <>
                        <RANGE__progress max="100" value="0" type="range" />
                        <span><button onClick={modal}>Crear</button></span>
                    </>
                }
            </RANGE_CON__div>
        </CONTAINER>
    )
}