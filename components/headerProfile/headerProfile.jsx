import Image from 'next/image';
import { useAuth } from '../../pages/context/authContext';
import { useState } from 'react';
import {database} from '../../firebase'
import { ref, set, push } from "firebase/database";

/**Styled Components**/
import {
    CONTENT__div,
    CONTENTIMAGE__div,
    CONTENTINFO__div,
    TEXTTITLE__p,
    TEXTTITLETWO__p,
    CONTENTBUTTON__div,
    NEWCOLLECTION__button
} from './style.js';

/** ALERTS */
import Swal from 'sweetalert2';

export default function HeaderProfile() {

    const [collectionName, setCollectionName] = useState("");
    const [collectionColor, setCollectionColor] = useState("");

    const { user } = useAuth();
    // console.log(user);

    const writeUserData = async (name,color) => {
        console.log("nombre ", name);
        console.log("color ", color);
        
        try {
            push(ref(database, `users/${user.uid}/colecctions`), {
                nameColecction: name,
                colorColection: color
            });
            Swal.fire('Colección creada con exito');
        } catch (error) {
            console.log(error);
        }
    }

    const modal = async () => {
        const { value: name } = await Swal.fire({
            input: 'text',
            inputLabel: 'Nombre de la colección',
            background: "#040814",
            color: "#F1F1F1",
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes ingresar el nombre!'
                }
            }
        })
        if (name) {
            setCollectionName(name);
            const inputOptions = new Promise((resolve) => {
                setTimeout(() => {
                  resolve({
                    '#F6FFBE': 'Amarillo',
                    '#C2FFD0': 'Verde',
                    '#E6B1FF': 'Rosa'
                  })
                }, 800)
            })
              
            const { value: color } = await Swal.fire({
            title: 'Select color',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                return 'You need to choose something!'
                }
            }
            })
              
            if (color) {
                setCollectionColor(color);
                writeUserData(name, color);
            }
        }
    }

    return (
        <>
            <CONTENT__div>
                <CONTENTIMAGE__div>
                    <Image
                        src={user.photoURL}
                        alt={`Imagen de perfil`}
                        width={20}
                        height={20}
                        layout="responsive"
                    />
                </CONTENTIMAGE__div>
                <CONTENTINFO__div>
                    <TEXTTITLE__p>{user.displayName}</TEXTTITLE__p>
                    <TEXTTITLETWO__p>{user.email}</TEXTTITLETWO__p>
                </CONTENTINFO__div>
            </CONTENT__div>
            <CONTENTBUTTON__div>
                <NEWCOLLECTION__button onClick={() => modal()}>Crear nueva colección</NEWCOLLECTION__button>
            </CONTENTBUTTON__div>
        </>
    );
}