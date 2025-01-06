import { useEffect ,useState} from 'react';
import './detail.css';
import { Link } from "react-router";
import termos from '../../utils/array';//lista de arreglo forkeado
import { useParams } from 'react-router';


const Detail = () => {

    const {id_card} = useParams()//recibo el id por parametro de acuerdo al id de la tarjeta seleccionada
    const [product, setProduct] = useState({});
    const [dynamicImg,setDynamicImg] = useState({})//creo un estado para guardar la imagen que se este seleccionando.
    // const [position,setPosition] = useState(0);//creo un estado para manejar la posicion de la imagen cuando se realize el click

    //una funcion que estera el evento click, y recibe por parametro la posicion de la imagen clickeada.
    const changeImage = (id_image) =>{
        //con la posicion busca el id de la imagen y cambia el estado de  la imagen que se muestra por pantalla.
        const img = product.lista_imagen?.find(image => image.id_img === id_image);
        setDynamicImg(img)
    }

    useEffect(() => {
        const getAllProducts = () =>{
        const foundProduct = termos.find(item => item.id_producto === parseInt(id_card));//usamos el metodo find para buscar el producto con el id que recibo por parametro.
        if(foundProduct){
            setProduct(foundProduct)
            setDynamicImg(foundProduct.lista_imagen[0])//la imagen que se muestre por defecto sea la primera.
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
                        <img src={ dynamicImg.image} alt={dynamicImg.alt} />                                                                         
                    </div>
                    <div className='image__list-container'>
                        {
                            product.lista_imagen?.map(img =>(
                                <div className='box__image-list' key={img.id_img} onClick={()=>{changeImage(img.id_img)}}>
                                        <img src={img.image} alt={img.alt} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='description__detail-container'>
                    <h2 className='title__detail'>{product.nombre}</h2>
                    <p> {product.detalle}</p>
                    <b>Precio $ {product.precio}</b>
                    <i>{product.stock >=1 ? "stock disponibles" : "producto agotado"} </i>
                    <div className='btn-detail'><a href="https://wa.me/3874830025?text=hola%20me%20interesa%20el%20termo%20stanley"  target='_blank' >COMPRAR</a></div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
