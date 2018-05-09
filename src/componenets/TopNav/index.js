import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MiniCart from '../MiniCart';

export default class TopNav extends Component {

    render() {

        return (
            <nav className="top-nav columns">
                <div className="logo-wrap column is-4">
                    <Link to="/" className="logo">React Store</Link>
                </div>
                <div className="column">
                    <MiniCart />
                </div>

            </nav>
        );
    };
}

