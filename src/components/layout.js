import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import header_logo from "../../static/assets/keshav_mac_animoji.jpg"
import "katex/dist/katex.min.css"


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
        <div className="animoji-innner">
        <img className="animoji-header-image" src={header_logo} alt="Keshav Animoji Header Logo" />
        </div>
        <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>

      </header>

      {children}
        <Navigation/>
      <footer className="site-footer">
        <p>Made with  <span role="img" aria-label="love">❤️</span>in <span role="img" aria-label="canada">🇨🇦</span>Toronto, ON. </p>

        <p>Powered via <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. I live on <a href="https://github.com/KeshavChawla/Keshav-Personal-Blog">GitHub</a>! </p>
      </footer>

    </div>
  )
}
