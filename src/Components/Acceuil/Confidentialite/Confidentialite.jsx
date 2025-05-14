import { Link } from 'react-router-dom';
import './Confidentialite.css';

function Confidentialite() {
  return (
    <div className="confidentialite-container">
      <h1>Politique de Confidentialité</h1>
      <p><strong>Dernière mise à jour :</strong> 11 mai 2025</p>

      <section>
        <h2>1. Données collectées</h2>
        <p>
          Lorsque vous utilisez notre formulaire de contact, nous collectons :
        </p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone (facultatif)</li>
          <li>Objet et contenu de votre message</li>
        </ul>
      </section>

      <section>
        <h2>2. Utilisation des données</h2>
        <p>
          Ces données sont utilisées uniquement pour :
        </p>
        <ul>
          <li>Répondre à vos messages</li>
          <li>Vous contacter si nécessaire</li>
          <li>Améliorer nos services</li>
        </ul>
        <p>Nous ne partageons jamais vos données avec des tiers.</p>
      </section>

      <section>
        <h2>3. Sécurité</h2>
        <p>
          Nous protégeons vos données grâce à des mesures techniques adaptées.
        </p>
      </section>

      <section>
        <h2>4. Vos droits</h2>
        <p>
          Vous pouvez nous contacter pour :
        </p>
        <ul>
          <li>Accéder à vos données</li>
          <li>Les modifier ou les supprimer</li>
          <li>Retirer votre consentement</li>
        </ul>
        
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          Ce site utilise des cookies à des fins de navigation et d’analyse.
        </p>
      </section>

      <div className="retour-contact">
        <Link to="/contact">
          <button>Retour au formulaire de contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Confidentialite;
