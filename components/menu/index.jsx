import { useRouter } from 'next/router';
import Image from 'next/image';
import { useAuth } from '../../components/context/authContext';

/*Assets */
import SearchIcon from '../../assets/lupa.svg';
import HomeIcom from '../../assets/home.svg';
import ProfileIcon from '../../assets/perfil.svg';
import ExitIcon from '../../assets/exit.svg';

/*Syled Components */
import { CONTAINER__nav } from './style.js';

export default function Menu() {

    const params = useRouter().route;
    const router = useRouter();

    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            //router.push('/login');
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <>
            <CONTAINER__nav>
                <a href='/profile'>
                    <Image
                        src={ProfileIcon}
                        alt={`Perfil`}
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
                <a href='/login' onClick={handleLogout}>
                    <Image
                        src={ExitIcon}
                        alt={`Exit`}
                        width={20}
                        height={20}
                    />
                </a>
            </CONTAINER__nav>
        </>
    )
}