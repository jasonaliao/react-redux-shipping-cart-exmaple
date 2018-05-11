import React, { Component } from 'react';
import Cards from 'react-credit-cards';
import Payment from 'payment';
import { connect } from 'react-redux';
import { CurrencyFormatter, CartTotal } from '../CartHelper';
import AppConstants from '../../../config/constants';

class CreditCardForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: '',
            name: '',
            expiry: '',
            cvc: '',
            focused: '',
            isValidCard: true,
            isValidName: true,
            isValidExpiry: true,
            isValidCVC: true,
        };
    }

    componentDidMount() {
        Payment.formatCardNumber(document.querySelector('[name="number"]'));
        Payment.formatCardExpiry(document.querySelector('[name="expiry"]'));
        Payment.formatCardCVC(document.querySelector('[name="cvc"]'));
    }

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name,
        });
    };

    handleInputChange = ({ target }) => {

        if (target.name === 'number') {
            this.setState({
                [target.name]: target.value.replace(/ /g, ''),
            });
        }
        else if (target.name === 'expiry') {
            this.setState({
                [target.name]: target.value.replace(/ |\//g, ''),
            }, () => {
                if (this.state.expiry && this.state.expiry.length > 3) this.setState({ isValidExpiry: true });
            });
        }
        else {
            this.setState({
                [target.name]: target.value,
            }, () => {
                if (this.state.name && this.state.name.length > 0) this.setState({ isValidName: true });
                if (this.state.cvc && this.state.cvc.length > 2) this.setState({ isValidCVC: true });
            });
        }
    };

    handleSubmit = () => {

        const { name, expiry, cvc } = this.state;
        const setValid = (stateName, boolean) => {
            this.setState({ [stateName]: boolean });
            return boolean;
        };

        let nameOk = (name && name.length > 0) ? () => { return setValid('isValidName', true) } : () => { return setValid('isValidName', false) };
        let expiryOk = (expiry && expiry.length === 4) ? () => { return setValid('isValidExpiry', true) } : () => { return setValid('isValidExpiry', false) };
        let cvcOk = (cvc && cvc.length >= 3) ? () => { return setValid('isValidCVC', true) } : () => { return setValid('isValidCVC', false) };
        let numberOk = (this.state.isValidCard) ? () => { return setValid('isValidCard', true) } : () => { return setValid('isValidCard', false) };

        if (numberOk() && nameOk() && expiryOk() && cvcOk()) {
            this.props.setCheckOutStep(AppConstants.checkoutSteps.SUCCESS);
        }
    }

    render() {
        const { name, number, expiry, cvc, focused } = this.state;

        const total = CurrencyFormatter(CartTotal(this.props.cart));
        return (
            <div className="columns is-multiline cc-conponenet-wrap">
                <div className="column is-12">
                    <h1>Credit Card Details</h1>
                    <p>Fill in your credit card details below to complete yoru transaction.</p>
                </div>

                <div className="column is-12">
                    <div className="columns">
                        <div className="column is-5">
                            <form className="cc-form">
                                <div>
                                    <label htmlFor="number">Card Number</label>
                                    <input
                                        type="tel"
                                        name="number"
                                        className={`form-control is-valid-${this.state.isValidCard}`}
                                        placeholder="Card Number"
                                        pattern="[\d| ]{16,22}"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name">Card holder name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className={`form-control is-valid-${this.state.isValidName}`}
                                        placeholder="Your name here"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="expiry">Expiry Date</label>
                                    <input
                                        type="tel"
                                        name="expiry"
                                        className={`form-control is-valid-${this.state.isValidExpiry}`}
                                        placeholder="MM/YY"
                                        pattern="\d\d/\d\d"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div><div>
                                    <label htmlFor="cvc">Security Code (CVC)</label>
                                    <input
                                        type="tel"
                                        name="cvc"
                                        className={`form-control is-valid-${this.state.isValidCVC}`}
                                        placeholder="CVC"
                                        pattern="\d{3,4}"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="column is-7">
                            <Cards
                                number={number}
                                name={name}
                                expiry={expiry}
                                cvc={cvc}
                                focused={focused}
                                callback={(type, isValid) => { this.setState({ isValidCard: isValid }); }} />
                        </div>
                    </div>
                </div>
                <div className="column is-12">
                    <div onClick={this.handleSubmit} className="button is-large btn-confirm is-pulled-right" >
                        PAY ${total}
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

export default connect(mapStateToProps)(CreditCardForm);