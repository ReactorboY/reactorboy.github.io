import React, { Component } from 'react'
import './timeline.css'
import data from './data'

export default class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="port-intro" id="port-intro">
                <div>
                    <h2>Journey so far</h2>
                    <p>Below you can see my projects & Certifications timeline, Things I have created so far</p>
                </div>
            </div>
            <section id="portfolio">
                <div className="timeline-container">
                    {data.map((item,idx) => (
                        <div key={idx} className="timeline-item">
                            <div className="timeline-item-content">
                                <span className="tag" style={{backgroundColor:item.category.color}}>
                                    {item.category.tag}
                                </span>
                                <time>{item.date}</time>
                                <p>{item.text}</p>
                                {item.link && (
                                    <a href={item.link.url}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        {item.link.text}
                                    </a>
                                )}
                                <span className="circle"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            </React.Fragment>
        )
    }
}
