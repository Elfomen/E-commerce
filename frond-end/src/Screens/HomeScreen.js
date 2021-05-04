import Product from '../components/Product'
import './HomeScreen.css'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <h2 className="homescreen__title">Lates Products</h2>

            <div className="homescreen__products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                
            </div>
        </div>
    )
}

export default HomeScreen
