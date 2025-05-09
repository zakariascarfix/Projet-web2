import React from 'react'
import Navbar from "../../Acceuil/Navbar/Navbar";
import monimage from '../../../Images/acheterbackg.jpg'
const Vendre = () => {
  return (
    <div>
      <Navbar/>
      <div>
        {/* <img src={monimage} alt="mami" /> */}
        <div>
          <form className='Formulaire'>
            <label for='ville'>Ville</label>
            <input id='ville' type='texte'/>
            <label>Quartier</label>
            <input type='texte'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Vendre;
