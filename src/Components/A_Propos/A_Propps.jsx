import './A_Propos.css'
import Navbar from '../Acceuil/Navbar/Navbar';
import  image_intro from'../../Images/imageintro.jpg'
import image_profile from '../../Images/img1.jpg'
import imagevision from '../../Images/imagevision4.jpg'
import imagecaract from '../../Images/imagecaract.jpg'
import iconehomme from '../../Images/logos/iconehomme.png'
import iconefemme from '../../Images/logos/iconefemme.jpg'
import  Footer from '../Acceuil/Footer/Footer';
function A_Propos(){
    return(
        <div>
            <Navbar/>
            <div className='About-us'>
                <div className='Titres_intro'>
                    <h1>Qui somme-Nous?</h1>
                    <p>Pas juste un site internet mais une vraie société derrière tout ça !</p>
                </div>
                <div className='intorduction'>
                    <div className='image_intro'>
                        <img src={image_intro} alt='mama'/>
                    </div>
                    <div className='Texte_intro'>
                        <p>
                            L’idée de ce site est née d’un constat <strong>simple mais puissant</strong> : vendre ou acheter un appartement peut rapidement devenir un <strong>véritable parcours du combattant</strong>. Entre les agences coûteuses, les frais cachés et les démarches interminables, de nombreux particuliers se sentent dépassés et mal accompagnés.
                        </p>
                        <p>
                            <strong>En 2025, une vision audacieuse a vu le jour</strong> : créer une plateforme immobilière <strong>moderne, transparente et humaine</strong>. Une alternative numérique conçue pour <strong>simplifier chaque étape</strong>, remettre la clarté au cœur des transactions, et redonner le contrôle aux vendeurs et acheteurs. Ici, <strong>pas de complications inutiles</strong>. Juste une expérience fluide, rapide et fiable, pensée pour ceux qui veulent avancer en toute confiance.
                        </p>
                        <p>
                            <strong>Notre ambition est claire</strong> : rendre l’immobilier accessible à tous, que vous soyez <strong>vendeur pressé ou acheteur exigeant</strong>. Grâce à notre interface intuitive, chacun peut publier ou consulter une annonce, obtenir des réponses rapides, et entamer un processus de vente ou d’achat en toute sérénité.
                        </p>
                        <p>
                            Nous avons misé sur la <strong>digitalisation intelligente</strong> : un formulaire clair, une estimation sans engagement, et des échanges directs entre particuliers, sans pression ni frais d’agence. <strong>Notre équipe travaille chaque jour</strong> pour améliorer cette expérience et répondre aux besoins de nos utilisateurs.
                        </p>
                    </div>
                </div>
            </div>

            <div className='Vision'>
                <div className='Titres_vision'>
                    <h1>Notre vision</h1>
                    <p>Un immobilier plus juste, plus fluide et sans barrières.</p>
                </div>
                <div className='contenu_vision'>
                    <div className='image_vision'>
                        <img src={imagevision} alt='vision'/>
                    </div>
                    <div className='Texte_vision'>
                        <p>
                            Nous croyons en un <strong>marché immobilier plus juste, plus transparent et plus accessible</strong>. 
                            Notre ambition est de devenir <strong>la solution de référence</strong> pour tous ceux qui souhaitent 
                            <strong>acheter ou vendre un bien</strong> sans les lourdeurs du système traditionnel. 
                            Nous voulons bousculer les codes établis et proposer une alternative 
                            <strong>moderne, efficace et sans contraintes</strong>, pensée avant tout pour les particuliers.
                        </p>
                        <p>
                        <strong>Notre vision repose sur la simplicité, la confiance et l’efficacité</strong>. 
                        Chaque utilisateur mérite une expérience <strong>fluide, humaine et personnalisée</strong>, 
                        où chaque étape est claire, rapide et sans stress. C’est dans cette direction que nous construisons 
                        chaque jour : en mettant <strong>l’innovation au service de l’humain</strong>, 
                        et en créant une plateforme qui s’adapte aux besoins concrets de nos clients, aujourd’hui et demain.
                        </p>
                    </div>
                </div>
            </div>


            <div className='caracteristiques'>
                <div className='Titres_caract'>
                    <h1>Ce qui nous différencie</h1>
                </div>
                
                <div className='contenu_caract'>
                    <div className='image_caract'>
                        <img src={imagecaract} alt='vision'/>
                    </div>
                    <div className='Texte_caract'>
                        <p>✅ <strong>Rapidité garantie</strong> : Recevez une offre ferme sous 48 heures après soumission de votre bien. Plus besoin d'attendre des semaines pour avancer.</p>
                        <p>✅ <strong>Paiement sécurisé et rapide</strong> : Le versement s’effectue en toute transparence, via un canal sécurisé, pour vous garantir une transaction fluide sans retard.</p>
                        <p>✅ <strong>Sans frais cachés</strong> : Aucun frais d'agence, ni commissions surprises. Vous touchez l'intégralité de la somme convenue.</p>
                        <p>✅ <strong>Flexibilité totale</strong> : Vente urgente, succession, hypothèque, divorce... nous nous adaptons à chaque situation avec des solutions concrètes.</p>
                        <p>✅ <strong>Transparence à chaque étape</strong> : Suivez l’avancement de votre dossier en temps réel et soyez informé à chaque prise de décision, sans zones d’ombre.</p>
                        <p>✅ <strong>Évaluation gratuite et sans engagement</strong> : Faites estimer votre bien simplement, sans frais ni pression pour vendre ensuite.</p>
                        <p>✅ <strong>Accompagnement personnalisé</strong> : Un conseiller expert vous est dédié, de l’évaluation initiale jusqu'à la signature finale.</p>
                        <p>✅ <strong>100 % digital, 100 % humain</strong> : Une plateforme intuitive accessible partout, avec une équipe réactive pour répondre à toutes vos questions.</p>
                        
                    </div>
                    
                </div>
            </div>

            <div className='Avis-clients'>
                <div className='Avis_texte'>
                    <h1>Avis clients</h1>
                    <p>Ils témoignent de notre engagement à offrir une expérience rapide, simple et transparente à tous nos clients. Pourquoi pas vous ?</p>
                </div>
                <div className='Avis-clients-cards'>
                    <div className='Avis-clients-card'>
                        <img src={iconehomme} alt='mami'/>
                        <span>⭐⭐⭐⭐⭐</span>
                        <h2>Yassine K. — Marrakech</h2>
                        <p>"Je ne m’attendais pas à ce que ce soit aussi simple de vendre un bien. Le site est bien pensé, sans paperasse inutile ni intermédiaire. J’ai apprécié la rapidité des réponses et surtout la transparence tout au long du processus. Une solution moderne qui mérite d’être connue !"</p>
                    </div>
                    <div className='Avis-clients-card'>
                        <img src={iconefemme} alt='mami'/>
                        <span>⭐⭐⭐⭐⭐</span>
                        <h2>Sofia L. — Rabat</h2>
                        <p>"Acheter un bien immobilier me stressait beaucoup, mais cette plateforme m’a facilité la vie. Tout est clair, les annonces sont fiables, et j’ai pu contacter directement les propriétaires. J’ai trouvé mon appartement en une semaine, et tout s’est fait sereinement. Merci pour cette belle expérience !"</p>
                    </div>
                    <div className='Avis-clients-card'>
                        <img src={iconehomme} alt='mami'/>
                        <span>⭐⭐⭐⭐⭐</span>
                        <h2>Mohamed B. — Casablanca</h2>
                        <p>"Je voulais vendre mon appartement sans passer par des agences, et ce site a été une vraie révélation. En quelques clics, j’ai rempli le formulaire, et j’ai reçu une offre sérieuse en moins de 48h. Transparent, rapide et sans frais cachés. Franchement, je recommande à 100% !"</p>
                    </div>
                </div>
               
            </div>

    <Footer/>  
        </div>
    )
}
export default A_Propos;