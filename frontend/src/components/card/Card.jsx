import './card.css'
import { Link } from "react-router";
import PropTypes from 'prop-types';

const Card = ({imagen,nombre,stock,precio,id}) => {


    let texto = "stock disponible";
    let texto2 = "stock agotado"

    return (
        <div className='card_product'>
            <div className='img_product-container'>
                <img src={imagen.image} alt={imagen.alt}/>
            </div>
            <div className='info_product-container'>
                <Link to={`/producto/${id}`}><p>{nombre}</p></Link>
                <p>{stock >=1 ? texto : texto2 }</p>
                <b>Precio $ {precio}</b>
            </div>
        </div>
    );
}

// Validación de props
Card.propTypes = {
    imagen: PropTypes.shape({
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }).isRequired,
    nombre: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    precio: PropTypes.number.isRequired,
    id:PropTypes.number.isRequired,
};


export default Card;
