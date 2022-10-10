import {Routes, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './routes/home/home.component'
import Authentication from './routes/authentication/authentication.component';


const Shop = ()=> {
  return <h1>I am the Shop Page</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Header/>} >
          <Route index     element={<Home/>} />
      </Route>
      <Route path='shop'   element={<Shop/>} />
      <Route path='auth' element={<Authentication />} /> 
    </Routes>
  );

}

export default App;