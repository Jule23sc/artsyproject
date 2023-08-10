import React from "react";
import ArtworkItem from "./items/ArtworkItem";
import { useState, useEffect } from "react";

const ArtworkList = () => {

    const [artw, setArtw] = useState([])

    useEffect(() => {
        fetch(`https://api.artic.edu/api/v1/artworks`)
        .then(response => {
            if(!response.ok) {
                throw new Error("fetch error details")
            }
            return response.json();
        })
        .then(artworkData => setArtw(artworkData.data))
        .catch((error) => console.log(error.message))
    }, [])
    console.log(artw);
    return (
        <div>
            {artw.map((wip) => 
                <ArtworkItem
                key={wip.id} 
                id= {wip.id}
                image={wip.image_id} 
                title={wip.title}
                artist={wip.artist_display} 
                evt={wip.date_end}/>
            )}
        </div>
    )
}
export default ArtworkList;