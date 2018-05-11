import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppConstants from '../../../config/constants';

import SelectMethod from './SelectMethod';
import CreditCardForm from './CreditCardForm';
import AddressForm from './AddressForm';
import SuccessScreen from './Success';

class CheckoutForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            transactionObj: this.props.cart,
            deliveryAddress: {},
            currentStep: AppConstants.checkoutSteps.SELECTMETHOD,
        }

        this.getCurrentScreen = this.getCurrentScreen.bind(this);
        this.setCheckOutStep = this.setCheckOutStep.bind(this);
    }

    setCheckOutStep(_step){
        this.setState({currentStep : _step});
    }

    getCurrentScreen() {

        const _checkoutSteps = AppConstants.checkoutSteps;
        const _SCREEN_SELECTMETHOD = (<SelectMethod setCheckOutStep={this.setCheckOutStep} />);
        const _SCREEN_PAYWITHCC = (<CreditCardForm setCheckOutStep={this.setCheckOutStep} />);
        const _SCREEN_PAYWITHPAYPAL = (<div>paypal</div>);
        const _SCREEN_ADDRESS = (<AddressForm setCheckOutStep={this.setCheckOutStep} />);
        const _SCREEN_SUCCESS = (<SuccessScreen setCheckOutStep={this.setCheckOutStep} />);
        const _SCREEN_ERROR = (<div>error</div>);

        const _screen = () => {
            switch (this.state.currentStep) {
                case _checkoutSteps.SELECTMETHOD:
                    return _SCREEN_SELECTMETHOD;
                case _checkoutSteps.PAYWITHCC:
                    return _SCREEN_PAYWITHCC;
                case _checkoutSteps.PAYWITHPAYPAL:
                    return _SCREEN_PAYWITHPAYPAL;
                case _checkoutSteps.ADDRESS:
                    return _SCREEN_ADDRESS;
                case _checkoutSteps.SUCCESS:
                    return _SCREEN_SUCCESS;
                case _checkoutSteps.ERROR:
                    return _SCREEN_ERROR;
                default:
                    return _SCREEN_SELECTMETHOD;
            }
        };
        
        return _screen();
    }

    render() {
        return (
            <div className="checkoutForm columns is-multiline" >
                <div className="column is-12">
                    {this.getCurrentScreen()}
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

export default connect(mapStateToProps)(CheckoutForm);