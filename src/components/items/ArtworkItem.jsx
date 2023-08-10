import React from "react";
import { Link } from 'react-router-dom';

const ArtworkItem = (props) => {

    return (
        <div>
            <img src={props.image_id}/>
            <h1>{props.title}</h1>
            <h3>{props.artist}</h3>
            <p>{props.evt}</p>
        </div>
    )
}
//<Link to={"/gallery/"props.id}>show details</Link>
export default ArtworkItem;