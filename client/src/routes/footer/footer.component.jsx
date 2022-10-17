import { Fragment } from "react";
import { Link } from "react-router-dom";


const Footer = ()=>{

    return (
        <Fragment>
            <footer className="footer">
                <nav className="footer__nav ">

                    <ul className="footer__list">
                        <li className="footer__item"><Link to='/shop'  className="footer__link">Shop</Link></li>
                            <li className="footer__item"><Link to='/goodbye'  className="footer__link">Goodbye</Link> </li>
                            <li className="footer__item"><Link to='#' className="footer__link">Privacy Policy</Link> </li>
                            <li className="footer__item"><Link to='img/Lebowskis-WhiteRussianMenu.pdf' className="footer__link">Drinks</Link> </li>  
                    </ul>
                    
                    <Link to='/'><img className="footer__photo" src="img/donney.jpg" alt="dude"/></Link>

                    <div className="footer__copyright">
                        <p>Copyright 
                        <a href='https://en.wikipedia.org/wiki/The_Big_Lebowski' className="footer__link">The Big Lebowski</a> </p>
                        <p> is a 1998 black comedy neo-noir crime film
                        <a href='https://en.wikipedia.org/wiki/Coen_brothers' className="footer__link">by Joel and Ethan Coen</a></p>
                    </div>
                </nav>
            </footer>
        </Fragment>
    )

}

export default Footer;