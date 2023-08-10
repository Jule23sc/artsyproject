import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArtworkDetails = () => {
    const [artw, setArtw] = useState({})

    const params = useParams()
    const awId = params.awId;


    useEffect(() => {
        fetch(`https://api.artic.edu/api/v1/artworks/${awId}`)
        .then(response => {
            if(!response.ok) {
                throw new Error("fetch error details")
            }
            return response.json();
        })
        .then(artworkDatas => {
            setArtw(artworkDatas)
        })
        .catch((error) => console.log(error.message))
    }, [awId])

    return (
        <div>
            <Link to={"/gallery"}><button>zurück</button></Link>
            <div>
            <img src={artw.image_id}/>
            <h1>{artw.titel}</h1>
            <h3>{artw.künstler}</h3>
            <p>{artw.evt}</p>
            </div>
        </div>
    )
}
export default ArtworkDetails;