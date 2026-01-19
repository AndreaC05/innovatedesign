import { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoBasico from "../components/InfoBasico";
import Fondo from "../assets/fondo.png";
import "../style/Contacto.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construir el mensaje para WhatsApp
    const mensaje = `
*Nuevo contacto desde la web*

*Nombre:* ${formData.nombre}
*Email:* ${formData.email}
*Teléfono:* ${formData.telefono}
*Asunto:* ${formData.asunto}

*Mensaje:*
${formData.mensaje}
    `.trim();

    const phone = "51950874416";
    const encodedMessage = encodeURIComponent(mensaje);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container_contacto">
        <InfoBasico />

        {/* Hero Section */}
        <section
          className="header"
          style={{ backgroundImage: `url(${Fondo})` }}
        >
          <div className="tit">
            <h1 className="animated-title">Contacto</h1>
            <p className="animated-subtitle">
              Hablemos sobre tu proyecto y llevemos tu idea a la web.
            </p>
            <div className="buttons">
              <Button
                className="btn-primary"
                onClick={() => {
                  document
                    .querySelector(".formulario-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Escríbenos <i className="pi pi-arrow-right"></i>
              </Button>
              <Link to="/about">
                <Button className="btn-secondary">Nosotros</Button>
              </Link>
            </div>
          </div>

          <div className="floating-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
          </div>
        </section>

        {/* Información de Contacto Rápido */}
        <section className="info-contacto-section">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <i className="pi pi-whatsapp"></i>
              </div>
              <h3>WhatsApp</h3>
              <p>+51 950 874 416</p>
              <Button
                className="btn-info"
                onClick={() => {
                  window.open("https://wa.me/51950874416", "_blank");
                }}
              >
                Chatear ahora
              </Button>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="pi pi-envelope"></i>
              </div>
              <h3>Email</h3>
              <p>aguirreandrea457@gmail.com</p>
              <Button
                className="btn-info"
                onClick={() => {
                  window.location.href = "mailto:aguirreandrea457@gmail.com";
                }}
              >
                Enviar email
              </Button>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <i className="pi pi-map-marker"></i>
              </div>
              <h3>Ubicación</h3>
              <p>Calle Inca Garcilazo de la Vega 136 - Comas</p>
              <Button
                className="btn-info"
                onClick={() => {
                  document
                    .querySelector(".mapa-section")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Ver mapa
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de Formulario y Contacto */}
        <section className="formulario-section">
          <div className="formulario-container">
            {/* Columna Izquierda - Información */}
            <div className="formulario-info">
              <span className="formulario-badge">Escríbenos</span>
              <h2>¿Tienes un proyecto en mente?</h2>
              <p>
                Completa el formulario y nos pondremos en contacto contigo a la
                brevedad. También puedes escribirnos directamente por WhatsApp.
              </p>

              <div className="horario-atencion">
                <h4>
                  <i className="pi pi-clock"></i> Horario de atención
                </h4>
                <ul>
                  <li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
                  <li>Sábados: 10:00 AM - 2:00 PM</li>
                  <li>Domingos: Cerrado</li>
                </ul>
              </div>

              <div className="redes-sociales">
                <h4>Síguenos en redes</h4>
                <div className="social-icons">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="pi pi-facebook"></i>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="pi pi-instagram"></i>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="pi pi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Columna Derecha - Formulario */}
            <div className="formulario-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">
                    Nombre completo <span>*</span>
                  </label>
                  <InputText
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>
                    <InputText
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">
                      Teléfono <span>*</span>
                    </label>
                    <InputText
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+51 999 999 999"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="asunto">
                    Asunto <span>*</span>
                  </label>
                  <InputText
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">
                    Mensaje <span>*</span>
                  </label>
                  <InputTextarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos más sobre tu proyecto..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="btn-submit">
                  Enviar mensaje
                  <i className="pi pi-send"></i>
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Sección del Mapa */}
        <section className="mapa-section">
          <div className="mapa-header">
            <span className="mapa-badge">Encuéntranos</span>
            <h2>Nuestra Ubicación</h2>
            <p>Calle Inca Garcilazo de la Vega 136 - Comas, Lima, Perú</p>
          </div>

          <div className="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.9172944964528!2d-77.05183443037592!3d-11.928095587121229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d04a247aed79%3A0x179e350e07ffd159!2sInca%20Garcilazo%20De%20La%20Vega%20136%2C%20Comas%2015312!5e0!3m2!1ses!2spe!4v1768853409944!5m2!1ses!2spe" 
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: "20px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Innovate Design"
            ></iframe>
          </div>

          <div className="mapa-info">
            <div className="mapa-info-card">
              <i className="pi pi-directions"></i>
              <div>
                <h4>Cómo llegar</h4>
                <p>
                  A pocos minutos de la Av. Túpac Amaru, con fácil acceso en
                  transporte público
                </p>
              </div>
            </div>
            <div className="mapa-info-card">
              <i className="pi pi-car"></i>
              <div>
                <h4>Estacionamiento</h4>
                <p>Estacionamiento disponible en la zona</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-final">
          <div className="cta-content">
            <h2>¿Listo para comenzar tu proyecto?</h2>
            <p>
              Estamos aquí para ayudarte a transformar tus ideas en realidad
              digital
            </p>
            <div className="cta-buttons">
              <Button
                className="btn-cta-primary"
                onClick={() => {
                  window.open("https://wa.me/51950874416", "_blank");
                }}
              >
                Hablar por WhatsApp <i className="pi pi-whatsapp"></i>
              </Button>
              <Link to="/planes">
                <Button className="btn-cta-secondary">
                  Ver planes <i className="pi pi-arrow-right"></i>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
