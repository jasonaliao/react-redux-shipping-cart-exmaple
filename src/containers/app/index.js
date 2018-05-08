import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import CartPage from '../cart';
import ProductDetails from '../productdetails';

const App = () => (
  <div>
    <header>
      <div className="LogoWrap">
        <Link to="/" className="Logo">React Store</Link></div>
      <div className="Topbar"><Link to="/cart">Cart</Link></div>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/product/:handle" component={ProductDetails} />
    </main>
  </div>
);

export default App;
