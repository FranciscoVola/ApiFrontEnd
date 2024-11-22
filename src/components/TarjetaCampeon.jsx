import PropTypes from "prop-types";

function TarjetaCampeon({ campeon }) {
    return (
        <div>
            <h2>{campeon.nombre}</h2>
            <p>{campeon.titulo}</p>
            <a href={`/campeones/${campeon.id}`}>Ver Detalles</a>
        </div>
    );
}

// Definir las prop-types
TarjetaCampeon.propTypes = {
    campeon: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        nombre: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
    }).isRequired,
};

export default TarjetaCampeon;
