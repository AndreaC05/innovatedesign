import { useState } from 'react';
import Fondo from "../assets/fondo.png";
import Logo from "../assets/Logo_claro.svg";
import { Button } from 'primereact/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionNosotros from '../components/SectionNosotros';
import SectionBeneficios from '../components/SectionBeneficios';
import "../style/Home.css";

export default function Home() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Español');

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setLanguageOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="container_principal">
        {/* Barra superior de información */}
        <div className="info_bac">
          <div className="section_header">
            <div className="email">
              <i className="pi pi-envelope"></i>
              <p>aguirreandrea457@gmail.com</p>
            </div>
            <div className="direccion">
              <i className="pi pi-map-marker"></i>
              <p>Calle Inca Garcilazo de la Vega 136 - Comas</p>
            </div>
          </div>
          <div className="section_header">
            <div className="language-selector">
              <div 
                className="lenguage" 
                onClick={() => setLanguageOpen(!languageOpen)}
              >
                <i className="pi pi-globe"></i>
                <p>{selectedLanguage}</p>
                <i className={`pi pi-chevron-${languageOpen ? 'up' : 'down'} chevron-icon`}></i>
              </div>
              {languageOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="language-option"
                      onClick={() => handleLanguageSelect(lang)}
                    >
                      <span className="flag">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hero Section con imagen de fondo */}
        <section className="header" style={{ backgroundImage: `url(${Fondo})` }}>
          <div className="tit">
            <h1 className="animated-title">Innovate Design</h1>
            <p className="animated-subtitle">Creamos sitios web rápidos, modernos y profesionales</p>
            <div className="buttons">
              <Button className="btn-primary">
                Contactanos <i className="pi pi-arrow-right"></i>
              </Button>
              <Button className="btn-secondary">Nosotros</Button>
            </div>
          </div>
          
          {/* Partículas flotantes decorativas */}
          <div className="floating-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </section>
        <section className="nosotros_section">
            <SectionNosotros />
        </section>
        <section className='beneficios_section'>
              <SectionBeneficios />
        </section>
      </div>
      <Footer />
    </>
  );
}