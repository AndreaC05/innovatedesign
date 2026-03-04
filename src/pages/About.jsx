import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoBasico from "../components/InfoBasico";
import Fondo from "../assets/fondo.png";
import "../style/About.css";

export default function About() {
  const services = [
    { icon: "pi-code", text: "Diseño y desarrollo de páginas web en React" },
    { icon: "pi-desktop", text: "Landing pages profesionales" },
    { icon: "pi-building", text: "Sitios web corporativos" },
    { icon: "pi-mobile", text: "Diseño responsive (PC, tablet y móvil)" },
    { icon: "pi-bolt", text: "Optimización de velocidad y rendimiento" },
    { icon: "pi-cloud-upload", text: "Publicación y despliegue web (Netlify)" },
    { icon: "pi-globe", text: "Configuración de dominio propio" },
  ];

  const features = [
    {
      icon: "pi-users",
      title: "Experiencia de Usuario",
      description:
        "Diseñamos interfaces intuitivas que mejoran la experiencia de tus visitantes",
    },
    {
      icon: "pi-chart-line",
      title: "Rendimiento Óptimo",
      description: "Sitios web ultrarrápidos que cargan en menos de 2 segundos",
    },
    {
      icon: "pi-shield",
      title: "Seguridad Garantizada",
      description: "Infraestructura moderna y certificados SSL incluidos",
    },
    {
      icon: "pi-sync",
      title: "Escalabilidad",
      description: "Soluciones que crecen junto a tu negocio sin limitaciones",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container_nosotros">
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
              <Button
                className="btn-primary"
                onClick={() => {
                  const phone = "51950874416"; // 👉 tu número con código de país (Perú = 51)
                  const message = encodeURIComponent(
                    "Hola, Deseo más información",
                  );
                  window.open(
                    `https://wa.me/${phone}?text=${message}`,
                    "_blank",
                  );
                }}
              >
                Contáctanos <i className="pi pi-arrow-right"></i>
              </Button>
              <Link to="/about">
                <Button className="btn-secondary">Nosotros</Button>
              </Link>
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

        {/* Sección About Hero con fondo blanco */}
        <section className="about-hero-white">
          <div className="about-hero-content">
            <div className="hero-badge-white">
              <i className="pi pi-star-fill"></i>
              <span>Acerca de INNOVATE DESIGN</span>
            </div>
            <h1>Creamos sitios web modernos que impulsan tu negocio</h1>
            <p className="hero-description">
              En INNOVATE DESIGN nos especializamos en el diseño y desarrollo de
              sitios web modernos, rápidos y profesionales utilizando tecnología
              React. Ayudamos a emprendedores y empresas a establecer una
              presencia digital sólida, atractiva y confiable, sin costos
              mensuales de hosting.
            </p>
            <div className="hero-stats-white">
              <div className="stat-item-white">
                <h3>15+</h3>
                <p>Proyectos completados</p>
              </div>
              <div className="stat-item-white">
                <h3>100%</h3>
                <p>Clientes satisfechos</p>
              </div>
              <div className="stat-item-white">
                <h3>24/7</h3>
                <p>Soporte técnico</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Misión */}
        <section className="about-mission">
          <div className="mission-container">
            <div className="mission-icon">
              <i className="pi pi-crown"></i>
            </div>
            <h2>Impulsamos el crecimiento de tu negocio</h2>
            <p>
              Creamos sitios web que no solo se ven bien, sino que funcionan
              rápido, generan confianza y mejoran la imagen de tu marca,
              ayudando a convertir visitantes en clientes.
            </p>
            <p>
              Desarrollamos soluciones enfocadas en rendimiento, diseño y
              experiencia de usuario, publicadas en infraestructuras modernas y
              seguras, listas para crecer junto a tu negocio.
            </p>
          </div>
        </section>

        {/* Sección Servicios */}
        <section className="about-services">
          <div className="services-header">
            <span className="section-badge">Nuestros Servicios</span>
            <h2>Todo lo que necesitas para tu presencia digital</h2>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <i className={`pi ${service.icon}`}></i>
                </div>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Características */}
        <section className="about-features">
          <div className="features-header">
            <span className="section-badge">¿Por qué elegirnos?</span>
            <h2>Especialistas en desarrollo frontend</h2>
            <p>
              Contamos con experiencia en tecnologías frontend modernas,
              aplicando buenas prácticas de desarrollo, diseño UI/UX y
              optimización web para ofrecer soluciones profesionales y
              escalables.
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <i className={`pi ${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Tecnologías */}
        <section className="about-tech">
          <div className="tech-container">
            <h2>Tecnologías que dominamos</h2>
            <div className="tech-grid">
              <div className="tech-item">
                <i className="pi pi-code"></i>
                <span>React</span>
              </div>
              <div className="tech-item">
                <i className="pi pi-palette"></i>
                <span>CSS3</span>
              </div>
              <div className="tech-item">
                <i className="pi pi-mobile"></i>
                <span>Responsive Design</span>
              </div>
              <div className="tech-item">
                <i className="pi pi-bolt"></i>
                <span>Performance</span>
              </div>
              <div className="tech-item">
                <i className="pi pi-cloud"></i>
                <span>Netlify</span>
              </div>
              <div className="tech-item">
                <i className="pi pi-shield"></i>
                <span>SSL/Security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección CTA Final */}
        <section className="about-cta">
          <div className="cta-content">
            <h2>¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p>
              Contáctanos hoy y comienza a construir la presencia digital que tu
              negocio merece
            </p>
            <div className="cta-buttons">
              <Button
                className="btn-cta-primary"
                onClick={() => {
                  const phone = "51950874416"; // 👉 tu número con código de país (Perú = 51)
                  const message = encodeURIComponent(
                    "Hola, deseo solicitar una cotización. ¿Podrían brindarme más información?",
                  );
                  window.open(
                    `https://wa.me/${phone}?text=${message}`,
                    "_blank",
                  );
                }}
              >
                Solicitar cotización <i className="pi pi-arrow-right"></i>
              </Button>
              <Button
                className="btn-cta-secondary"
                onClick={() => window.open("https://portafoliodesarrolladorfullstack.netlify.app/", "_blank")}
              >
                Ver portafolio <i className="pi pi-external-link"></i>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
