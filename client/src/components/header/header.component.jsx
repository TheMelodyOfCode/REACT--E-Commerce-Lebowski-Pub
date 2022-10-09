import {Outlet} from 'react-router-dom';
import Navigation from "../../routes/navigation/navigation.component";

const Header = ()=>{

    return (
        <div>
        <header className="header">
            <Navigation />
        </header>
        <Outlet />
        </div>
    )

}

export default Header;