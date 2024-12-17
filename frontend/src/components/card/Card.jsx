import './card.css'
import { Link } from "react-router";

const Card = () => {
    return (
        <div className='card_product'>
            <div className='img_product-container'>
                <img src="https://stanley1913store.com/cdn/shop/products/LegendaryClassicBottle_1_1080x.png?v=1687972296" alt="imagen de un termo" />
            </div>
            <div className='info_product-container'>
                <Link to='/producto'><p>Termo stanley 940ml Original</p></Link>
                <p>stock disponible</p>
                <b>Precio $ 130.000</b>
            </div>
        </div>
    );
}

export default Card;
