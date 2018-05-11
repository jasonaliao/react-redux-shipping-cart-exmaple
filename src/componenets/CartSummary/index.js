import React, { Component } from 'react';

import { connect } from 'react-redux';

import CartItems from './CartItems';
import Summary from './Summary';
import CheckoutForm from './CheckoutForm/index';

import {
    ADDTOCART,
    REMOVEFROMCART,
    UPDATEQTY,
    CLEARCART
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
        let hasItem = (this.props.cart && this.props.cart.length > 0);

        const buttonLabel = this.state.isFillingInCCDetails ? (
            <span>
                <i className="fa fa-chevron-left" aria-hidden="true"></i> Edit cart items
            </span>
        ) : (<span>Proceed to checkout</span>);

        hasItem = true;
        const btnContinue = hasItem ? (
            <div
                className="summary-button"
                onClick={() => this.setState({ isFillingInCCDetails: !this.state.isFillingInCCDetails })} >
                {buttonLabel}
            </div>
        ) : '';

        return (
            <div className="cart-summary container">
                <div className={"columns cart-summary-wrap " + activeClass}>
                    <div className="cart-items-view">
                        <div className="cart-items-view-inner">
                            <CartItems
                                products={this.props.cart}
                                addToCart={this.props.DispatchAddToCart}
                                removeFromCart={this.props.DispatchRemoveFromCart}
                                updateQty={this.props.DispatchUpdateQty}
                                clearCart={this.props.DispatchClearCart}
                            />
                        </div>

                    </div>

                    <div className="checkout-view">
                        <div className="checkout-view-inner">
                            <CheckoutForm />
                        </div>
                    </div>

                    <div className="summary-view">
                        <div className="summary-inner">
                            <Summary />
                            {btnContinue}
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
        },
        DispatchUpdateQty: (item) => {
            dispatch({ type: UPDATEQTY, payload: item });
        },
        DispatchClearCart: () => {
            dispatch({ type: CLEARCART });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);