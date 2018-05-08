import React from 'react';
import ProductItem from './ProductItem';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
    ADDTOCART,
    REMOVEFROMCART
} from '../../modules/cart';

function ProductList(props) {

    return (
        <div className="column">
            {props.cart.length}
            <div className="columns is-multiline">
                {
                    props.products.map((product) => {
                        return <ProductItem
                            product={product}
                            addToCart={props.DispatchAddToCart}
                            removeFromCart={props.DispatchRemoveFromCart}
                        />
                    })
                }
            </div>
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