import Head from 'next/head'
import { useAuth } from '../components/context/authContext';
import HeaderApp from '../components/header/header';
import Headerprofile from '../components/headerProfile/headerProfile';
import { Challenge } from '../components/challenge';
import { useEffect, useState } from 'react';
import {database} from '../firebase';
import { ref, child, get  } from "firebase/database";
import { Collections } from '../components/collections';
import { Protect } from '../components/protect';
import { Loading } from '../components/loading';

export default function Profile() {
    const { user } = useAuth();
    const [collections, setcollections] = useState(null);
    const [challengeMax, setChallengeMax] = useState(null);
    const [challengeValue, setChallengeValue] = useState(null);

    useEffect(()=>{
        const dbRef = ref(database);

        if (user) {
            get(child(dbRef, `users/${user.uid}`)).then(snapshot => {
                if (snapshot.exists()) {
                    let collectionsArray = [];
                    Object.entries(snapshot.val().collections).forEach(([key, value]) => collectionsArray.push({key, ...value}));
                    setcollections(collectionsArray);
                    setChallengeMax(snapshot.val().challenge.max);
                    setChallengeValue(snapshot.val().challenge.value);
                } else {
                    console.log("No data available");
                }
            }).catch(error => {console.log(error)});
        }
    },[user]);

    return (
        <>
            <Head>
                <title>Profile</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeaderApp>Mi perfil</HeaderApp>
            <Headerprofile setColl={setcollections} />
            <Challenge challeMax={challengeMax} setChanMax={setChallengeMax} challeValue = {challengeValue} setChanValue = {setChallengeValue}/>
            {
                user ?
                    collections ?
                        <Collections collec={collections} />
                    : <Loading>A??n no tienes colecciones ...</Loading>
                : <Protect />
            }
        </>
    )
}
