import React from 'react'
import './index.module.scss'

import Header from '../components/header'
import Footer from '../components/footer'

const Template = props => (
  <div>
    <Header />
    { props.children() }
    <Footer />
  </div>
)

export default Template
