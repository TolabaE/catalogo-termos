import './product.css'
import Card from '../../components/card/Card';



const Products = () => {
    return (
        <section className='product__section-container'>
            <div className='title__main'>Catalogo de Productos</div>
            <div>
                <Card/>
            </div>
        </section>
    );
}

export default Products;
