import Router, { useRouter } from 'next/router';

import { BackIcon } from "../../assets/backIcon.jsx";

/**Styled Components**/
import {
    CONTENT__div,
    BACK__button,
    TEXTTITLE__p,
} from './style.js';

export default function HeaderApp(props) {
    return (
        <CONTENT__div>
            <BACK__button onClick={() => Router.push("/")}><BackIcon /></BACK__button>
            <TEXTTITLE__p>{props.children}</TEXTTITLE__p>
        </CONTENT__div>
    );
}