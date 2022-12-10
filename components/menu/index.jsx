import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

/*Assets */
import SearchIcon from '../../assets/lupa.svg';
import HomeIcom from '../../assets/home.svg';
import ProfileIcon from '../../assets/perfil.svg';

/*Syled Components */
import { CONTAINER__nav } from './style.js';

export default function Menu() {
    const params = useRouter().route;
    return (
        <>
            <CONTAINER__nav>
                <a href='/search'>
                    <Image
                        src={SearchIcon}
                        alt={`Lupa`}
                        width={20}
                        height={20}
                    />
                </a>
                <a href='/'>
                    <Image
                        src={HomeIcom}
                        alt={`Home`}
                        width={20}
                        height={20}
                    />
                </a>
                <a href='/profile'>
                    <Image
                        src={ProfileIcon}
                        alt={`Perfil`}
                        width={20}
                        height={20}
                    />
                </a>
            </CONTAINER__nav>
        </>
    )
}