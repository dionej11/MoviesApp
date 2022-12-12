import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import { useAuth } from '../../components/context/authContext';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ref, child, get, update, remove } from "firebase/database";
import {database} from '../../firebase';
import { MOVIES__section, MOVIE__div, PHOTO_MOVIE__div, INFO__div, ADD__button, CONTAINER__div, CONTENT_BTN } from "../../components/homeComp/styles";
import {INFO_COLLECTION__section,COLOR, COLOR__CONTAINER, HEADER_EDITED__head} from './styles'
import {Watch} from '../../assets/watch.jsx';
import {NoWatch} from '../../assets/notwatch.jsx';
import { BackIcon } from "../../assets/backIcon";
import Swal from 'sweetalert2';
import { Loading } from "../../components/loading";
import { Delete } from "../../assets/delete";

export default function Collectio() {
    const { user } = useAuth();
    const router = useRouter();
    const paramsRouter = useRouter().query.collection;
    const [data, setData] = useState(null);
    const [moviesWatched, setMoviesWatched] = useState(0);

    useEffect(() => { 
        if (paramsRouter && user) {
            // console.log("key", paramsRouter);
            getDataCollection();
        }
    },[paramsRouter, user]);

    const getDataCollection = () => {
        const dbRef = ref(database);
        get(child(dbRef, `users/${user.uid}/collections/${paramsRouter}`)).then(snapshot => {
            if (snapshot.exists()) {
                let moviesArray = [];
                snapshot.val().movies ?
                Object.entries(snapshot.val().movies).forEach(([key, value]) => moviesArray.push({key, ...value}))
                : {}
                setData({movies: moviesArray, colorColl: snapshot.val().colorColection, nameColl: snapshot.val().nameColecction});
                // console.log({movies: moviesArray, colorColl: snapshot.val().colorColection, nameColl: snapshot.val().nameColecction});
                
                let cont = 0;
                // console.log("ARRAY",moviesArray);
                moviesArray.map(movie=>{
                    movie.watched === true ? cont++ :null
                });
                setMoviesWatched(cont);
            } else {
                console.log("No data available");   
            }
        }).catch(error => {console.log(error)});
    }

    const deleteMovie = (movie) => {
        Swal.fire({
            title: 'Estas apunto de eliminar una pelicula',
            text: "¿De verdad quieres eliminarla?",
            background: "#040814",
            color: "#f1f1f1",
            icon: 'warning',
            iconColor: "#d33",
            showCancelButton: true,
            confirmButtonColor: '#6421FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!'
          }).then((result) => {
            if (result.isConfirmed) {
                const dbRef = ref(database);
                remove(child(dbRef, `users/${user.uid}/collections/${paramsRouter}/movies/${movie.key}`))
                .catch(error => {console.log(error)});
                getDataCollection();
                Swal.fire({
                    title:'Eliminada!',
                    text:'Tu pelicula ha sido eliminada',
                    icon:'success',
                    background: "#040814",
                    color: "#f1f1f1",
                }
                );
            }
          })
    }

    const stateWatch = (movie) => {
        const dbRef = ref(database);
        update(child(dbRef, `users/${user.uid}/collections/${paramsRouter}/movies/${movie.key}`), {
            watched: !movie.watched
        }).catch(error => {console.log(error)});

        getDataCollection();
    }
    const deleteCollection = () => {
        Swal.fire({
            title: 'Estas apunto de eliminar esta colección',
            text: "¿De verdad quieres eliminarla?",
            background: "#040814",
            color: "#f1f1f1",
            icon: 'warning',
            iconColor: "#d33",
            showCancelButton: true,
            confirmButtonColor: '#6421FF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!'
        }).then((result) => {
            if (result.isConfirmed) {
                const dbRef = ref(database);
                remove(child(dbRef, `users/${user.uid}/collections/${paramsRouter}`))
                .catch(error => {console.log(error)});
                getDataCollection();
                Swal.fire({
                    title:'Eliminada!',
                    text:'Tu colección ha sido eliminada',
                    icon:'success',
                    background: "#040814",
                    color: "#f1f1f1",
                }
                );
                router.push('/profile');
            }
        })
    }

    return (
        <>
            <Head>
                <title>Colección</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HEADER_EDITED__head>
                <Link href="/profile">
                    <BackIcon />
                </Link>
                {
                    data? 
                        <p>Colección: {data.nameColl}</p>
                    :null
                }
                <button onClick={() => deleteCollection()}><Delete /></button>
            </HEADER_EDITED__head>
            <CONTAINER__div>
                <INFO_COLLECTION__section>
                    {
                        data ?
                        <>
                            <COLOR__CONTAINER>
                                <COLOR color={data.colorColl}></COLOR>
                            </COLOR__CONTAINER>
                            <p>Total añadidas: {data.movies.length}</p>
                            <p>Total vistas: {moviesWatched} </p>
                        </>
                        :null

                    }
                </INFO_COLLECTION__section>
                <MOVIES__section>
                    {
                    data ?
                        data.movies.length !== 0 ?
                            data.movies.map((movie, index)=>
                                <MOVIE__div key={index}>
                                    <PHOTO_MOVIE__div>
                                        <Image src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.dataMovie.poster_path}`} alt="img" width="100" height="100" />
                                    </PHOTO_MOVIE__div>
                                    <INFO__div>
                                        <h4>{movie.dataMovie.title}</h4>
                                        <p>{
                                            movie.dataMovie.title.length <=12 ?
                                            `${movie.dataMovie.overview.slice(0, 70)}...`
                                            :`${movie.dataMovie.overview.slice(0, 50)}...`
                                        }</p>
                                    </INFO__div>
                                    <CONTENT_BTN>
                                        <ADD__button color="#FF375A" onClick={() => deleteMovie(movie)}>-</ADD__button>
                                        <ADD__button onClick={() => stateWatch(movie)}>
                                            {
                                                movie.watched ?
                                                    <NoWatch/>
                                                : <Watch/>
                                            }
                                        </ADD__button>
                                    </CONTENT_BTN>
                                </MOVIE__div>
                            )
                        : <Loading>No tienes peliculas añadidas en esta colección</Loading>
                    : <Loading>Cargando...</Loading>
                    }
                </MOVIES__section>
            </CONTAINER__div>
            
        </>
    )
}