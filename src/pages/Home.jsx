import { useState } from 'react';
import Fondo from "../assets/fondo.png";
import Logo from "../assets/Logo_claro.svg";
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InfoBasico from '../components/InfoBasico';
import SectionNosotros from '../components/SectionNosotros';
import SectionBeneficios from '../components/SectionBeneficios';
import "../style/Home.css";

export default function Home() {
  

  return (
    <>
      <Navbar />
      <div className="container_principal">
        {/* Barra superior de información */}
        <InfoBasico />
        {/* Hero Section con imagen de fondo */}
        <section className="header" style={{ backgroundImage: `url(${Fondo})` }}>
          <div className="tit">
            <h1 className="animated-title">Innovate Design</h1>
            <p className="animated-subtitle">Creamos sitios web rápidos, modernos y profesionales</p>
            <div className="buttons">
              <Button className="btn-primary">
                Contactanos <i className="pi pi-arrow-right"></i>
              </Button>
              <Link to="/about"><Button className="btn-secondary">Nosotros</Button></Link>
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