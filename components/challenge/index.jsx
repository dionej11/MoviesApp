import { useEffect, useLayoutEffect, useState } from 'react';
import { useAuth } from '../context/authContext';
import {database} from '../../firebase'
import { ref, set, get, child, update } from "firebase/database";
import Swal from 'sweetalert2';

import {
    CONTAINER,
    TEXT_CHALLENGE__p,
    RANGE_CON__div,
    RANGE__progress
} from './styles';

export const Challenge = ({challeMax, challeValue, setChanMax, setChanValue}) =>{
    const { user } = useAuth();
    
    useEffect(()=>{
        if (challeMax || challeValue) {
            const dbRef = ref(database);
            get(child(dbRef, `users/${user.uid}/collections`)).then(snapshot => {
                if (snapshot.exists()) {
                    let contador = 0;
                    snapshot.val() ?
                        Object.entries(snapshot.val()).forEach((value) => {
                            value[1].movies ? 
                                Object.entries(value[1].movies).forEach((value) => {
                                    value[1].watched ? contador++ :null
                                })
                            : null 
                        })
                    : {}
                    // console.log(contador);
                    setChanValue(contador);

                    update(child(dbRef, `users/${user.uid}/challenge`), {
                        value: contador
                    }).catch(error => {console.log(error)});
                } else {
                    console.log("No data available");   
                }
            }).catch(error => {console.log(error)});
        }
    },[challeMax])
    
    
    const newChallenger = async (cant) => {
        try {
            set(ref(database, `users/${user.uid}/challenge`), {
                max: cant,
                value: 0
            });
            setChanValue(0);
            setChanMax(cant);
            // setChan({max:cant, value:0});
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
                    challeMax || challeValue ? 
                    <>
                        <RANGE__progress max={challeMax} value={challeValue} type="range" />
                        <span>{`${challeValue}/${challeMax}`}</span>
                    </>: 
                    <>
                    {console.log(challeMax)}
                        <RANGE__progress max="100" value="0" type="range" />
                        <span><button onClick={modal}>Crear</button></span>
                    </>
                }
            </RANGE_CON__div>
        </CONTAINER>
    )
}