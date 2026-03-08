import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoBasico from "../components/InfoBasico";
import Fondo from "../assets/fondo.png";
import "../style/Planes.css";

export default function Planes() {
  const planes = [
    {
      numero: "1",
      nombre: "Landing Page",
      descripcion: "Ideal para emprendedores y negocios pequeños",
      precio: "110",
      caracteristicas: [
        "Desarrollo en código personalizado",
        "Diseño moderno y responsive",
        "Página única (scroll)",
        "Optimización de velocidad",
        "Deploy en Netlify (SSL incluido)",
        "Configuración de dominio",
        "Soporte inicial post-entrega (7 días)",
      ],
      cta: "Solicitar este plan",
      destacado: false,
    },
    {
      numero: "2",
      nombre: "Web Corporativa",
      descripcion: "Para empresas que buscan presencia profesional",
      precio: "200",
      caracteristicas: [
        "Desarrollo en código personalizado",
        "Hasta 5 secciones",
        "Diseño personalizado",
        "Optimización SEO básica",
        "Carga ultra rápida",
        "Deploy en Netlify + CDN",
        "Configuración de dominio",
        "Soporte técnico incluido (15 días)",
      ],
      cta: "Quiero mi web corporativa",
      destacado: true,
    },
    {
      numero: "3",
      nombre: "Web Empresarial",
      descripcion: "Soluciones modernas para empresas en crecimiento",
      precio: "300",
      caracteristicas: [
        "Desarrollo frontend avanzado",
        "Arquitectura frontend escalable",
        "Alto rendimiento y seguridad",
        "SEO técnico básico",
        "Infraestructura moderna (Netlify + CDN)",
        "Dominio propio (configuración incluida)",
        "Diseño UI/UX avanzado",
        "Soporte prioritario (30 días)",
      ],
      cta: "Hablar con un asesor",
      destacado: false,
    },
  ];

  return (
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
            <h1 className="animated-title">Planes INNOVATE DESIGN</h1>
            <p className="animated-subtitle">
              Elige el plan ideal y lleva tu negocio al siguiente nivel digital.
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
                Contactanos <i className="pi pi-arrow-right"></i>
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

        {/* Sección de Planes */}
        <section className="planes-section">
          <div className="planes-header">
            <span className="planes-badge">Nuestros Planes</span>
            <h2>Soluciones diseñadas para cada etapa de tu negocio</h2>
            <p>
              Elige el plan que mejor se adapte a tus necesidades y objetivos
            </p>
          </div>

          <div className="planes-grid">
            {planes.map((plan, index) => (
              <div
                key={index}
                className={`plan-card ${plan.destacado ? "plan-destacado" : ""}`}
              >
                {plan.destacado && (
                  <div className="plan-badge-popular">
                    <i className="pi pi-star-fill"></i>
                    <span>Más Popular</span>
                  </div>
                )}

                <div className="plan-header">
                  <div className="plan-numero">
                    <span>Plan {plan.numero}</span>
                  </div>
                  <h3>{plan.nombre}</h3>
                  <p className="plan-descripcion">{plan.descripcion}</p>
                </div>

                <div className="plan-precio">
                  <div className="precio-wrapper">
                    <span className="moneda">$</span>
                    <span className="cantidad">{plan.precio}</span>
                  </div>
                  <p className="precio-detalle">Pago único</p>
                </div>

                <div className="plan-caracteristicas">
                  <ul>
                    {plan.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx}>
                        <i className="pi pi-check-circle"></i>
                        <span>{caracteristica}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plan-cta">
                  <Button
                    className={
                      plan.destacado ? "btn-plan-destacado" : "btn-plan"
                    }
                    onClick={() => {
                      const phone = "51950874416"; // 👉 tu número con código de país (Perú = 51)
                      const message = encodeURIComponent(
                        "Hola, que plan me podrias recomendar?",
                      );
                      window.open(
                        `https://wa.me/${phone}?text=${message}`,
                        "_blank",
                      );
                    }}
                  >
                    {plan.cta} <i className="pi pi-arrow-right"></i>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nota sobre dominios */}
        <section className="nota-dominios">
          <div className="nota-container">
            <div className="nota-icon">
              <i className="pi pi-info-circle"></i>
            </div>
            <div className="nota-contenido">
              <h4>Información sobre dominios</h4>
              <p>
                El dominio es propiedad del cliente y se paga de forma anual. Se
                puede usar un dominio propio o una URL temporal de Netlify.
              </p>
            </div>
          </div>
        </section>

        {/* Sección de Comparación */}
        <section className="comparacion-section">
          <div className="comparacion-container">
            <h2>¿No estás seguro qué plan elegir?</h2>
            <p>
              Nuestro equipo está listo para ayudarte a encontrar la solución
              perfecta para tu negocio
            </p>
            <div className="comparacion-buttons">
              <Button
                className="btn-comparacion-primary"
                onClick={() => {
                  const phone = "51950874416"; // 👉 tu número con código de país (Perú = 51)
                  const message = encodeURIComponent(
                    "Hola, quiero más información.",
                  );
                  window.open(
                    `https://wa.me/${phone}?text=${message}`,
                    "_blank",
                  );
                }}
              >
                Contactar ahora <i className="pi pi-whatsapp"></i>
              </Button>
              <Button className="btn-comparacion-secondary">
                Comparar planes <i className="pi pi-list"></i>
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de Garantía */}
        <section className="garantia-section">
          <div className="garantia-grid">
            <div className="garantia-item">
              <div className="garantia-icon">
                <i className="pi pi-shield"></i>
              </div>
              <h4>Garantía de Calidad</h4>
              <p>Código limpio y optimizado siguiendo las mejores prácticas</p>
            </div>
            <div className="garantia-item">
              <div className="garantia-icon">
                <i className="pi pi-bolt"></i>
              </div>
              <h4>Entrega Rápida</h4>
              <p>Tiempos de desarrollo ágiles sin sacrificar calidad</p>
            </div>
            <div className="garantia-item">
              <div className="garantia-icon">
                <i className="pi pi-headphones"></i>
              </div>
              <h4>Soporte Incluido</h4>
              <p>Asistencia técnica post-entrega en todos los planes</p>
            </div>
            <div className="garantia-item">
              <div className="garantia-icon">
                <i className="pi pi-sync"></i>
              </div>
              <h4>Actualizaciones</h4>
              <p>Mantenimiento y mejoras disponibles</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
