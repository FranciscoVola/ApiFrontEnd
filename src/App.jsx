import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarraNavegacion from './components/BarraNavegacion';
import Inicio from './views/Inicio';
import Campeones from './views/Campeones';
import DetalleCampeon from './views/DetalleCampeon';
import FormularioRegistro from './components/FormularioRegistro';
import FormularioLogin from './components/FormularioLogin';

const App = () => {
  const [token, setToken] = useState(null); 

  return (
    <Router>
      <BarraNavegacion />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/campeones" element={<Campeones />} />
        <Route path="/campeones/:id" element={<DetalleCampeon />} />
        <Route path="/registro" element={<FormularioRegistro />} />
        <Route 
          path="/login" 
          element={<FormularioLogin guardarToken={setToken} />} 
        />
      </Routes>
      {/* Uso del token para mostrar información condicional */}
      <div>
        {token ? (
          <p>Usuario autenticado</p>
        ) : (
          <p>Por favor, inicie sesión para acceder a más funcionalidades</p>
        )}
      </div>
    </Router>
  );
};

export default App;
