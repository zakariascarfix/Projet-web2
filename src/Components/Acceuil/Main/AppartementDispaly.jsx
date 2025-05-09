import React from "react";
import './Main.css'
function AppartementDislpay({imageUrl,price,productName,ville,surface,isOnSale}){
        
        
        
    return(
        

        <div className="Appartement-cards">
            <div className="image_and_button">
            <a href="#" target="_blank">
            <img  src={imageUrl}  alt={productName}className="image"/></a>
            <a href="#" target="_blank">
            <button id="my-button">voir details...</button></a>
            </div>
            
            <div className="Appartement-infos">
            <p className="p1">CASA BOURGOGNE VEND CONFORTABLE APPART 100 m² 2 CHAMBRES PAS CHER</p>
            
            <p className="p2">💰 Prix: <span>{price}</span> </p>
            <p className="p3">🏡 Surface: <span>{surface}</span> </p>
            <p className="p4">📍 Posistion: <span>{ville}</span> </p>
            <a href="#"><p className="p5">Plus D'informations...➤</p></a>
        
        
        
        </div>
        
    
        </div>
        
    )
}

export default AppartementDislpay;