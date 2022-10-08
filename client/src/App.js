import './main.scss'
import {useState, useEffect} from "react";

import CategoryItem from './components/category-item/category-item.component';


const App = () => {

  const [categories, setCategories] = useState([]); // [value, setValue]

  useEffect(()=>{
    fetch('http://localhost:3001/categories')
    .then((response)=> { return response.json();})
    .then((category=> { setCategories(category);}));
  },[])

  return (
    <section className="section-category">
      <div className="category">

        {categories.map((category) => (

          <CategoryItem key={category.id} category={category} />

        ))}   

      </div>
    </section>

  );
}

export default App;
