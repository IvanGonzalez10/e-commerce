/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Content, Footer} from '../styles/components';

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
     <>
      <Header />
      <Content>
        <main>{children}</main>
        <Footer >
          <a href="https://www.platzi.com">platzi</a>
        </Footer>
      </Content>
    </>
  )
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
