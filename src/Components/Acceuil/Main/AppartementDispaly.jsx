import React from "react";
import './Main.css'
import { Link } from "react-router-dom";
function AppartementDislpay({imageUrl,price,productName,ville,surface,titre,isOnSale}){
        
        
        
    return(
        

        <div className="Appartement-cards">
            <div className="image_and_button">
            <a href="#" target="_blank">
            <img  src={imageUrl}  alt={productName}className="image"/></a>

            <Link to='/Acheter'><button id="my-button">voir details...</button></Link>
            </div>
            
            <div className="Appartement-infos">
            <p className="p1">{titre}</p>
            
            <p className="p2">💰 Prix: <span>{price}</span> </p>
            <p className="p3">🏡 Surface: <span>{surface}</span> </p>
            <p className="p4">📍 Posistion: <span>{ville}</span> </p>
            <Link to='/Acheter'><p className="p5">Plus D'informations...➤</p></Link>
        
        
        
        </div>
        
    
        </div>
        
    )
}

export default AppartementDislpay;