import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import AppConstants from '../../../config/constants';

export default class SelectMethod extends Component {

    render() {
        return (
            <div className="columns is-multiline payment-options-wrap">
                <div className="column is-12">
                    <h1>Payment</h1>
                    <p>Select your prefered payment option</p>
                </div>
                <div className="column is-8 is-offset-2 cc-wrap">
                    <Cards number={''} name={''} expiry={''} cvc={''} focused={''} />
                    <div className="button is-large btn-cc" onClick={() => this.props.setCheckOutStep(AppConstants.checkoutSteps.PAYWITHCC)}>
                        <span>Pay with Credit Card</span>
                    </div>
                </div>
                <div className="column is-8 is-offset-2 paypal-wrap">
                    <hr />
                    <p>or select other payment method</p>
                    <div className="button is-large btn-paypal" onClick={()=>{alert('this is a demo site')}}>
                        <span>Pay with <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" alt="PayPal Logo" /></span>
                    </div>
                </div>
            </div>
        );
    };
}

