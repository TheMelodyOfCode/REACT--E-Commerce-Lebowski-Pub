
import { Fragment } from "react";

import Navigation from '../navigation/navigation.component'

import Footer from '../footer/footer.component';

const Goodbye = ()=>{

    return (
        <Fragment>
            <header className="headerNoBackgroundImage">
                <Navigation />
            </header>
            <section className="goodbye">
                    <div className="goodbye__container">
                        <img className="goodbye__img" src="img/goodbye.png" alt="goodbye_img"/>
                    </div>
            </section>

            <Footer />
        </Fragment>
    )

}

export default Goodbye ;