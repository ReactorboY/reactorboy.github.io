import React, { Component } from 'react'
import Header from './Common/Header'
import Nav from './Common/Nav'
import About from './Common/About'
import Portfolio from './Common/Portfolio'
import Footer from './Common/Footer'

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Nav />
                <Header title="Talk is cheap, Show me the Code"/>
                <About title="Mohd Hussain a.k.a Reactorboy" 
                        subtitle="I am passionate about building excellent software that improves the lives of those around me." 
                        skills={['node','react','android','mongo', 'nextjs','aws']} 
                />
                <Portfolio />
                <Footer />
            </React.Fragment>
        )
    }
}
export default Home