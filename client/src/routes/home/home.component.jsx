
import {Outlet} from 'react-router-dom';
import { Fragment } from "react";

import Navigation from "../../routes/navigation/navigation.component";
import About from '../about/about.component';

const Home = ()=>{

    return (
        <Fragment>
            <header className="header">
                <Navigation />
            </header>
            <About/>
            <Outlet />
        </Fragment>
    )

}

export default Home;
