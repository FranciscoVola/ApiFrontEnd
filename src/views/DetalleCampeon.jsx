import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerCampeonPorId } from '../api/campeones';

const DetalleCampeon = () => {
  const { id } = useParams();
  const [campeon, setCampeon] = useState(null);

  useEffect(() => {
    const cargarCampeon = async () => {
      try {
        const datos = await obtenerCampeonPorId(id);
        setCampeon(datos);
      } catch (error) {
        console.error('Error al cargar los detalles del campeón:', error);
      }
    };

    cargarCampeon();
  }, [id]);

  if (!campeon) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>{campeon.nombre}</h1>
      <p>Descripción: {campeon.descripcion}</p>
      <p>Rol: {campeon.rol}</p>
    </div>
  );
};

export default DetalleCampeon;
