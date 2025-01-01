import './product.css'
import Card from '../../components/card/Card';
import termos from '../../utils/array';

const Products = () => {


    return (
        <section className='product__section-container'>
            <div className='title__main'>Catalogo de Productos</div>
            <main className='product__main-container'>
                <div className='product__filter-container'>
                    <div>
                    <h3>Categoria</h3>
                    </div>
                    <div>
                        <h3>Filtros</h3>
                    </div>
                </div>
                <div className='product__cards-container'>
                    <h1>Termos</h1>
                    <div className='product__list'>
                        {
                            termos.map(item => (
                                <Card key={item.id_producto}
                                    imagen={item.lista_imagen[0]}
                                    precio={item.precio}
                                    nombre={item.nombre}
                                    stock={item.stock}
                                    id={item.id_producto}
                                />
                            ))
                        }
                        
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Products;
