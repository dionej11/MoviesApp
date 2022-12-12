import Image from "next/image";
import Link from "next/link"
import Logo from '../../assets/Logo.png';
import {CONTAINER__div} from './styles'

export const Protect = () => {
    return (
        <CONTAINER__div>
            <Image src={Logo} alt="Logo" width="100" priority />
          <p>Inicia sesión para ver todo nuestro contenido</p>
          <Link href="/login">Iniciar</Link>
        </CONTAINER__div>
    )
}