import {useRouter } from 'next/router';
import { useAuth } from '../../components/context/authContext';

import { BackIcon } from "../../assets/backIcon.jsx";

/**Styled Components**/
import {
    CONTENT__div,
    BACK__button,
    TEXTTITLE__p,
    LOGOUT__button
} from './style.js';

export default function HeaderApp(props) {
    const params = useRouter().route;
    const router = useRouter();

    const {logout} = useAuth();

    const handleLogout = async () => {
        try {
          await logout();
          router.push('/login'); 
        } catch (error) {
          console.log(error.message);
        }
      }
    return (
        <CONTENT__div>
            <BACK__button onClick={() => router.push("/")}><BackIcon /></BACK__button>
            <TEXTTITLE__p>{props.children}</TEXTTITLE__p>
            {
                params == "/profile" &&
                <LOGOUT__button onClick={handleLogout}>Salir</LOGOUT__button>
            }
        </CONTENT__div>
    );
}