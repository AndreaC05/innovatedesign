import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoBasico from "../components/InfoBasico";
import Fondo from "../assets/fondo.png";

export default function Planes() {
    return(
        <>
        <Navbar />
        <div className="container_planes">
             {/* Barra superior de información */}
                    <InfoBasico />
            
                    {/* Hero Section con imagen de fondo */}
                    <section
                      className="header"
                      style={{ backgroundImage: `url(${Fondo})` }}
                    >
                      <div className="tit">
                        <h1 className="animated-title">Nuestro Enfoque</h1>
                        <p className="animated-subtitle">
                          Diseñamos sitios web que fortalecen la imagen de tu negocio.
                        </p>
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
        </div>

        </>
    );
}