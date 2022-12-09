import { useAuth } from "./context/authContext";
import { useRouter } from 'next/router';

export function ProtectedRoute({children}) {
    const router = useRouter();
    console.log("entraaa");
    const {user, loading} = useAuth();
    if (loading) return <h1>Loading...</h1>

    if (!user) return router.push('/login'); 
    // if (!user) return console.log("entraaa"); 

    return <>{children}</>
}