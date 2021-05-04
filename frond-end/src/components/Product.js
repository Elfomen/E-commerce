import './Product.css'
import {Link} from 'react-router-dom'
function Product() {
    return (
        <div className="product">
            <img src="https://cdn.cultofmac.com/wp-content/uploads/2016/10/Hello-Again-New-MacBook-Pro.jpg"/>
            <div className="product__info">
                <p className="info__name">Mac Book Pro</p>
                <p className="info__description">
                    Loremkjqskdb kqsjbkdbqksbk qsb dkbqksbd kqjbsdkbqkjsbdkj qbskjdb kjqbsk jbqksjdbkqbsdkjb
                </p>
                <p className="product__price">4.99$</p>

                <Link to={`/product/:${11230}`} className="info__button">Description</Link>
            </div>
        </div>
    )
}

export default Product
