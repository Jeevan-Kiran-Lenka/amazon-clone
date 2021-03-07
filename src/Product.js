import React from 'react';
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Ikigai: The Japanese secret to a long and happy life</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>

                <div className="product__rating">
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                </div>
            </div>

            <img src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg" alt="Ikagi"/>

            <button>Add to Basket</button>

        </div>
    )
}

export default Product
