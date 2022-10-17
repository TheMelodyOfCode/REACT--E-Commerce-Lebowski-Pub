
import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";


const CategoryPreview = ()=> {

    const {products} = useContext(ProductsContext);

    return (
        <section className="section-shopItems">
          <div className="shopItems"> 
          <h2 className="shopItems__title handWriting">Burger</h2>
          <div className="shopItems__category">
            {products.map((product) => (
                
            <ProductCard key={product.id} product={product} />
                
          ))}   
          {/* <h2 className="shopItems__title handWriting">Whiskey</h2>
          <div className="shopItems__category">
            {products.map((product) => (
                
            <ProductCard key={product.id} product={product} />
                
          ))}    */}
            </div>
            </div>
        </section>

    )
}

export default CategoryPreview;