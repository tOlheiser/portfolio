/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Email from "./email"
import Social from "./social"
import Hero from "./hero"
import Work from "./work"
import About from "./about"
import Skills from "./skills"
import Contact from "./contact"
import {GlobalStyles} from '../styles/globalStyles'

import "./layout.css"
import style from "../pages/layout.module.css"
import { ThemeProvider } from "styled-components"
import { theme } from '../styles/theme'

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    
      <div>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
          {/*Page Section*/}
          <div className={style.landingPageContainer}>
            <Header siteTitle={"Tanner Olheiser"} /> {/* data.site.siteMetadata.title*/}
            <Email/>
            <Social/>
            {/*<Hero />*/}      
          </div>
          {/*
          <div className={`${style.pageContainer} ${style.center}`}>
            <Work />
          </div> 
          
          <div className={`${style.pageContainer} ${style.center}`}>
            <About />
            <Skills />
            <Contact />
          </div> */}
        </ThemeProvider>
      </div>
    
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/* Her setup
<StyledContent>
  <Nav isHome={isHome} />
  <Social isHome={isHome} />
  <Email isHome={isHome} />

  <div id="content">
    {children}
    <Footer />
  </div>
</StyledContent>
*/
