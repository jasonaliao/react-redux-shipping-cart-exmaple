import React from 'react';
import ProductItem from './ProductItem';

import { connect } from 'react-redux';

import {
    ADDTOCART,
    REMOVEFROMCART
} from '../../modules/cart';

function ProductList(props) {

    return (
        <div className="columns is-multiline">
            {
                props.products.map((product) => {
                    return <ProductItem
                        key={product.Handle}
                        product={product}
                        addToCart={props.DispatchAddToCart}
                        removeFromCart={props.DispatchRemoveFromCart}
                    />
                })
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cart: state.cart
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