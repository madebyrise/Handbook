import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"


const LayoutWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 5px 1fr;
  grid-template-columns: 250px 1fr;
`

const NavWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: #F2F7F4;
  overflow: scroll;
`

const HeaderWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  z-index: 2;
`

const ContentWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  overflow: scroll;
  justify-self: center;
  width: 100%;
  padding: 25px;
`

const Content = styled.main`
  max-width: 850px;
  margin: auto;
`

const Layout = ({ children }) => (
  <LayoutWrapper>
    <HeaderWrapper>
      <Header/>
    </HeaderWrapper>
    <NavWrapper>
      <Nav/>
    </NavWrapper>
    <ContentWrapper>
      <Content>{children}</Content>
    </ContentWrapper>
  </LayoutWrapper>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
