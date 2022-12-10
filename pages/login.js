import { useState } from "react"
import { useAuth } from "./context/authContext";
import { useRouter } from 'next/router';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import Poster1 from '../assets/poster1.webp';
import Poster2 from '../assets/poster2.jpg';
import Poster3 from '../assets/poster3.webp';
import Poster4 from '../assets/poster4.jpg';
import {
  CONTAINER__div,
  CONTAINER_movies__div,
  WELCOME_TEXT__p,
  BTN_GOOGLE__button
} from '../components/loginStyles';

export default function Login() {
  const [user, setUser] = useState({email:'', password:''});
  const [error, setError] = useState();

  const {login, loginGoogle} = useAuth();

  const router = useRouter();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]:value});
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(user.email, user.password);
      router.push('/'); 
    } catch (error) {
      setError(error.message);
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await loginGoogle();
      router.push('/');
    } catch (error) {
      console.log(error.message);
    }
  }

    return (
      <CONTAINER__div>
        {/* {
          error && <p>{error}</p>
        } */}
        {/* <form onSubmit={handleSubmit}>
          <label>Correo:</label>
          <input onChange={handleChange} type="email" name="email"/>

          <label>Contraseña:</label>
          <input onChange={handleChange} type="password" name="password" id="password"/>
          <button>Login</button>
        </form> */}
        <Image src={Logo} alt="Logo" width="200" />
        <WELCOME_TEXT__p>
            Dale un seguimiento a todas tus peliculas y construye tu propia biblioteca de cine.
        </WELCOME_TEXT__p>
        <CONTAINER_movies__div>
          <Image src={Poster1} alt="Poster1" width="100%" height="100%" />
          <Image src={Poster2} alt="Poster2" width="100%" height="100%" />
          <Image src={Poster3} alt="Poster3" width="100%" height="100%"/>
          <Image src={Poster4} alt="Poster4" width="100%" height="100%"/>
        </CONTAINER_movies__div>
        <BTN_GOOGLE__button onClick={handleGoogleSignin}>Iniciar con Google</BTN_GOOGLE__button>
      </CONTAINER__div>
    )
}