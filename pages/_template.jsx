import React from 'react'
import Header from '../components/Header'
import '../css/global.css'

const Template = props => (
  <div>
    <Header />
    { props.children }
  </div>
)

export default Template
