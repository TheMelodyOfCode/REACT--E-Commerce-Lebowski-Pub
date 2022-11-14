
import { useContext, useState, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';



const Category = () => {

    const { category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setproducts] = useState(categoriesMap[category]);
    console.log(category);
    useLayoutEffect(()=>{
        setproducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (

            <section className="section-shopItems">
            <div className="shopItems"> 
            <h2 className='shopItems__title handWriting'>{category.toUpperCase()}</h2>
            <div className="shopItems__category">
                { products &&
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
            </div>
            </section>

    )
}

export default Category;








