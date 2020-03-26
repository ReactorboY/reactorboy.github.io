import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link'

class About extends Component {
    render() {
        return (
            <section className="content-section bg-light" id="about" style={{paddingTop:"5rem"}}>
                <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                    <h2 className="mb-4">{this.props.title}</h2>
                    <div className="card py-5" style={{backgroundColor:"inherit",border:"none"}}>
                        <p className="lead mb-2"><b>{this.props.subtitle}</b></p>
                    </div>
                    <h3 className="mb-4 mt-4">Technologies I work with</h3>
                    <div className="row">
                        {this.props.skills && this.props.skills.map(skill => (
                            <div key={skill} className="col-sm-2">
                                <div>
                                    <img src={`img/${skill}.png`} title={skill} style={{maxWidth:"100%", height:"auto", padding:".25rem"}} alt="Nodejs" />
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="lead mb-5"><b>{this.props.cloud}</b></p>
                    <Link className="btn btn-dark btn-xl js-scroll-trigger" smooth to="#port-intro">Things I have created</Link>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
export default About