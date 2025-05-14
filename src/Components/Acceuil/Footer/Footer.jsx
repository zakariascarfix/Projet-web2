import React from "react";
import './Footer.css'
import logoTelephone from '../../../Images/logos/telephone.jpg'
import logoEmail from '../../../Images/logos/gmail.png'
import logoInstagram from '../../../Images/logos/instagram (1).png'
import logoFacebook from '../../../Images/logos/facebook (1).png'
import logoLinkedin from '../../../Images/logos/linkedin.png'
import imagecover from '../../../Images/imgfooter3.webp'

function Footer(){
    return(
        
        <footer className="my-footer">
            
            <div className="footer-container">
            
                <div className="f-A_props">
                    <h2>A propos</h2>
                    <p>Notre mission : vous aider à trouver l’appartement idéal,</p>
                    <p>au bon prix et dans la bonne ville. </p>
                    <p>Transparence, sécurité et accompagnement à chaque étape.</p>
                    
                </div>

                <div className="f-Appartement">
                    <h2>Appartement</h2>
                    <p>
                    Que vous cherchiez un pied-à-terre moderne en centre-ville,
                    un espace familial spacieux ou un investissement immobilier sûr
                    </p>  
                </div>

                <div className="f-contact">
                    <h2>Contact</h2>
                    <ul>
                            <li><img src={logoTelephone}/> (+212) 5 22 70 46 71</li>
                            <li><img src={logoTelephone}/> (+212) 6 61 44 24 27</li>
                            
                    </ul>
                </div> 
            </div>
            <div className="social-media">
                    <a href="mailto:zakariaguarnaoui@gmail.com">
                    <img src={logoEmail} alt="E-mail" />
                    </a>
                                                
                    <a href="https://www.instagram.com/" target="_blank">
                    <img src={logoInstagram} alt="Instagram"/>
                    </a>
                            
                    <a href="https://www.facebook.com/" target="_blank">
                    <img src={logoFacebook} alt="Facebook" />
                    </a>

                    <a href="https://www.Linkedin.com/" target="_blank">
                    <img src={logoLinkedin} alt="Linkedin" />
                    </a>
            </div>

            <div className="copyright">
                <p>Copyright <span>@ 2025</span> ImmoFacile</p>
            </div>
        </footer>
        
        
    )
}

export default Footer;