import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import CartPage from '../cart';
import ProductDetails from '../productdetails';

import TopNav from '../../componenets/TopNav';
import Footer from '../../componenets/Footer';

const App = () => (
  <div className='container is-fluid'>
    <header>
      <TopNav />
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/product/:handle" component={ProductDetails} />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
