import React from 'react';
import ProductItem from './ProductItem';

import { connect } from 'react-redux';

import {
    ADDTOCART,
    REMOVEFROMCART
} from '../../modules/cart';

const ProductList = (props) => {

    let filteredProduct = props.products.filter(product =>
        (product.Title.toLowerCase().indexOf(props.shop.SearchQuery.toLowerCase()) > -1) ||
        (product.Vendor.toLowerCase().indexOf(props.shop.SearchQuery.toLowerCase()) > -1)
    );

    let renderedProductList = filteredProduct.length ? (filteredProduct.map(product => {
        return <ProductItem
            key={product.Handle}
            product={product}
            addToCart={props.DispatchAddToCart}
            removeFromCart={props.DispatchRemoveFromCart}
        />
    })) : (<div>No result</div>)

    return (
        <div className="columns is-multiline is-mobile">
            {renderedProductList}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        shop: state.shop
    }
};

function mapDispatchToProps(dispatch) {
    return {
        DispatchAddToCart: (item) => {
            dispatch({ type: ADDTOCART, payload: item });
        },
        DispatchRemoveFromCart: (item) => {
            dispatch({ type: REMOVEFROMCART, payload: item });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);