import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CLEARCART } from '../../../modules/cart';

class Success extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        setTimeout(() => {
            this.setState({ loading: false });
            this.props.DispatchClearCart();
        }, 3000);

    }

    render() {

        return (
            <div className="columns is-multiline success-wrap">
                <div className="column is-12">
                    {
                        this.state.loading ? (
                            <div className="loading spinner">
                                <div className="bounce1"></div>
                                <div className="bounce2"></div>
                                <div className="bounce3"></div>
                            </div>
                        )
                            : <div className="success-msg">
                                <h2>Success!</h2>
                                <p>This is a demo store - and no we haven't store your credit card details.</p>
                            </div>
                    }
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


function mapDispatchToProps(dispatch) {
    return {
        DispatchClearCart: () => {
            dispatch({ type: CLEARCART });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Success);