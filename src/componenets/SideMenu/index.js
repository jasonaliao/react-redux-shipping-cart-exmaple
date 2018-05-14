import React, { Component } from 'react';
export default class SideMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displaymore: false,
        }
    }
    render() {

        const collections = [
            { pagename: 'New Arrivals', url: '/new-arrivals' },
            { pagename: 'Shop', url: '/shop' },
            { pagename: 'Brands', url: '/brands' },
            { pagename: 'About', url: '/about' },
            { pagename: 'Contact', url: '/contact' },
        ];

        const more = this.state.displaymore ? (
            <div className='more-wrap'>
                <p>Build & design by <a href='https://jasonliao.co.nz' alt='Jason Frontend Developer' rel="noopener noreferrer" target='_blank' >@jasonaliao</a> using:</p>
                <i>React.js, Redux, Bulma</i>
            </div>
        ) : null;

        return (
            <div className="product-collection-menu">
                <ul>
                    {
                        collections.map((collection) => {
                            return (
                                <li key={collection.pagename}>
                                    <a className="menu-link">{collection.pagename}</a>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className='info'>
                    <p onClick={() => this.setState({ displaymore: !this.state.displaymore })} >This is a <i>demo</i> store<span className='bounce'>.</span></p>
                    {more}
                </div>

            </div>
        );
    };
}

