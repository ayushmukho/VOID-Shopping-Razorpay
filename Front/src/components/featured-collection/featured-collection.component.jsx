import React, { useContext } from 'react';
import { ProductContext } from '../../context/products-context';
import FeaturedProduct from '../shared/feature-product.component';

const FeaturedCollection = () => {

    const { products } = useContext(ProductContext);
    const productItems = products.filter((product, i) => i < 4).map(product => (
        <FeaturedProduct {...product} key={product.id} />
    ))

    return (
        <div className='featured-collection container'>
            <h1 className='featured-collection-title'>Featured Collection</h1>
            <div className='products'>
                {
                    productItems
                }
            </div>
        </div>
    )
}

export default FeaturedCollection;
