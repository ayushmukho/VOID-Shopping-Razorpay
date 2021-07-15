import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductContextProvider from './context/products-context';
import CartContextProvider from './context/cart-context';
import { AuthProvider } from './context/user-context';


ReactDOM.render(
  <BrowserRouter>
    <ProductContextProvider>
      <CartContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartContextProvider>
    </ProductContextProvider>
  </BrowserRouter>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
