import React from "react";
import { Link } from 'react-router-dom';
import ArtworkList from '../components/ArtworkList';

const Gallery = () => {

    return (
        <div>
            <Link to={"/"}><button>Back</button></Link>
            <ArtworkList/>
        </div>
    )
}
export default Gallery;