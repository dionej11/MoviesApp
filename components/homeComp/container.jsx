import Image from 'next/image';
import Logo from '../../assets/Logo.png';
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
    const {data, getData, actualPage,updatePage} = props;
    console.log(data);
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
                            <ADD__button>+</ADD__button>
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

