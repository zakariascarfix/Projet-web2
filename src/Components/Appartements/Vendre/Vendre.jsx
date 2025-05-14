import React from 'react'
import { useState } from 'react';
import './Vendre.css'
import Navbar from "../../Acceuil/Navbar/Navbar";
import Footer from '../../Acceuil/Footer/Footer';
import monimage from '../../../Images/vendreback3.jpg'
const Vendre = () => {
  const [formData, setFormData] = useState({
    ville: '',
    quartier: '',
    taille: '',
    chambres: '',
    details: '',
    titre: '',
    prix: '',
    telephone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis :', formData);
  };

  return (
    <div>
    <Navbar/>
    <div className="conteneur_principale">
    <img src={monimage} alt="image" className="background-image" />

    <div className="titre_and_formulaire">
    <div className="bloc-texte">
      <h1>Vendre Votre appartement au Maroc rapidement </h1>
      <p>Décrivez votre appartement et obtenez une proposition de rachat sous 48h ! Offre gratuite et sans engagement.</p>
    </div>

    <form onSubmit={handleSubmit} className="formulaire-immobilier">
      <input name="ville" value={formData.ville} onChange={handleChange} placeholder="Ville*" required />
      <input name="quartier" value={formData.quartier} onChange={handleChange} placeholder="Quartier*" required />

        <div className="input_unite">
          <input
            name="taille"
            value={formData.taille}
            onChange={handleChange}
            placeholder="Taille du bien en M²*"
            required
          />
          <span className="unite">M²</span>
        </div>

        <input
          name="chambres"
          value={formData.chambres}
          onChange={handleChange}
          placeholder="Nombre de chambres*"
          type='number'
          required
        />

        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Détails"
        />

        <select name="titre" value={formData.titre} onChange={handleChange} required>
          <option value="">Le bien est-il titré ?*</option>
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>

        <div className="input_unite">
          <input
            name="prix"
            value={formData.prix}
            onChange={handleChange}
            placeholder="Prix de rachat souhaité"
          />
          <span className="unite">DH</span>
        </div>
      

    <div className="telephone">
      <input
        type="tel"
        name="telephone"
        value={formData.telephone}
        onChange={handleChange}
        placeholder="Numéro de téléphone*"
        required
      />
    </div>



    <input
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Adresse e-mail*"
      required
    />

        <button type="submit">Envoyer Mon Offre</button>
    </form>
  </div>
</div>
  <Footer/>
  </div>
  );
};

export default Vendre;
