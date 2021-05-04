import './ProductScreen.css'

function ProductScreen() {
    return (
        <div className="productScreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://cdn.cultofmac.com/wp-content/uploads/2016/10/Hello-Again-New-MacBook-Pro.jpg"/>
                </div>

                <div className="productleft__info">
                    <p className="left__name">Product1</p>
                    <p className="left__price">255</p>
                    <p className="left__description">The description Contains only a lorem ipsum dolor if want to change no pb</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="rigth__info">
                    <p>
                        Price : <span>499.99$</span>
                    </p>
                    <p>
                        status : <span>In Stock</span>
                    </p>
                    <p>
                        Quantity

                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>

                    <p>
                        <button type="button" className="add_to_cart">Add to card</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
