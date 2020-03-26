import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class Nav extends Component {
    constructor(props){
        super(props)
        this.state = {
            isToggleOn: false
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }
    render() {
        return (
            <React.Fragment>
                <Link className={this.state.isToggleOn ? 'menu-toggle rounded active':'menu-toggle rounded'} to="#" onClick={this.handleClick}>
                    <i className={`fas fa-${this.state.isToggleOn ? 'times' : 'bars'}`}></i>
                </Link>
                <nav id="sidebar-wrapper" className={this.state.isToggleOn ? 'active': ''}>
                    <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <Link className="js-scroll-trigger" smooth to="#page-top">Reactor's Home</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <Link className="js-scroll-trigger" smooth to="#about">About</Link>
                    </li>
                    <li className="sidebar-nav-item">
                        <Link className="js-scroll-trigger" smooth to="#portfolio">Portfolio</Link>
                    </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}
export default Nav