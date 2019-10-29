import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {
  const edges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Rise Handbook</h1>
      <p>Sets out working policies, principles and processes for Rise for employees and contractors.</p>
      <ul>
        {edges && edges.map((edge, i) => {
          return <li>
              <Link to={ edge.node.frontmatter.path }>{ edge.node.frontmatter.title }</Link>
            </li>
        })}
      </ul>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export const contentsQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`


export default IndexPage
