import React, { useState, useEffect } from "react";
import './Navbar.css';
import { useLocation, Link } from "react-router-dom";

function Navbar() {
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
            handleScroll(); // Pour gérer le cas où on recharge à moitié

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            // Si on est sur une autre page, on applique le fond noir directement
            setScrolled(true);
        }
    }, [location]);

    return (
        <nav className={`Navbar ${scrolled ? "navbar-scrolled" : ""}`}>
            <div className="Nom-Societe-Logo">
                <span className="Titre"><span id="L1">I</span>mmo<span id="L2">F</span>acile</span>
            </div>
            <ul className="barre-taches">
                <li><Link to="/" className="Accueil">Accueil</Link></li>
                <li><Link to="/Acheter" className="Appartements">Acheter</Link></li>
                <li><Link to="/Vendre" className="Appartements">Vendre</Link></li>
                <li><Link className="Contact">Contact</Link></li>
                <li><Link className="Sign_in">Sign in</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
