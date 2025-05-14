import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
};
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        if (isHome) {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                const documentHeight = document.documentElement.scrollHeight;
                const windowHeight = window.innerHeight;
                const scrollableHeight = documentHeight - windowHeight;
                const scrollPercentage = scrollableHeight > 0
                    ? scrollPosition / scrollableHeight
                    : 0;
                setScrolled(scrollPercentage >= 0.25);
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll();

            return () => window.removeEventListener("scroll", handleScroll);
        } else {
            setScrolled(true);
        }
    }, [location]);

    // const toggleMenu = () => {
    //     setMenuOpen(!menuOpen);
    // };

    return (
        <nav className={`Navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="Nom-Societe-Logo">
                <span className="Titre"><span id="L1">I</span>mmo<span id="L2">F</span>acile</span>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>


            <ul className={`barre-taches ${menuOpen ? "show" : ""}`}>
                <li><Link to="/" className="Accueil">Accueil</Link></li>
                <li><Link to="/Acheter" className="Appartements">Acheter</Link></li>
                <li><Link to="/Vendre" className="Appartements">Vendre</Link></li>
                <li><Link to="/A_Propos" className="A propos">À propos</Link></li>
                <li><Link to="/Contact" className="Contacte">Contact</Link></li>
            </ul>
        </nav>

        
        

    );
}

export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);
//     const location = useLocation();
//     const isHome = location.pathname === "/";

//     const toggleMenu = () => {
//         setMenuOpen(prevState => !prevState);
//     };

//     useEffect(() => {
//         if (isHome) {
//             const handleScroll = () => {
//                 const scrollPosition = window.scrollY;
//                 const documentHeight = document.documentElement.scrollHeight;
//                 const windowHeight = window.innerHeight;
//                 const scrollableHeight = documentHeight - windowHeight;
//                 const scrollPercentage = scrollableHeight > 0
//                     ? scrollPosition / scrollableHeight
//                     : 0;
//                 setScrolled(scrollPercentage >= 0.25);
//             };

//             window.addEventListener("scroll", handleScroll);
//             handleScroll();

//             return () => window.removeEventListener("scroll", handleScroll);
//         } else {
//             setScrolled(true);
//         }
//     }, [location]);

//     return (
//         <nav className={`Navbar ${scrolled ? "navbar-scrolled" : ""}`}>
//             <div className="Nom-Societe-Logo">
//                 <span className="Titre">
//                     <span id="L1">I</span>mmo<span id="L2">F</span>acile
//                 </span>
//             </div>

//             {/* Bouton hamburger visible sur les petits écrans */}
//             <button className="menu-toggle" onClick={toggleMenu}>
//                 ☰
//             </button>

//             {/* Menu de navigation */}
//             <ul className={`barre-taches ${menuOpen ? "show" : ""}`}>
//                 <li><Link to="/" className="Accueil">Accueil</Link></li>
//                 <li><Link to="/Acheter" className="Appartements">Acheter</Link></li>
//                 <li><Link to="/Vendre" className="Appartements">Vendre</Link></li>
//                 <li><Link to="/A_Propos" className="A propos">À propos</Link></li>
//                 <li><Link to="/Contact" className="Contacte">Contact</Link></li>
//             </ul>
//         </nav>
//     );
// }

// export default Navbar;
