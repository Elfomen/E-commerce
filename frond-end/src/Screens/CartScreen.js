import './CartScreen.css'
import Cart from '../components/cartItem'
function CartScreen() {
    return (
        <div className="cartScreen">
            <div className="cartscreen__left">
                <h2>The Shopping cart</h2>
                <Cart />
            </div>
            <div className="cartscreen__rigth">
                <div className="cartitem__info">
                    <p>
                        Sub total (0) items
                    </p>
                    <p>
                        499.99$
                    </p>
                    <p>
                        <button>Proceed to Checkout</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
