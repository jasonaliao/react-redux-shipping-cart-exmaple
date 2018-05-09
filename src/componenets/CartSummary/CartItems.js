import React, { Component } from 'react';

export default class CartItem extends Component {

    render() {

        const items = (
            this.props.products.map((item) => {

                const formattedPrice = `$${item.Price.toFixed(2)}`; 
                const lineTotal = item.Price * item.quantity;
                const formattedLineTotal = `$${lineTotal.toFixed(2)}`; 

                return (
                    <div className="cart-item-row columns" key={item.Handle}>
                        <div className="column"><img className="mainImage" src={item.ImageSrc} alt={item.Title} /></div>
                        <div className="column is-3 cart-item-desc">
                            <b>{item.Vendor}</b>
                            <p>{item.Title}</p>
                        </div>
                        <div className="column">{formattedPrice}</div>
                        <div className="column">{item.quantity}</div>
                        <div className="column">
                            <a onClick={() => this.props.removeFromCart(item)}>Remove</a>
                        </div>
                        <div className="column">{formattedLineTotal}</div>
                    </div>
                );
            })
        );
        return (
            <div className="cart-items">
            <h2>Your Bag</h2>
                <div>
                    {items}

                </div>
            </div>

        );
    };
}

