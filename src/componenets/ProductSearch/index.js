import React, { Component } from 'react';

import { connect } from 'react-redux';
import { SEARCHWITHQUERY } from '../../modules/shop';

class ProductSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchActive: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleToggleSearch = this.handleToggleSearch.bind(this);        
    }

    handleChange(e) {
        let query = e.target.value;
        this.props.DispatchSearchWithQuery(query);
    }

    handleToggleSearch() {
        this.setState({
            searchActive: !this.state.searchActive
        });
    }



    render() {

        return (
            <div className="product-search-wrap">
                <div className={"product-search-wrap-inner " + (this.state.searchActive ? 'active' : '')}>
                <div className="product-search-button" >
                    <i className="fa fa-search" 
                    onClick={this.handleToggleSearch} />
                </div>
                <div className="product-search-input-wrap">
                    <input onChange={this.handleChange} />
                </div></div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        shop: state.shop
    }
};

function mapDispatchToProps(dispatch) {
    return {
        DispatchSearchWithQuery: (query) => {
            dispatch({ type: SEARCHWITHQUERY, payload: query });
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);