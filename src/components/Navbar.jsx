import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import Logo from "../assets/Logo_oscuro.svg";
import { Link } from 'react-router-dom';
import "../style/Navbar.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={Logo} alt="Innovate Design Logo" />
                </div>

                <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
                    <Link to="/" className="navbar-link">Home</Link>
                    <Link to="/about" className="navbar-link">About</Link>
                    <Link to="/innovatedesignplans" className="navbar-link">Innovate Design plans</Link>
                    <Link to="/contact" className="navbar-link">Contact</Link>
                </div>

                <div className="navbar-actions">
                    <Link to="/innovatedesignplans">
                    <Button className="navbar-btn">
                         Elegir Plan
                    </Button></Link>
                </div>

                <div className="navbar-hamburger" onClick={toggleMenu}>
                    <span className={menuOpen ? 'active' : ''}></span>
                    <span className={menuOpen ? 'active' : ''}></span>
                    <span className={menuOpen ? 'active' : ''}></span>
                </div>
            </div>
        </nav>
    );
}