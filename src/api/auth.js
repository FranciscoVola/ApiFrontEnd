const API_URL = 'http://localhost:5000/api/auth'; 

export const registrarUsuario = async (datos) => {
  const respuesta = await fetch(`${API_URL}/registro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });

  const resultado = await respuesta.json();
  if (!respuesta.ok) throw new Error(resultado.mensaje);
  return resultado;
};

export const iniciarSesion = async (datos) => {
  const respuesta = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datos),
  });

  const resultado = await respuesta.json();
  if (!respuesta.ok) throw new Error(resultado.mensaje);
  return resultado;
};
