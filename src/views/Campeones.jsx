import { useState, useEffect } from 'react';
import { obtenerCampeones } from '../api/campeones';
import TarjetaCampeon from '../components/TarjetaCampeon';

const Campeones = () => {
  const [campeones, setCampeones] = useState([]);

  useEffect(() => {
    const cargarCampeones = async () => {
      try {
        const datos = await obtenerCampeones();
        setCampeones(datos);
      } catch (error) {
        console.error('Error al cargar la lista de campeones:', error);
      }
    };

    cargarCampeones();
  }, []);

  return (
    <div>
      <h1>Lista de Campeones</h1>
      <div className="lista-campeones">
        {campeones.map((campeon) => (
          <TarjetaCampeon key={campeon.id} campeon={campeon} />
        ))}
      </div>
    </div>
  );
};

export default Campeones;
