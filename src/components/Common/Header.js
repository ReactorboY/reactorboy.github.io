import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'


class Header extends Component {
    render() {
        return (
        <header className="masthead waveAnimation" style={{height:"100vh"}}>
            <div className="titleBox">
                <h1 style={{zIndex:"9999"}}>{this.props.title}</h1>
                <Link className="btn btn-dark btn-xl js-scroll-trigger buttonTitle" smooth to="#about">Things I have created</Link>
            </div>
            <div className="waveWrapperInner bgTop">
                <div className="wave waveTop" style={{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-top.png')"}}></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle" style={{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}}>
                </div>
            </div>
            <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom" style={{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}}></div>
            </div>
            <div className="overlay"></div> */}
        </header>
        )
    }
}
export default Header