import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component'

const App = () => {

  return (
    <Routes>
      {/* when the url matches /home render the element home */}
      <Route path='/home' element={<Home/>} />
    </Routes>
  );

}

export default App;