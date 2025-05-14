import React from "react";
import { Link } from "react-router-dom";
function AcheterDislpay({imageUrl,price,ApparName,ville,Texte,surface,chambre,sallebain}){
        
        
        
    return(
        <div className="AppartementsAcheter-cards">
            <div className="ApparName">
                <p>{ApparName}</p>
            </div>
            <div className="image_prix_texte">
                <img  src={imageUrl}  alt={ApparName}className="image"/>
                <div className="prix_texte">
                    <div className="prix">
                        <p>{price} MAD</p>
                    </div>
                    <div className="texte">
                        <p>{Texte}</p>
                    </div>
                    <div className="contact-card">
                    <p><Link to="/Contact">📞Contactez-Nous</Link></p>
                    </div>
                </div>
        </div>
            <div className="infos">
                <p className="p1">📐  <span>{surface}</span> </p>
                <p className="p4">🛏️   <span>{chambre}</span> Chambres </p>
                <p className="p4">🛁   <span>{sallebain}</span> Salles de bains </p>
                <p className="p4">🅿️    Parking </p>
                <p className="p4">📍 Adresse: <span>{ville}</span> </p>
            </div>
            
            
    
        </div>
        
    )
}

export default AcheterDislpay;