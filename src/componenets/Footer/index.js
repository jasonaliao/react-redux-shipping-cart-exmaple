import React, { Component } from 'react';

export default class Footer extends Component {

    render() {

        const collections = [
            { pagename: 'New Arrivals', url: '/new-arrivals' },
            { pagename: 'Shop', url: '/shop' },
            { pagename: 'Brands', url: '/brands' },
            { pagename: 'About', url: '/about' },
            { pagename: 'Contact', url: '/contact' },
        ];

        return (
            <div className="footer-menu columns">
                <div className="column is-6">
                    <p className="copyright">&copy;{new Date().getFullYear()} <a href='https://jasonliao.co.nz' alt='Jason Frontend Developer' rel="noopener noreferrer" target='_blank' >Jason Liao</a>. All rights reserved.</p>
                </div>
                <div className="column is-6">
                    <ul>
                        {
                            collections.map((collection) => {
                                return (
                                    <li key={collection.pagename}>
                                        <a
                                            className="menu-link"
                                        >
                                            {collection.pagename}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>


            </div>
        );
    };
}

