import React from 'react'
import '../css/global.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Template = props => (
  <div>
    <Header />
    { props.children }
    <Footer />
  </div>
)

export default Template
