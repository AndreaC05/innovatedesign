import { useState, useEffect, useRef } from "react";
import "../style/ComponentsStyle/SectionBeneficios.css";

export default function SectionBeneficios() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    proyectos: 0,
    satisfaccion: 0,
  });
  const statsRef = useRef(null);

  const beneficios = [
    {
      icon: "pi-bolt",
      title: "Desarrollo Rápido",
      description:
        "Entregamos tu proyecto en tiempo récord sin sacrificar calidad ni funcionalidad.",
    },
    {
      icon: "pi-code",
      title: "Código Limpio",
      description:
        "Escribimos código optimizado, escalable y fácil de mantener con las mejores prácticas.",
    },
    {
      icon: "pi-mobile",
      title: "100% Responsive",
      description:
        "Diseños que se adaptan perfectamente a cualquier dispositivo: PC, tablet y móvil.",
    },
    {
      icon: "pi-chart-line",
      title: "SEO Optimizado",
      description:
        "Tu sitio web posicionado en Google para atraer más visitantes y clientes potenciales.",
    },
    {
      icon: "pi-shield",
      title: "Seguridad Total",
      description:
        "Implementamos las mejores prácticas de seguridad para proteger tu sitio y tus datos.",
    },
    {
      icon: "pi-headphones",
      title: "Soporte Continuo",
      description:
        "Acompañamiento post-lanzamiento para resolver dudas y realizar actualizaciones.",
    },
    {
      icon: "pi-palette",
      title: "Diseño Moderno",
      description:
        "Interfaces atractivas y actuales que cautivan a tus usuarios desde el primer momento.",
    },
    {
      icon: "pi-dollar",
      title: "Precios Competitivos",
      description:
        "Calidad profesional a precios justos. Inversión inteligente para tu negocio.",
    },
  ];

  // Observer para detectar cuando la sección de stats es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  // Animación de contadores
  useEffect(() => {
    if (isVisible) {
      // Contador para proyectos (0 a 15)
      let proyectosCount = 0;
      const proyectosInterval = setInterval(() => {
        proyectosCount += 1;
        setCounts((prev) => ({ ...prev, proyectos: proyectosCount }));
        if (proyectosCount >= 15) {
          clearInterval(proyectosInterval);
        }
      }, 80);

      // Contador para satisfacción (0 a 100)
      let satisfaccionCount = 0;
      const satisfaccionInterval = setInterval(() => {
        satisfaccionCount += 5;
        setCounts((prev) => ({ ...prev, satisfaccion: satisfaccionCount }));
        if (satisfaccionCount >= 100) {
          clearInterval(satisfaccionInterval);
        }
      }, 40);

      return () => {
        clearInterval(proyectosInterval);
        clearInterval(satisfaccionInterval);
      };
    }
  }, [isVisible]);

  return (
    <>
      <section className="section-beneficios" id="beneficios">
        <div className="beneficios-container">
          {/* Header de la sección */}
          <div className="beneficios-header">
            <span className="section-badge">Nuestros Beneficios</span>
            <h2 className="beneficios-title">
              ¿Por qué <span className="title-highlight">elegirnos?</span>
            </h2>
            <p className="beneficios-subtitle">
              Transformamos tus ideas en sitios web profesionales que impulsan
              tu negocio. Conoce las ventajas de trabajar con nosotros.
            </p>
          </div>

          {/* Grid de beneficios */}
          <div className="beneficios-grid">
            {beneficios.map((beneficio, index) => (
              <div
                key={index}
                className="beneficio-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card-icon-wrapper">
                  <i className={`pi ${beneficio.icon}`}></i>
                </div>
                <h3 className="card-title">{beneficio.title}</h3>
                <p className="card-description">{beneficio.description}</p>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>

          {/* Estadísticas con contador animado */}
          <div className="stats-section" ref={statsRef}>
            <div className="stat-item">
              <div className="stat-number">
                {isVisible ? `${counts.proyectos}+` : "0+"}
              </div>
              <div className="stat-label">Proyectos Completados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">
                {isVisible ? `${counts.satisfaccion}%` : "0%"}
              </div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Soporte Disponible</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5★</div>
              <div className="stat-label">Calificación Promedio</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
