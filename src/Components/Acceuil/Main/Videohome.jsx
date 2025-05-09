import React from 'react'
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
                </div>
        </div>
   
  )
}

export default Videohome;
