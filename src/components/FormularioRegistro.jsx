import { useState } from 'react';
import { registrarUsuario } from '../api/auth';

const FormularioRegistro = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
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
      await registrarUsuario(formulario);
      setMensaje('Usuario registrado correctamente');
    } catch (error) {
      setMensaje(error.message);
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h2>Registro</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={manejarCambio}
      />
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
      <button type="submit">Registrar</button>
      <p>{mensaje}</p>
    </form>
  );
};

export default FormularioRegistro;
