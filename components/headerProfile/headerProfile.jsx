import Image from 'next/image';
import { useAuth } from '../../pages/context/authContext';
import { useState } from 'react';

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
    console.log(user);

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
            Swal.fire({
                text: `El nombre ingresado fue: ${name}`,
                confirmButtonText: 'Siguiente',
                confirmButtonColor: "#6421FF",
                background: "#040814",
                color: "#F1F1F1",
            })
                .then(async response => {
                    if (response.isConfirmed) {
                        const inputOptions = new Promise((resolve) => {
                            setTimeout(() => {
                                resolve({
                                    '#F6FFBE': 'Amarillo',
                                    '#C2FFD0': 'Azul',
                                    '#E6B1FF': 'Rosa'
                                })
                            }, 1000)
                        })

                        const { value: color } = await Swal.fire({
                            text: 'Selecciona el color',
                            input: 'radio',
                            inputOptions: inputOptions,
                            background: "#040814",
                            color: "#F1F1F1",
                            confirmButtonColor: "#6421FF",
                            inputValidator: (value) => {
                                if (!value) {
                                    return 'Debes elegir un color!'
                                }
                            }
                        })
                        if (color) {
                            Swal.fire({
                                text: `El color seleccionado fue: ${color}`,
                                background: "#040814",
                                color: "#F1F1F1"
                            })
                        }
                        setCollectionColor(color);
                    }
                });
            setCollectionName(name);
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
                {console.log(collectionName)}
                {console.log(collectionColor)}
            </CONTENTBUTTON__div>
        </>
    );
}