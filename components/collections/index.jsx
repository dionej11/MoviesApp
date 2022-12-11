import Link from 'next/link';
import {
    CONTAINER,
    TEXT_CHALLENGE__p,
    COLLECTION,
    CONTAINER_COLLECTIONS__div
} from './styles';

export const Collections = ({collec}) => {
    return(
        <CONTAINER>
            <TEXT_CHALLENGE__p>Mis colecciones</TEXT_CHALLENGE__p>
            <CONTAINER_COLLECTIONS__div>
                {
                    collec ?
                        collec.map((collection, ind) => 
                            <Link key={ind} href = {`collections/${collection.key}`} >
                                <COLLECTION color = {collection.colorColection}>{collection.nameColecction}</COLLECTION>
                            </Link>
                        )
                    :<p>Cargando...</p>
                }
            </CONTAINER_COLLECTIONS__div>
        </CONTAINER>
    )
}