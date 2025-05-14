import React,{Component} from "react";
import imagefamilly from '../../../Images/image familly.jpeg'
function TextePersuasion(){
    return(
        <div className="Text-container">
            
            <div id="Text_image">
                <div>
                    <h1 id="Titre">Trouvez l'appartement de vos rêves dès aujourd'hui !</h1>
                    <p>
                    Que vous cherchiez un pied-à-terre moderne en centre-ville, un espace familial spacieux ou un investissement immobilier sûr,
                    nous avons ce qu'il vous faut.
                    Explorez notre sélection exclusive d'appartements à vendre, soigneusement choisis pour leur confort, 
                    leur emplacement et leur valeur.
                    </p>
                    <p>🔑 Qualité, sécurité et prix adaptés à votre budget.</p>
                    <p>📍 Disponibles dans les meilleures villes du Maroc.</p>
                </div>
                <div className="imagefamilly">
                <img src={imagefamilly} alt="image family"/>
                </div>
                
            </div>

            
        

            
        </div>
    )
}
export default TextePersuasion;