import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CurrencyFormatter, CartTotal } from './CartHelper';

class Summary extends Component {

    render() {

        let formattedTotal = CurrencyFormatter(CartTotal(this.props.cart));

        return (
            <div className="summary-content">
                <div className="summary-content-amount-wrap">
                    <p>Amount to pay</p>
                    <div className="summary-content-amount">
                        <sup className="amount-dollar-sign">$</sup>
                        <span className="amount-dollars">{formattedTotal.split('.')[0]}</span>
                        <sup className="amount-cents">.{formattedTotal.split('.')[1]}</sup>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps)(Summary);