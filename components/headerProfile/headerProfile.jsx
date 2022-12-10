import Image from 'next/image';
import { useAuth } from '../../pages/context/authContext';

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

export default function HeaderProfile() {

    const { user } = useAuth();
    console.log(user);

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
                <NEWCOLLECTION__button>Crear nueva colección</NEWCOLLECTION__button>
            </CONTENTBUTTON__div>
        </>
    );
}