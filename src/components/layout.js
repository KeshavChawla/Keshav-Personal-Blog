import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import header_logo from "../../static/assets/keshav_mac_animoji.jpg"


export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (

    <div className="site-wrapper">
      <header className="site-header">

        <div className="site-title">
        <title>{data.site.siteMetadata.title}</title>

        <div className="animoji-innner">
        <img className="animoji-header-image" src={header_logo} alt="Keshav Animoji Header Logo" />
        </div>
        <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>

      </header>

      {children}
        <Navigation/>
      <footer className="site-footer">
        <p>Made with <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
      </footer>

    </div>
  )
}
