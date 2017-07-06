import React, { Component } from 'react'
import Helmet from 'react-helmet'

import { config } from 'config'
import Hero from '../components/Hero'

class Index extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": config.siteDescription},
          ]}
          link={[
            {rel: "shortcut icon", href: ""},
          ]}
        />
        <Hero />
      </div>
    )
  }
}

export default Index
