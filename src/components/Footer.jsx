import Logo from "../assets/Logo_claro.svg";
import "../style/Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Sección superior del footer */}
          <div className="footer-main">
            {/* Columna 1 - Logo y descripción */}
            <div className="footer-column footer-about">
              <div className="footer-logo">
                <img src={Logo} alt="Innovate Design Logo" />
              </div>
              <p className="footer-description">
                Transformamos ideas en experiencias digitales extraordinarias.
                Desarrollo web profesional para impulsar tu negocio.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="pi pi-facebook"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="pi pi-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="pi pi-linkedin"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="pi pi-twitter"></i>
                </a>
              </div>
            </div>

            {/* Columna 2 - Servicios */}
            <div className="footer-column">
              <h3 className="footer-title">Servicios</h3>
              <ul className="footer-links">
                <li>
                  <a href="#servicios">Desarrollo Web React</a>
                </li>
                <li>
                  <a href="#servicios">Landing Pages</a>
                </li>
                <li>
                  <a href="#servicios">Sitios Corporativos</a>
                </li>
                <li>
                  <a href="#servicios">Diseño Responsive</a>
                </li>
                <li>
                  <a href="#servicios">Optimización SEO</a>
                </li>
              </ul>
            </div>

            {/* Columna 3 - Empresa */}
            <div className="footer-column">
              <h3 className="footer-title">Empresa</h3>
              <ul className="footer-links">
                <li>
                  <a href="#nosotros">Nosotros</a>
                </li>
                {/* <li><a href="#portafolio">Portafolio</a></li> */}
                <li>
                  <a href="#beneficios">¿Por qué elegirnos?</a>
                </li>
                <li>
                  <a href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>

            {/* Columna 4 - Contacto */}
            <div className="footer-column">
              <h3 className="footer-title">Contacto</h3>
              <ul className="footer-contact">
                <li>
                  <i className="pi pi-envelope"></i>
                  <a href="mailto:aguirreandrea457@gmail.com">
                    aguirreandrea457@gmail.com
                  </a>
                </li>
                <li>
                  <i className="pi pi-map-marker"></i>
                  <span>Calle Inca Garcilazo de la Vega 136 - Comas</span>
                </li>
                <li>
                  <i className="pi pi-phone"></i>
                  <a href="tel:+51999999999">+51 950 874 416</a>
                </li>
                <li>
                  <i className="pi pi-clock"></i>
                  <span>Lun - Dom: 8:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sección inferior del footer */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © {currentYear} <strong>Innovate Design</strong>. Todos los
                derechos reservados.
              </p>
              <div className="footer-legal">
                <a href="#privacidad">Política de Privacidad</a>
                <span className="separator">|</span>
                <a href="#terminos">Términos y Condiciones</a>
              </div>
            </div>
          </div>
        </div>

        {/* Decoración de fondo */}
        <div className="footer-decoration-1"></div>
        <div className="footer-decoration-2"></div>
        <div className="footer-decoration-3"></div>

        {/* Patrón de puntos */}
        <div className="footer-dots">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="dot"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>
      </footer>
    </>
  );
}
