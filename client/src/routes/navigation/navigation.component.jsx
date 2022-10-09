


const Navigation = ()=> {
    return (
        <div> 
            <div className="navigation">
                <nav className="navigation__nav">
                    <a href="index.html"><img className="navigation__photo" src="img/navLogo-64.png" alt="dude"/></a>
                    <a href="index.html" className="navigation__link navigation__logo">The Big Lebowski</a>
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="loginReg.html" className="navigation__link">Log-In</a></li>
                        <li className="navigation__item"><a href="shop.html" className="navigation__link">Shop</a></li>
                    </ul>
                </nav>
            </div> 
        </div>
           

    );
  }


  export default Navigation;