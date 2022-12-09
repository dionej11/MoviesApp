import Head from 'next/head'
import { useAuth } from './context/authContext';
import { useRouter } from 'next/router';
// import { ProtectedRoute } from './protectedRoute';
import Link from 'next/link';
import { Example } from '../components/example/example';

export default function Home() {
  const router = useRouter();

  const {user, logout, loading} = useAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logout();
      router.push('/login'); 
    } catch (error) {
      console.log(error.message);
    }
  }

  if (loading) return <span>Loading...</span>

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        user ?
        <div>
          <h1>Welcome {user.email}</h1>
          <Example>Hola jejeje</Example>
          <button onClick={handleLogout}>Salir</button>
        </div>
        : <div>
          <p>Inicia sesión</p>
          <Link href="/login">Ir</Link>
        </div>
      }
    </div>
  )
}
