import React from 'react'
import './Ajouter.css'
import Navbar from "../../Acceuil/Navbar/Navbar";
import AcheterDislpay from './AchteterDispaly';
import Acheterbackground from '../../../Images/acheterbackg.jpg'
import Footer from '../../Acceuil/Footer/Footer';
import casablanca from '../../../Images/img29.jpg'
import Rabat from '../../../Images/img13.jpg'
import Tanger from '../../../Images/img26.jpg'
import Agadir from '../../../Images/14.jpg'
import Safi from '../../../Images/img23.jpg'
import Marakech from '../../../Images/img15.jpg'
import Anfa from '../../../Images/img25.jpg'
import Cil from '../../../Images/img27.jpg'
import Oasis  from '../../../Images/img28.jpg'
import imagecover from '../../../Images/imgfooter3.webp'

function Acheter(){
    const Appartements=[
        {id:1,imageUrl:casablanca,ApparName: 'Appartement Moderne à Anfa',ville:'Casablanca | Anfa',chambre:'4',sallebain:'2',surface:'120 m2',price:'1.000.000',Texte:'Découvrez ce superbe appartement de 120 m² avec une grande terrasse ensoleillée, situé dans une résidence sécurisée avec concierge. Offrant un double salon lumineux, deux chambres spacieuses avec placards intégrés, et une cuisine équipée moderne, il est idéal pour une vie urbaine chic et confortable. Finitions haut de gamme, climatisation centralisée, et place de parking incluse.',isOnSale:true},
        {id:2,imageUrl:Rabat,ApparName: 'Vue Mer à Ain Diab',ville:'Casablanca | Ain Diab',surface:'140 m2',chambre:'6',sallebain:'2',price:'1.200.000',Texte:'Rare opportunité d’acquérir un appartement de 140 m² en front de mer, avec un balcon panoramique offrant une vue imprenable sur l’océan Atlantique. Trois chambres lumineuses, un salon spacieux avec grandes baies vitrées, et une cuisine entièrement équipée. Résidence haut standing avec ascenseur et sécurité 24h/24. Un cadre de vie exceptionnel pour les amoureux de la mer.',isOnSale:true},
        {id:3,imageUrl:Marakech,ApparName: 'Coup de cœur à Gauthier',ville:'Casablanca | Gauthier',surface:'90 m2',chambre:'4',sallebain:'1',price:'860.000',Texte:'Charmant appartement de 90 m², entièrement rénové avec des matériaux de qualité. Situé au cœur de Gauthier, ce bien propose une ambiance cosy avec parquet en bois massif, cuisine ouverte sur le séjour, et une salle de bain moderne. À proximité des cafés, restaurants, et boutiques tendance. Parfait pour un jeune actif ou un investissement locatif rentable.',isOnSale:true},
        {id:4,imageUrl:Agadir,ApparName: 'Appartement familial à Californie',ville:'Casablanca | Californie',surface:'110 m2',chambre:'5',sallebain:'2',price:'1.500.000',Texte:'Loft de 110 m² au style industriel unique, avec plafonds de 4 mètres, poutres apparentes et grandes baies vitrées. Espace ouvert avec salon et cuisine américaine, chambre mezzanine, et salle d’eau moderne. Ce bien atypique est idéal pour un artiste, un freelance ou toute personne recherchant un espace de caractère. À deux pas du centre-ville.',isOnSale:true},
        {id:5,imageUrl:Safi,ApparName: 'Loft de style industriel à Bourgogne',ville:'Casablanca | Bourgogne',surface:'150 m2',chambre:'7',sallebain:'2',price:'950.000',Texte:'Loft de 150 m² au style industriel unique, avec plafonds de 4 mètres, poutres apparentes et grandes baies vitrées. Espace ouvert avec salon et cuisine américaine, chambre mezzanine, et salle d’eau moderne. Ce bien atypique est idéal pour un artiste, un freelance ou toute personne recherchant un espace de caractère. À deux pas du centre-ville.',isOnSale:true},
        {id:6,imageUrl:Tanger,ApparName: 'Résidence neuve à Maarif Extension',ville:'Casablanca | Maarif',surface:'105 m2',chambre:'4',sallebain:'2',price:'920.000',Texte:'Appartement flambant neuf de 105 m² dans une résidence moderne avec ascenseur, parking en sous-sol et gardiennage. Il comprend une suite parentale, une deuxième chambre, un salon lumineux, deux salles de bains et une cuisine équipée. Emplacement stratégique proche des centres commerciaux, écoles et du tramway. Idéal pour un premier achat.',isOnSale:true},
        {id:7,imageUrl:Oasis,ApparName: 'Appartement avec jardin privatif à Oasis',ville:'Casablanca | Oasis',surface:'130 m2',chambre:'5',sallebain:'3',price:'1.280.000',Texte:'Exceptionnel rez-de-jardin de 130 m², avec un espace vert privatif de 50 m². Composé de deux chambres, un salon donnant sur une terrasse arborée, une cuisine fermée, deux salles de bains, et une buanderie. Résidence paisible avec concierge, à proximité des commodités. Un compromis parfait entre appartement et maison.',isOnSale:true},
        {id:8,imageUrl:Anfa,ApparName: 'Investissement locatif à Derb Ghallef',ville:'Casablanca | Derb Ghallef',surface:'160 m2',chambre:'7',sallebain:'3',price:'1.550.000',Texte:'Penthouse de 160 m² avec 40 m² de terrasse plein ciel, situé au dernier étage d’un immeuble sécurisé. Triple exposition, salon avec baies vitrées, cuisine moderne, suite parentale avec dressing, et deux chambres supplémentaires. Idéal pour une vie citadine luxueuse avec une vue imprenable sur Casablanca. Place de parking incluse.',isOnSale:true},
        {id:9,imageUrl:casablanca,ApparName: 'Appartement moderne à Anfa',ville:'Casablanca | Anfa',surface:'65 m2',chambre:'4',sallebain:'1',price:'1.600.000',Texte:'Appartement de 65 m² optimisé pour l’investissement : salon lumineux, deux chambres, cuisine équipée et salle de bain fonctionnelle. À quelques minutes à pied du tramway et du marché, dans une rue calme. Fort potentiel de rendement locatif, avec faibles charges. Parfait pour un investisseur ou un jeune couple souhaitant s’installer.',isOnSale:true},
        {id:10,imageUrl:Cil,ApparName: 'Élégance au CIL',ville:'Casablanca | CIL',surface:'125 m2',chambre:'5',sallebain:'2',price:'1.300.000',Texte:'Bel appartement de 125 m² dans une résidence de haut standing au CIL. Sols en marbre, double vitrage, climatisation intégrée, et finitions élégantes. Composé d’un double salon, cuisine équipée, deux chambres dont une suite parentale, deux salles de bains, et un balcon. Immeuble avec ascenseur, concierge et parking. Calme assuré à deux pas du centre.',isOnSale:true},
    ]

  return (
    <div>
      <Navbar/>
      <div className='imagetop'>
        <img  src={Acheterbackground} alt='mami'/>
        <div className="Textimage">
            <p>Superbe Appartement Moderne avec Finitions Haut de Gamme</p>
        </div>
        </div>

        <div className='Back'>
        <div className='section-titre'>
        <h2 >Liste des Biens Immobiliers à Vendre</h2> 
        </div>   
        


      <div className='AppartementsAcheter'>
      {Appartements.map((element)=>
            <AcheterDislpay key={element.id} imageUrl={element.imageUrl}
                ApparName={element.ApparName} Texte={element.Texte} ville={element.ville} surface={element.surface}
                price={element.price} chambre={element.chambre} sallebain={element.sallebain} isOnSale={element.isOnSale}/>
            )}
      </div>

      </div>
      <Footer/>      
    </div>
  )
}

export default Acheter
