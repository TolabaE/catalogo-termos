import { useEffect ,useState} from 'react';
import './detail.css';
import { Link } from "react-router";
import termos from '../../utils/array';//lista de arreglo forkeado
import { useParams } from 'react-router';


const Detail = () => {

    const {id_card} = useParams()//recibo el id por parametro de acuerdo al id de la tarjeta seleccionada
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getAllProducts = () =>{
        const foundProduct = termos.find(item => item.id_producto === parseInt(id_card));
        if(foundProduct){
            setProduct(foundProduct)
        }else{
            console.log("producto no encontrado");
        }
    }
        getAllProducts()
    },[id_card,product]);

    return (
        <div className='detail__container-main'>
            <div>
                <Link to='/'>Volver al menu principal</Link>
            </div>
            <div className='detail__container'>
                <div className='image__detail-container'>
                    <div className='image__main-detail'>
                        <img src="https://stanley1913store.com/cdn/shop/products/LegendaryClassicBottle_1_1080x.png?v=1687972296" alt="" />                                                                         
                    </div>
                    <div className='image__list-container'>
                        {
                            product.lista_imagen?.map(img =>(
                                <div className='box__image-list' key={img.id_img}>
                                        <img src={img.image} alt={img.alt} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='description__detail-container'>
                    <h2 className='title__detail'>{product.nombre}</h2>
                    <p> {product.detalle}</p>
                    <b>{product.precio}</b>
                    <i>stock disponible {product.stock}</i>
                    <div>Comprar</div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
