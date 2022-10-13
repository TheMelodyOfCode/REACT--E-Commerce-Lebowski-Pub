
const DirectoryItem = ({category}) => {

    const {title, img, imgSm} = category;

    return (
        <div className="category__item">
        <img className="category__photos" srcSet={`./img/directoryItem/${img} 1x, ./img/directoryItem/${imgSm} 2x `}  alt={title} /> 
      <div className="category__body">
          <h2>{title}</h2>
          <p>Shop Now</p>
      </div>
      </div> 
    )

}

export default DirectoryItem;