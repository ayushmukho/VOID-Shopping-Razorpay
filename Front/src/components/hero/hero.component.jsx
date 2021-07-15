import React from 'react'
import { Link } from 'react-router-dom';
import './hero.styles.scss';

const Hero = () => {
    return (
        <section className="hero is-large is-info hero-image">
            <div className="hero-body">
                <div className="container">
                    <h1 className="hero-title">
                        Bags reimagined for modern life.
                    </h1>
                    <div className="shop-now-btn">
                        <button className="button is-black" id='shop-now' >
                            <Link className='link-decor' to="/shop">SHOP NOW</Link> 
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
