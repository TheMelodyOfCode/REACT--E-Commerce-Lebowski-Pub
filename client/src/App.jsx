
import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import MySQLAPI from './utils/mysql-api/mysql-api.utils';
import Authentication from './routes/authentication/authentication.component';


const Shop = ()=> {
  return <h1>I am the Shop Page</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>} >
          <Route index     element={<MySQLAPI/>} />
      </Route>
      <Route path='shop'   element={<Shop/>} />
      <Route path='auth' element={<Authentication />} /> 
    </Routes>
  );

}

export default App;