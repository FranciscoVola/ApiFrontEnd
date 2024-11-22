import { Link } from 'react-router-dom';

import '../styles/BarraNavegacion.css';

const BarraNavegacion = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <h1 className="navbar-logo">LoL Campeones</h1>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/campeones">Campeones</Link></li>
        <li><Link to="/registro">Registro</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </div>
  </nav>
);

export default BarraNavegacion;