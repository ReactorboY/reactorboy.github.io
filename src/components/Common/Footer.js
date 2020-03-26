import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center">
                <div className="container">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/reactorboy">
                        <i className="icon-social-linkedin"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white mr-3" href="https://www.twitter.com/reactorboy">
                        <i className="icon-social-twitter"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a className="social-link rounded-circle text-white" href="https://www.github.com/reactorboy">
                        <i className="icon-social-github"></i>
                    </a>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright &copy; Reactorboy 2019</p>
                </div>
            </footer>
        )
    }
}
