import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = ()=> {
    const { currentUser } = useContext(UserContext);


    return (
        <Fragment> 
            <div className="navigation">
                <nav className="navigation__nav">
                    <Link to='/'><img className="navigation__photo" src="img/navLogo-64.png" alt="dude"/></Link>
                    <Link to='/' className="navigation__link navigation__logo">The Big Lebowski</Link>
                    <ul className="navigation__list">
                    { 
                        currentUser ? (
                        <li className="navigation__item"><Link className="navigation__link" onClick={signOutUser} > SIGN OUT</Link></li>
                        ) : (         
                        <li className="navigation__item">
                        <Link to='/auth' className="navigation__link">Log-In</Link>
                        </li>
                    )} 
                        <li className="navigation__item"><Link to='/shop' className="navigation__link">Shop</Link></li>
                    </ul>
                    <CartIcon />
                    <CartDropdown />
                </nav>
            </div> 
        </Fragment>
    );
  }


  export default Navigation;