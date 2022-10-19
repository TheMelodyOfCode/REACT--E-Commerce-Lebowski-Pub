import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = ()=> {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment> 
            <div className="navigation">
                <nav className="navigation__nav">
                    {/* <Link to='/'><NavIcon className="navigation__photo"  alt="dude"/></Link> */}
                    <Link to='/'><img className="navigation__photo" src="./img/navLogo-64.png" alt="dude"/></Link>
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
                    {/* here we check  with the short-circuit operator for the truthyness ot this statement
                    both side have to be a trusty value
                    isCartOpen is a boolean and can be true aor false and CartDropdown is  a trusthy value since it is a component/ function
                    so if isCartopen is true it returns the CartDropdown component*/}
                    {isCartOpen && <CartDropdown />}
                </nav>
            </div> 
        </Fragment>
    );
  }


  export default Navigation;