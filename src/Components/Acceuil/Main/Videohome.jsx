import React from 'react'
import { Link } from 'react-router-dom';
import videonavbar from '../../Videos/video1.mp4';
import './Videohome.css';
function Videohome(){
  return (
   
        <div className="video-header">
                    <video autoPlay loop muted className="video">
                    <source src={videonavbar} type="video/mp4" />
                    </video>
                <div className="TextVideo">
                    <h1>Bienvenue sur ImmoFacile</h1>
                    <p>Achetez ou vendez vos appartements en toute simplicité</p>
                    {/* <a href='#texte_image'><p className="p5">Plus D'informations...➤</p></a> */}
                    <button className="home-button" onClick={() => window.scrollTo(
                      {
                        top: 720,
                        left: 0,
                        behavior: "smooth"
                      })}>Explorer</button>
                </div>
        </div>
   
  )
}

export default Videohome;
