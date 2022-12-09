import { useState } from "react"
import { useAuth } from "./context/authContext";
import { useRouter } from 'next/router';


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
      <div>
        <h1>Desde el login.js</h1>
        {
          error && <p>{error}</p>
        }
        <form onSubmit={handleSubmit}>
          <label>Correo:</label>
          <input onChange={handleChange} type="email" name="email"/>

          <label>Contraseña:</label>
          <input onChange={handleChange} type="password" name="password" id="password"/>
          <button>Login</button>
        </form>
        <button onClick={handleGoogleSignin}>Google</button>
      </div>
    )
}