import Image from 'next/image';
import Logo from '../../assets/Logo.png';
import Swal from 'sweetalert2';
import {database} from '../../firebase';
import { ref, push } from "firebase/database";

import {
    CONTAINER__div, 
    MINI_TEXT__p, 
    MOVIES__section, 
    MOVIE__div,
    ADD__button,
    INFO__div,
    PHOTO_MOVIE__div,
    MORE_MOVIES__button
} from './styles'

export const Container = (props) => {
    const {user, dataUser, data, getData, actualPage,updatePage} = props;

    const modal = async (movie) => {
        const { value: collectionSelected } = await Swal.fire({
            title: 'Añadir esta pelicula a la colección:',
            input: 'select',
            inputOptions: dataUser,
            inputPlaceholder: 'Selecciona una colección',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes seleccionar una colección'
                }
            }
        })
        
        if (collectionSelected) {
            Swal.fire(`Añadida correctamente`);
            addMovie(movie, collectionSelected);
        }
    }
    const addMovie = (movie, collection) => {
        // console.log("Peli ha añadir",movie);
        // console.log("En la colleción",collection);
        const {poster_path, title,overview} = movie;

        push(ref(database, `users/${user.uid}/collections/${collection}/movies`), {
            dataMovie: {poster_path, title, overview},
            watched: false
        });
    }
    return (
        <CONTAINER__div>
            <Image src={Logo} alt="Logo" width="100" priority />
            <MINI_TEXT__p>Lo más reciente</MINI_TEXT__p>
            <MOVIES__section>
                {
                    data.map((movie, index)=>
                        <MOVIE__div key={index}>
                            <PHOTO_MOVIE__div>
                                <Image src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt="img" width="100" height="100" />
                            </PHOTO_MOVIE__div>
                            <INFO__div>
                                <h4>{movie.title}</h4>
                                <p>{
                                    movie.title.length <=12 ?
                                    `${movie.overview.slice(0, 70)}...`
                                    :`${movie.overview.slice(0, 50)}...`
                                }</p>
                            </INFO__div>
                            <ADD__button onClick={() => modal(movie)}>+</ADD__button>
                        </MOVIE__div>
                    )
                }
            <MORE_MOVIES__button onClick={()=> {getData(actualPage+1); updatePage(actualPage+1)}}>
                Ver más
            </MORE_MOVIES__button>
            </MOVIES__section>
        </CONTAINER__div>
    )
}

