import React, { createContext, useState } from 'react';
import SHOP_DATA from '../shop';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [products] = useState(SHOP_DATA);

    const value = {
        products
    }

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;