import './main.scss'

const categories = [
  {
    id: 1,
    title: 'Burger',
  },
  {
    id: 2,
    title: 'White Russian',
  },
  {
    id: 3,
    title: 'Bowling Balls',
  },
  {
    id: 4,
    title: 'Whiskey',
  },
  {
    id: 5,
    title: 'Rugs',
  },
]

const App = () => {
  return (
    <section className="section-categories">
      <div className="categories">

        {categories.map(({title, id, image}) => (
          <div key={id} className="categories__item">
          {/* <img srcset="img/categories/burger-sm.jpg 1x, img/categories/burger.jpg 2x" alt="Photo 1" className="categories__photos"> */}
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
