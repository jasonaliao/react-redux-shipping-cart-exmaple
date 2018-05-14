import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CurrencyFormatter } from './CartHelper';

export default class CartItem extends Component {

    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(item, event) {
        let _newQty = event.target.value;
        let _item = item;

        _item.quantity = parseInt(_newQty, 10);
        this.props.updateQty(_item);
    }

    render() {

        const hasItem = (this.props.products && this.props.products.length > 0);
        const backToShopLink = hasItem ? (<div><Link to="/">Continue shopping</Link></div>) : '';
        const itemList = (
            hasItem ?
                this.props.products.map((item) => {

                    const formattedPrice = `$${CurrencyFormatter(item.Price)}`;
                    const lineTotal = item.Price * item.quantity;
                    const formattedLineTotal = `$${CurrencyFormatter(lineTotal)}`;

                    return (
                        <div className="cart-item-row columns" key={item.Handle}>
                            <div className="column"><img className="mainImage" src={item.ImageSrc} alt={item.Title} /></div>
                            <div className="column is-3 cart-item-desc">
                                <b>{item.Vendor}</b>
                                <p>{item.Title}</p>
                            </div>
                            <div className="column">{formattedPrice}</div>
                            <div className="column">
                                <input
                                    className="cart-item-qty"
                                    type="number" min="1"
                                    value={item.quantity}
                                    onChange={(e) => this.handleChange(item, e)}
                                />
                            </div>
                            <div className="column">
                                <a className="cart-item-remove" onClick={() => this.props.removeFromCart(item)}>Remove</a>
                            </div>
                            <div className="column"><b>{formattedLineTotal}</b></div>
                        </div>
                    );
                })
                : (
                    <div className="cart-item-empty">
                        <p>Your cart is empty. <Link to="/">Start shopping.</Link></p>
                    </div>
                )
        );
        return (
            <div className="cart-items">
                <div className="columns is-marginless">
                    <div className="column is-6 is-paddingless">
                        <h2>Your Bag</h2>
                    </div>
                    
                    <div className="column is-6 is-paddingless cart-item-back-to-shop">{backToShopLink}</div>
                </div>
                <div className="cart-items-list">
                    {itemList}
                </div>
            </div>

        );
    };
}

