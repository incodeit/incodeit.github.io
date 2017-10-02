import React, { Component } from 'react'
import Helmet from 'react-helmet'
import g from "glamorous"
import { rhythm } from "../utils/typography"

class Posts extends Component {
  render() {
    return (
      <div>
        <h4>
          {this.props.data.allMarkdownRemark.totalCount} Posts
        </h4>
        {this.props.data.allMarkdownRemark.edges.map(({ node }) =>
          <div key={node.id}>
            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
              <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
            </g.H3>
            <p>
              {node.excerpt}
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Posts

export const query = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/posts/.*\\.md$/"}}
      sort: { order: DESC, fields: [frontmatter___date]},
    ){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
