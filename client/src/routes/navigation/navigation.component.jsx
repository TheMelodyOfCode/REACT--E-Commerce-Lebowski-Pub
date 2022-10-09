
import {Outlet} from 'react-router-dom';


const Navigation = ()=> {
    return (
          <div>
            <h1>I am the Navigation</h1>
            <Outlet />
          </div>
    );
  }


  export default Navigation;