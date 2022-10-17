
import { Fragment } from 'react';
import Navigation from '../navigation/navigation.component';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Footer from '../footer/footer.component';

const Shop =()=> {

    return (
        <Fragment>
            <header className="headerNoBackgroundImage">
                <Navigation />
            </header>

            <CategoryPreview />

            <Footer />
        </Fragment>
    )

}

export default Shop;