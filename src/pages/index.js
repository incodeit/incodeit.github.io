import React, { Component } from 'react'
import Helmet from 'react-helmet'
import g from "glamorous"
import { rhythm } from "../utils/typography"

import Hero from '../components/hero.js'
import Posts from '../components/posts.js'

class Index extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            {"name": "description", "content": this.props.data.site.siteMetadata.description},
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


export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
