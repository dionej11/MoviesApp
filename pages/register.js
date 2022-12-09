import { useState } from "react"
import { useAuth } from "./context/authContext";
import { useRouter } from 'next/router'


export default function Register() {
  const [user, setUser] = useState({email:'', password:''});
  const [error, setError] = useState();
  const {signup} = useAuth();

  const router = useRouter()

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]:value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      router.push('/'); 
    } catch (error) {
      setError(error.message);
    }
  }
    return (
      <div>
        <h1>Desde el register.js</h1>
        {
          error && <p>{error}</p>
        }
        <form onSubmit={handleSubmit}>
          <label>Correo:</label>
          <input onChange={handleChange} type="email" name="email"/>

          <label>Contraseña:</label>
          <input onChange={handleChange} type="password" name="password" id="password"/>
          <button>Register</button>
        </form>
      </div>
    )
}