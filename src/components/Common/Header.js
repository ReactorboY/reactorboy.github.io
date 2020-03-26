import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'


class Header extends Component {
    render() {
        return (
        <header className="masthead d-flex" style={{height:"100vh"}}>
            <div className="container text-center my-auto text-white">
            <h1 className="mb-1">{this.props.title}</h1>
            <Link className="my-5 btn btn-outline-danger btn-lg text-white js-scroll-trigger" style={{fontFamily:"Roboto"}} smooth to="#about">Let's Start</Link>
            </div>
            <div className="overlay"></div>
        </header>
        )
    }
}
export default Header