import './Contact.css'
import Navbar from '../Acceuil/Navbar/Navbar'
import Footer from '../Acceuil/Footer/Footer'
import monimg from '../../Images/imgfooter2.jpg'
import { Link } from 'react-router-dom'
function Contact(){
    return(
        <div>
        <Navbar/>
        <div className="Contener">
            <img src={monimg} alt='koko'className="image_contact"/>
            <div className='Contact'>
                <h1>Contactez-nous</h1>
                <form  className="formulaire-contact">
                    <input type="text" placeholder="Nom et prénom" required />
                    <input type="email" placeholder="Adresse e-mail"  required/>
                    <input type="tel" placeholder="Numéro de téléphone " required/>
                    <select required>
                        <option value="">Objet du message</option>
                        <option value="info">Demande d'information</option>
                        <option value="support">Support technique</option>
                        <option value="partenariat">Partenariat</option>
                    </select>
                    <textarea placeholder="Votre message..." rows="5" required></textarea>
                    <label>
                        <input type="checkbox" required />
                        <Link to="/Confidentialite" >J’accepte la politique de confidentialité.</Link>
                    </label>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Contact;