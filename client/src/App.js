import './main.scss'
import {useState, useEffect} from "react";
import React from "react";

// const categories = [
//   {
//     id: 1,
//     title: 'Burger',
//   },
//   {
//     id: 2,
//     title: 'White Russian',
//   },
//   {
//     id: 3,
//     title: 'Bowling Balls',
//   },
//   {
//     id: 4,
//     title: 'Whiskey',
//   },
//   {
//     id: 5,
//     title: 'Rugs',
//   },
// ]

const App = () => {

  const [categories, setCategories] = useState([]); // [value, setValue]

  useEffect(()=>{
    fetch('http://localhost:3001/categories')
    .then((response)=> { return response.json();})
    .then((categories=> { setCategories(categories);}));
  },[])

  return (
    <section className="section-categories">
      <div className="categories">

        {categories.map(({id, title, img, imgSm}) => (
          <div key={id} className="categories__item">
            <img className="categories__photos" srcSet={`./img/categories/${img} 1x, ./img/categories/${imgSm} 2x `}  alt={title} /> 
          <div className="categories__body">
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
