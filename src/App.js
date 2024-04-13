import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from './Components/Hero'
import About from './Components/About'
import Contact from './Components/Contact'
import './styles.css'

function App() {
    return (
        <div>
            <Helmet>
                <title>Dundas Grenville Christian Home Educator’s Association</title>
                <meta name="description" content="Information about the Dundas Grenville Christian Home Educator’s Association" />
                <meta name="keywords" content="christian, dgchea, north dundas, south dundas, homeschool, home school, homeschooling, grenville, home education, home educator" />
                <meta name="author" content="Rebekah D" />
            </Helmet>
            <Hero/>
            <About />
            <Contact />
        </div>
    )
}

export default App