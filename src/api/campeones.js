const URL_BASE = 'http://localhost:3000/api';

export const obtenerCampeones = async () => {
  try {
    const respuesta = await fetch(`${URL_BASE}/campeones`);
    return await respuesta.json();
  } catch (error) {
    console.error('Error al obtener la lista de campeones:', error);
    throw error;
  }
};

export const obtenerCampeonPorId = async (id) => {
  try {
    const respuesta = await fetch(`${URL_BASE}/campeones/${id}`);
    return await respuesta.json();
  } catch (error) {
    console.error('Error al obtener los detalles del campeón:', error);
    throw error;
  }
};
