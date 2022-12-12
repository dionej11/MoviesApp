import Image from "next/image"
import { LOADING__div } from "./styles"
import Play from '../../assets/Play_02.png';

export const Loading = ({children}) => {
    return(
        <LOADING__div>
            <Image src={Play} alt="Play icon" width="80" />
            <p>{children}</p>
        </LOADING__div>
    )
}