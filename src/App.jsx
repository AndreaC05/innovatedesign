import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Planes from "./pages/Planes";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/innovatedesignplans" element={<Planes />} />
        <Route exact path="/contact" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
