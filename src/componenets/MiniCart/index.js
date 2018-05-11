import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

class MiniCart extends Component {

    render() {

        let _qty = 0;
        this.props.cart.map((item)=>{
            return _qty = _qty + item.quantity
        });

        return (
            <div className="mini-cart-wrap">
                <Link to="/cart">
                    <span className="mini-cart-item-count">({_qty})</span>
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                </Link>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(MiniCart);