import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

import styled from "styled-components"

const NavContainer = styled.nav`
  padding: 1em;
`
const NavList = styled.ul`
  list-style: none;
  margin: 0;
`

const NavListItem = styled.li`
  list-style: none;
  margin: 0.125em 0;
`

const NavLink = styled(Link)`
  color: #313633;
  text-decoration: none;
  font-size: 0.8em;

  &:visited {
    color: #313633;
    text-decoration: none;
  }

  &:hover {
    color: #000;
  }

  &.active {
    color: #5DF59A;
  }
`

const LogoContainer = styled.div`
  padding: 1.5em;
`


const Nav = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
              title
              nav_title
            }
          }
        }
      }
    }
  `)
  const edges = data.allMarkdownRemark.edges;

  return (
    <NavContainer>
      <LogoContainer>
        <Link to='/'>
          <svg style={{fill: '#57e690'}} width="100%" viewBox="0 0 200 82">
              <path d="M64.377 81.068h12.6V.886h-12.6v80.182zM200 12.341V.886h-34.364v80.182H200V69.614h-21.763V46.132h17.297V34.677h-17.297V12.34H200zM117.484 0v11.323h11.323v11.323h11.323V0h-22.646zm-2.02 19.328h-12.591c-.005.265-.01.533-.01.802 0 22.91 24.628 26.002 24.628 42.496 0 5.728-2.519 7.79-6.529 7.79s-6.53-2.062-6.53-7.79v-5.727H102.52v4.926c0 12.829 6.416 20.16 18.787 20.16 12.371 0 18.787-7.331 18.787-20.16 0-22.91-24.63-26.002-24.63-42.497h.001zm-90.378 9.164c0 6.414-2.864 8.477-7.56 8.477H12.6V12.34h6.071c4.467 0 6.415 2.52 6.415 8.247v7.904zm4.353 13.403c5.612-2.636 8.248-8.02 8.248-16.267v-6.3c0-12.37-5.613-18.442-18.673-18.442H0v80.182h12.6V48.423h4.354c5.726 0 8.247 2.748 8.247 10.194v22.451h12.6v-22.45h-.003c-.056-8.184-2.145-14.126-8.36-16.723z" fill="%23currentColor" fill-rule="nonzero"></path>
          </svg>
        </Link>
      </LogoContainer>

      <NavList>
        {edges && edges.map((edge, i) => {
          return (
            <NavListItem>
              <NavLink activeClassName="active" to={ edge.node.frontmatter.path }>{ edge.node.frontmatter.nav_title && edge.node.frontmatter.nav_title}{ !edge.node.frontmatter.nav_title && edge.node.frontmatter.title }</NavLink>
            </NavListItem>
          )
        })}
      </NavList>
    </NavContainer>
  )
}

export default Nav

