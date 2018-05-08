import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export default class Menu extends Component {

    render() {

        const collections = [
            {pagename : 'New Arrivals', url:'/new-arrivals'}, 
            {pagename : 'Shop', url:'/shop'},
            {pagename : 'Brands', url:'/brands'},
            {pagename : 'About', url:'/about'},
            {pagename : 'Contact', url:'/contact'},
        ];

        return (
            <div className="product-collection-menu">
            <ul>
                {
                    collections.map((collection) => {
                        return <li><Link to={collection.url} className="menu-link">{collection.pagename}</Link></li>
                    })
                }
                </ul>
            </div>
        );
    };
}

