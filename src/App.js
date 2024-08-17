import "./App.css";
import AlexRios from "./Screens/Alex";
import Contacto from "./Screens/Contacto";
import Inicio from "./Screens/Inicio";
import Productos from "./Screens/Productos";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/alex-rios" element={<AlexRios />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
