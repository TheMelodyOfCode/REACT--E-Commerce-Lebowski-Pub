
import { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom';


import Navigation from '../navigation/navigation.component';
// import CategoryPreview from '../../components/category-preview/category-preview.component';
import CategoriesPreview from '../../routes/categories-preview/categories-previews.component'
import Category from '../category/category.component';
import Footer from '../footer/footer.component';

const Shop =()=> {

    return (
        <Fragment>
            <header className="headerNoBackgroundImage">
                <Navigation />
            </header>

            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>

            <Footer />
        </Fragment>
    )

}

export default Shop;