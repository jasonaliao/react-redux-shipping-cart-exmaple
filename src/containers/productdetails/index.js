import React from 'react';


const ProductDetails = (props) => (
  <div>
    <h1>{props.match.params.name}</h1>
    <p>Did you get here via Redux?</p>
  </div>
);

export default ProductDetails;
