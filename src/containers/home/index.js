import React from 'react';

import ProductList from '../../componenets/ProductList';
import ProductJson from '../../assets/products_min.json';

import SideMenu from '../../componenets/SideMenu';

const Home = props => (
  <div className="page columns">
    <div className="column">
      <SideMenu />
    </div>
    <div className="column is-10">
      <ProductList products={ProductJson} />
    </div>

  </div>
);



export default Home;
