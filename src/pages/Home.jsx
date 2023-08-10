import React from 'react';
import { Link } from 'react-router-dom';
import Gallerypic from '../../public/img/pic1.jpg';
import './Home.scss';

const Home = () => {

    return (
        <div className="home_div">
            <h1>Willkommen</h1>
            <div className="pic_div">
            <img className="gallerypic" src={Gallerypic} alt="gallery picture"/>
            </div>
            <Link to="/artworklist"><button className="link_btn">zur Galerie</button></Link>
        </div>
    )
}
export default Home;
