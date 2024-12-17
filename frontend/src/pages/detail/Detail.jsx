import './detail.css';
import { Link } from "react-router";



const Detail = () => {
    return (
        <div className='detail__container-main'>
            <div>
                <Link to='/'>Volver al menu principal</Link>
            </div>
            <div className='detail__container'>
                <div className='image__detail-container'>
                    <img src="https://stanley1913store.com/cdn/shop/products/LegendaryClassicBottle_1_1080x.png?v=1687972296" alt="" />
                </div>
                <div className='description__detail-container'>
                    <h2 className='title__detail'>Titulo del producto</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque culpa in quidem enim. Nihil dolore voluptas natus fuga ut, nesciunt sed, voluptatum necessitatibus deleniti, quidem perspiciatis fugit suscipit ipsum a!</p>
                    <b>precio: $450.000</b>
                    <i>stock disponible</i>
                    <div>Comprar</div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
