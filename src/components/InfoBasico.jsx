import { useState } from "react";

export default function InfoBasico() {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Español");

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setLanguageOpen(false);
  };

  return (
    <>
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
              <i
                className={`pi pi-chevron-${languageOpen ? "up" : "down"} chevron-icon`}
              ></i>
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
    </>
  );
}
