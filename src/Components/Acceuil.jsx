import React,{Component} from "react";
import './Acceuil/Navbar/Navbar'
import Navbar from "./Acceuil/Navbar/Navbar";
import Videohome from "./Acceuil/Main/Videohome";
import './Acceuil/Main/AppartmentCard';
import CardsAppartement from "./Acceuil/Main/AppartmentCard";
import TextePersuasion from "./Acceuil/Main/Textemilieu";
import Footer from "./Acceuil/Footer/Footer";

function Acceuil(){
    return(
        <div>
            <Navbar/>
            <Videohome/>
            <TextePersuasion/>
            <CardsAppartement/>
            <Footer/>
            
        </div>
    )
}
export default Acceuil;