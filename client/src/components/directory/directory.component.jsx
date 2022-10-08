
import DirectoryItem from '../directory-item/directory-item.component';

const Directory = ({categories})=>{


    return (
        <section className="section-category">
        <div className="category">
  
          {categories.map((category) => (
  
            <DirectoryItem key={category.id} category={category} />
  
          ))}   
  
        </div>
      </section>
    )
}

export default Directory;