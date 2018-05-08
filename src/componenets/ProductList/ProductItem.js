import React, { Component } from 'react';

export default class ProductListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const subImage = this.props.product.ImageGallery ?  (
            (<img className="subImage" src={this.props.product.ImageGallery[1].ImageSrc} alt={this.props.product.Title} />)
        ) : null;

        const price = `$${this.props.product.Price.toFixed(2)}`;
        

        return (
            <div className="product-list-item-wrap column is-3">
                <img className="mainImage" src={this.props.product.ImageSrc} alt={this.props.product.Title} />
                {subImage}
                <div className="product-list-item-details">
                    <button onClick={() => this.props.addToCart(this.props.product)}>Add to cart</button>
                    <button onClick={() => this.props.removeFromCart(this.props.product)}>Remove</button>
                </div>
                
                <b>{this.props.product.Vendor}</b>
                <p>{this.props.product.Title}</p>
                <p>{price}</p>

            </div>
        );
    };
}

