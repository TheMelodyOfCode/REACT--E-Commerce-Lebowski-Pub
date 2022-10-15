import { Fragment } from "react";
import { Link } from "react-router-dom";


const Footer = ()=>{

    return (
        <Fragment>
            <footer class="footer">
                <nav class="footer__nav ">

                    <ul class="footer__list">
                        <li class="footer__item"><Link to='/shop'  class="footer__link">Shop</Link></li>
                            <li class="footer__item"><Link to='/goodbye'  class="footer__link">Goodbye</Link> </li>
                            <li class="footer__item"><Link to='#' class="footer__link">Privacy Policy</Link> </li>
                            <li class="footer__item"><Link to='img/Lebowskis-WhiteRussianMenu.pdf' class="footer__link">Drinks</Link> </li>  
                    </ul>
                    
                    <Link to='/'><img class="footer__photo" src="img/donney.jpg" alt="dude"/></Link>

                    <div class="footer__copyright">
                        <p>Copyright 
                        <a href='https://en.wikipedia.org/wiki/The_Big_Lebowski' class="footer__link">The Big Lebowski</a> </p>
                        <p> is a 1998 black comedy neo-noir crime film
                        <a href='https://en.wikipedia.org/wiki/Coen_brothers' class="footer__link">by Joel and Ethan Coen</a></p>
                    </div>
                </nav>
            </footer>
        </Fragment>
    )

}

export default Footer;