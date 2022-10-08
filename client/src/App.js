import './main.scss'
import {useState, useEffect} from "react";
// import React from "react";


const App = () => {

  const [category, setCategories] = useState([]); // [value, setValue]

  useEffect(()=>{
    fetch('http://localhost:3001/categories')
    .then((response)=> { return response.json();})
    .then((category=> { setCategories(category);}));
  },[])

  return (
    <section className="section-category">
      <div className="category">

        {category.map(({id, title, img, imgSm}) => (
          <div key={id} className="category__item">
            <img className="category__photos" srcSet={`./img/category/${img} 1x, ./img/category/${imgSm} 2x `}  alt={title} /> 
          <div className="category__body">
              <h2>{title}</h2>
              <p>Shop Now</p>
          </div>
          </div>

        ))}   

      </div>
    </section>

  );
}

export default App;
