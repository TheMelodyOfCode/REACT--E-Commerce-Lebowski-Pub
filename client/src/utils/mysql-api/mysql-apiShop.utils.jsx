
import {useState, useEffect} from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const MySQLAPISHOP = () => {


/* SHOP-PREVIEW */
const [burger, setBurger] = useState([]); // [value, setValue]
const [whiskey, setWhiskey] = useState([]); // [value, setValue]
const [cocktails, setCocktails] = useState([]); // [value, setValue]
const [bowlingballs, setBowlingballs] = useState([]); // [value, setValue]
const [rugs, setRugs] = useState([]); // [value, setValue]

const shopItemsPreview =  [burger, whiskey, cocktails, bowlingballs, rugs] ;

useEffect(()=>{
  fetch('http://localhost:3001/burger')
  .then((response)=> { return response.json();})
  .then((burger=> { setBurger(burger);}));
},[])
useEffect(()=>{
  fetch('http://localhost:3001/whiskey')
  .then((response)=> { return response.json();})
  .then((whiskey=> { setWhiskey(whiskey);}))
},[])
useEffect(()=>{
  fetch('http://localhost:3001/cocktails')
  .then((response)=> { return response.json();})
  .then((cocktails=> { setCocktails(cocktails);}));
},[])
useEffect(()=>{
  fetch('http://localhost:3001/bowlingballs')
  .then((response)=> { return response.json();})
  .then((bowlingballs=> { setBowlingballs(bowlingballs);}));
},[])
useEffect(()=>{
  fetch('http://localhost:3001/rugs')
  .then((response)=> { return response.json();})
  .then((rugs=> { setRugs(rugs);}));
},[])


  return (
    <CategoryPreview shopItemsPreview={shopItemsPreview} />

  );


}

export default MySQLAPISHOP;
