import './SideDrawer.css'
import { Link } from 'react-router-dom'

function SideDrawer({show , click}) {
    const sideDrawerClass = ["sidedrawer"]
    show&&sideDrawerClass.push('show')
    return (
        <div className={sideDrawerClass.join(" ")}>
            <div className="sideDrawer__links" onClick={click}>
                <Link to="/cart" className="cart_link">
                    <i className="fas fa-shopping-cart"></i>
                    Cart
                    <span className="cart_batch">0</span>
                </Link>
            </div>
            <div className="sideDrawer__links" onClick={click}>
                <Link to="/" className="shop__link">
                    Shop
                </Link>
            </div>
                
            
        </div>
    )
}

export default SideDrawer
