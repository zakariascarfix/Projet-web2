import { Link } from "react-router-dom";
import './Errour.css'
function Error(){
    return(
        <div className="Error-contener">
        <h1>Error 404!</h1>
        <div className="retour">
           <Link to="/" className="Accueil"><button>Retour a la page d'Accueil</button></Link>
        </div>
        </div>
    )
}
export default Error;