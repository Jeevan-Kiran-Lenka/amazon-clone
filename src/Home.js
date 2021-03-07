import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg" alt="Prime Banner"/>

                <div className="home__row">
                    < Product />
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="homw__row">
                    {/* Product */}
                    {/* Product */}
                    {/* Product */}
                </div>

                <div className="homw__row">
                    {/* Product */}
                </div>
            </div>
        </div>
    )
}

export default Home
