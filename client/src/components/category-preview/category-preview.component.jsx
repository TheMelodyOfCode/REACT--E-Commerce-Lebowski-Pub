

import { Link } from 'react-router-dom';
import ProductCard from "../product-card/product-card.component";


const CategoryPreview = ({title, products})=> {

    return (
        <section className="section-shopItems">
          <div className="shopItems"> 


                  <Link className='shopItems__title handWriting' to={title} >{title.toUpperCase()}</Link>
                  <div className="shopItems__category">
                  {products.filter((_, idx)=> idx < 4)
                    .map((product)=> 
                    (<ProductCard key={product.id} product={product} />
                    ))}
                    
                  </div>

            </div>
        </section>

    );
};

export default CategoryPreview;