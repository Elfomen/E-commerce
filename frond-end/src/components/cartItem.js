import { Link } from 'react-router-dom'
import './CartItem.css'
function CartItem() {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://cdn.cultofmac.com/wp-content/uploads/2016/10/Hello-Again-New-MacBook-Pro.jpg"/>
            </div>

            <Link to={`/product/${1111}`} className="cartitem__name">
                <p>Product 1</p>
            </Link>
            <p className="cartitem__price">
                499.99$
            </p>
            <select className="cartitem__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <button className="cartitem__delete">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem
