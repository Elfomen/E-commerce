import './NavBar.css'
import { Link } from 'react-router-dom'
function NavBar({click}) {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <h2>E-device shopping cart</h2>
            </div>
            {/**Links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__batch">0</span>
                        </span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            {/**Hamburger */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

    export default NavBar
