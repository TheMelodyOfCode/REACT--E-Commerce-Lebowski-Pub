import {Outlet} from 'react-router-dom';
import Navigation from "../../routes/navigation/navigation.component";
import About from '../about/about.component';

const Header = ()=>{

    return (
        <div>
        <header className="header">
            <Navigation />
        </header>
        <About/>
        <Outlet />
        </div>
    )

}

export default Header;