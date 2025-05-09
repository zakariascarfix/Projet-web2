import React,{Component} from "react";
import './Main.css'
import { Link } from "react-router-dom";
import AppartementDislpay from "./AppartementDispaly";

import casablanca from '../../../Images/img2.jpg'
import Rabat from '../../../Images/img13.jpg'
import Tanger from '../../../Images/img21.jpg'
import Agadir from '../../../Images/14.jpg'
import Safi from '../../../Images/img23.jpg'
import Marakech from '../../../Images/img15.jpg'
import imagecover from '../../../Images/imgfooter3.webp'

function CardsAppartement(){
    const Appartements=[
        {id:1,imageUrl:casablanca,name: 'image1',ville:'Casablanca|Bourgone',surface:'10000 m2',price:'1.000.000',isOnSale:true},
        {id:2,imageUrl:Rabat,name: 'image1',ville:'Tanger',surface:'10000 m2',price:'1.000.000',isOnSale:true},
        {id:3,imageUrl:Marakech,name: 'image1',ville:'Casablanca|Ain Diab',surface:'10000 m2',price:'1.000.000',isOnSale:true},
        // {id:4,imageUrl:Agadir,name: 'image1',ville:'Marrakech',surface:'10000 m2',price:'1.000.000',isOnSale:true},
        // {id:5,imageUrl:Safi,name: 'image1',ville:'Safi',surface:'10000 m2',price:'1.000.000',isOnSale:true},
        // {id:6,imageUrl:Tanger,name: 'image1',ville:'Casablanca|Ain Chok',surface:'10000 m2',price:'1.000.000',isOnSale:true},
        
    ]
    return(
        <>
        <h2 id="titre1">Appartements Disponibles</h2>
        <div className="section-titre2">
        <h2 >Acheter</h2>  
        </div>
        
        <h4 id="titre3">OFFRES DU MOMENTS</h4>
        
        <div className="Mes-Appartemens">

        {Appartements.map((element)=>
            <AppartementDislpay key={element.id} imageUrl={element.imageUrl}
                productName={element.name} ville={element.ville} surface={element.surface}
                price={element.price}  isOnSale={element.isOnSale}/>
            )}

        </div>
        
        <div className="button-offres">
            <Link to="/Acheter"><button>Toutes nos offres ➜</button></Link>
        </div>

        <div className="image_cover-texte"> 
            <img src={imagecover} className="image_cover" alt=""/>

            <div className="Textimagecard">
                <h1>Votre futur appartement, c’est ici que tout commence</h1>
                <p>Nous vous accompagnons pour trouver le meilleur appartement selon vos besoins</p>
            </div>

            <div className="cards-container">
                <div className="card">
                    <p><strong>🏠   +200</strong></p>
                    <hr/>
                    <p>Appartements</p>
                </div>
                <div className="card">
                    <p><strong>🌟   +100</strong></p>
                    <hr/>
                    <p>Clients satisfaits</p>
                </div>
                <div className="card">
                    <p><strong>📊   100%</strong></p>
                    <hr/>
                    <p>Transparence</p>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default CardsAppartement;