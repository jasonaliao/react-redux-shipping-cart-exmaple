import React, { Component } from 'react';

import { connect } from 'react-redux';

import CartItems from './CartItems';

import {
    ADDTOCART,
    REMOVEFROMCART
} from '../../modules/cart';

class CartSummary extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFillingInCCDetails: false,
        }
    }

    render() {

        const activeClass = this.state.isFillingInCCDetails ? "active" : "";

        return (
            <div className="cart-summary container">
                <div className={"columns cart-summary-wrap " + activeClass}>
                    <div className="cart-items-view">
                        <div className="cart-items-view-inner">
                        <CartItems products={this.props.cart} addToCart={this.props.DispatchAddToCart}
                                        removeFromCart={this.props.DispatchRemoveFromCart}  />
                            
                        </div>

                    </div>

                    <div className="checkout-view">
                        <div className="checkout-view-inner">
                            <p>Checkout screen</p>
                        </div>
                    </div>

                    <div className="summary-view">
                        <div className="summary-inner">
                            <p>summary screen</p>
                            <button onClick={() => this.setState({ isFillingInCCDetails: !this.state.isFillingInCCDetails })}>wee</button>
                        </div>
                    </div>

                </div></div>
        )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);