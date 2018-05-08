import React from 'react';

import ProductList from '../../componenets/ProductList';
import ProductJson from '../../assets/products_min.json';

import Menu from '../../componenets/Menu'

const Home = props => (
  <div className="columns">
    <div className="column is-one-fifth">
    <Menu />
    </div>
    <ProductList products={ProductJson} />

  </div>
);



export default Home;
