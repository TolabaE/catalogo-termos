import './card.css'


const Card = () => {
    return (
        <div className='card_product'>
            <div className='img_product-container'>
                <img src="https://stanley1913store.com/cdn/shop/products/LegendaryClassicBottle_1_1080x.png?v=1687972296" alt="" />
            </div>
            <hr />
            <div className='info_product-container'>
                <p>Termo stanley 940ml Original</p>
                <p>stock disponible</p>
                <b>Precio $ 130.000</b>
            </div>
        </div>
    );
}

export default Card;
