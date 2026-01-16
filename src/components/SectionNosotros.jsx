import "../style/ComponentsStyle/SectionNosotros.css";
import style from "../assets/style.svg";
import Imagen1 from "../assets/imagen1.png";
import Imagen2 from "../assets/imagen2.png";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

export default function SectionNosotros() {
  return (
    <>
      <section className="section-nosotros" id="nosotros">
        {/* Decoración de fondo con puntos flotantes */}
        <div className="background-decoration">
          <img src={style} alt="decoration" className="floating-style" />
        </div>

        <div className="nosotros-container">
          {/* Columna izquierda - Imágenes */}
          <div className="nosotros-images">
            <div className="image-grid">
              <div className="image-wrapper image-1">
                <img src={Imagen1} alt="Equipo trabajando" />
              </div>
              <div className="image-wrapper image-2">
                <img src={Imagen2} alt="Profesional presentando" />
              </div>
            </div>
          </div>

          {/* Columna derecha - Contenido */}
          <div className="nosotros-content">
            <div className="content-header">
              <span className="section-tag">Acerca de Nuestra Compañía</span>
              <h2 className="section-title">
                Somos tu mejor Proveedor de{" "}
                <span className="highlight">Servicios Web</span>
              </h2>
            </div>

            <p className="section-description">
              Impulsa tu negocio con un sitio web moderno, rápido y profesional.
              En INNOVATE DESIGN desarrollamos páginas web pensadas
              para convertir visitantes en clientes.
            </p>

            {/* Lista de servicios en dos columnas */}
            <div className="services-grid">
              <div className="service-item">
                <i className="pi pi-check-circle"></i>
                <span>Diseño y desarrollo</span>
              </div>
              <div className="service-item">
                <i className="pi pi-check-circle"></i>
                <span>Diseño responsive</span>
              </div>
              <div className="service-item">
                <i className="pi pi-check-circle"></i>
                <span>Landing pages profesionales</span>
              </div>
              <div className="service-item">
                <i className="pi pi-check-circle"></i>
                <span>Optimización de velocidad</span>
              </div>
              <div className="service-item">
                <i className="pi pi-check-circle"></i>
                <span>Sitios web corporativos</span>
              </div>
              <div className="service-item">
                <i className="pi pi-check-circle"></i>
                <span>Publicación y despliegue web</span>
              </div>
            </div>

            {/* Cards de información */}
            <div className="info-cards">
              <div className="info-card">
                <div className="card-icon">
                  <i className="pi pi-chart-line"></i>
                </div>
                <div className="card-content">
                  <h3>El crecimiento del negocio</h3>
                  <p>Mejora tu productividad con nuestros servicios.</p>
                </div>
              </div>
              <div className="info-card">
                <div className="card-icon">
                  <i className="pi pi-users"></i>
                </div>
                <div className="card-content">
                  <h3>Consultores Web</h3>
                  <p>Contamos con expertos en diferentes tecnologías.</p>
                </div>
              </div>
            </div>

            {/* Botón de contacto */}
            <div className="nosotros-action">
              <Link to="/">
                <Button className="contact-btn">
                  Contáctanos <i className="pi pi-arrow-right"></i>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
