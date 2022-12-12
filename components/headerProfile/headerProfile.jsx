import Image from 'next/image';
import { useAuth } from '../../components/context/authContext';
import { useState } from 'react';
import {database} from '../../firebase';
import { ref, set, push, child, get  } from "firebase/database";
import Swal from 'sweetalert2';

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
import { Loading } from '../loading';

/** ALERTS */

export default function HeaderProfile({setColl}) {
    const { user } = useAuth();
    
    const writeUserDataColecction = async (name,color) => {
        try {
            const dbRef = ref(database);
            push(ref(database, `users/${user.uid}/collections`), {
                nameColecction: name,
                colorColection: color
            });
            get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    let collectionsArray = [];
                    Object.entries(snapshot.val().collections).forEach(([key, value]) => collectionsArray.push({key, ...value}));
                    setColl(collectionsArray);
                } else {
                    console.log("No data available");
                }
                }).catch((error) => {
                    console.error(error);
                }
            );
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
                writeUserDataColecction(name, color);
            }
        }
    }

    return (
        <>
            <CONTENT__div>
                {
                    user ? 
                    <>
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
                    </>
                    : <Loading>Cargando...</Loading>
                }
            </CONTENT__div>
            <CONTENTBUTTON__div>
                <NEWCOLLECTION__button onClick={() => modal()}>Crear nueva colección</NEWCOLLECTION__button>
            </CONTENTBUTTON__div>
        </>
    );
}