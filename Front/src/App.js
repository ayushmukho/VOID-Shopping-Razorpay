import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Homepage from './components/home-page';
import NotFound from './components/not-found';
import Shop from './components/pages/shop/shop.component';
import SingleProduct from './components/single-product/single-product.component';
import CartPage from './components/pages/cart-page/cart-page.component';
import SignUp from './components/Sign-up/sign-up.component';
import SignIn from './components/Sign-in/sign-in.component';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path='/product/:id' component={SingleProduct} />
        <PrivateRoute path='/cart' component={CartPage} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
