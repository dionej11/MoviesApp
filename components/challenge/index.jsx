import {
    CONTAINER,
    TEXT_CHALLENGE__p,
    RANGE_CON__div,
    RANGE__progress
} from './styles';

export const Challenge = () =>{

    return(
        <CONTAINER>
            <TEXT_CHALLENGE__p>Movier Reto 2022</TEXT_CHALLENGE__p>
            <RANGE_CON__div>
                <RANGE__progress max="100" value="10" type="range" />
                <span>0/0</span>
            </RANGE_CON__div>
        </CONTAINER>
    )
}