import { useState } from 'react';
import PropTypes from 'prop-types';
import { iniciarSesion } from '../api/auth';
import '../styles/Formulario.css';

const FormularioLogin = ({ guardarToken }) => {
  const [formulario, setFormulario] = useState({
    correo: '',
    contraseña: '',
  });

  const [mensaje, setMensaje] = useState('');

  const manejarCambio = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    try {
      const { token } = await iniciarSesion(formulario);
      guardarToken(token);
      setMensaje('Inicio de sesión exitoso');
    } catch (error) {
      setMensaje(error.message);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={manejarEnvio} className="form-login">
        <h2>Iniciar Sesión</h2>
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formulario.correo}
          onChange={manejarCambio}
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formulario.contraseña}
          onChange={manejarCambio}
        />
        <button type="submit" className="btn-submit">Iniciar Sesión</button>
        <p>{mensaje}</p>
      </form>
    </div>
  );
};

FormularioLogin.propTypes = {
  guardarToken: PropTypes.func.isRequired,
};

export default FormularioLogin;