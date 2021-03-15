import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg" alt="Prime Banner"/>

                <div className="home__row">
                    <Product 
                    title="Ikigai: The Japanese secret to a long and happy life"
                    price={19.99}
                    images='https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY218_.jpg'
                    rating={4}/>
                    
                    <Product 
                    title="Dhingra Men's Regularfit Bandhgala Jodhpuri Style Blazer - 2 Colours"
                    price={2295}
                    images='https://m.media-amazon.com/images/I/51w4jnXY5ZL._AC_UL320_.jpg'
                    rating={3}/>
                </div>

                <div className="home__row">
                    <Product 
                    title="OLEVS Chronograph Analogue Men's Luxury Watch (Blue Dial)"
                    price={2790}
                    images='https://m.media-amazon.com/images/I/61aDJdzestL._AC_UL320_.jpg'
                    rating={4}/>
                    <Product 
                    title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)"
                    price={3999}
                    images='https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY218_.jpg'
                    rating={4}/>
                    <Product 
                    title="New Apple iPhone 11 (128GB) - Purple"
                    price={60000}
                    images="https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY218_.jpg"
                    rating={4}/>
                </div>

                <div className="home__row">
                    <Product 
                    title="LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)"
                    price={35000}
                    images="https://m.media-amazon.com/images/I/71S9dis6PRL._AC_UY218_.jpg"
                    rating={5}/>
                </div>
            </div>
        </div>
    )
}

export default Home
