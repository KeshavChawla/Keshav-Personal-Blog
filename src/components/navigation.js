import React from "react"
import {Link} from "gatsby"
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'

export default (props) => (
  <nav className="navigation">

<div className="button-pad">
    <a href="https://keshavchawla.com" className="button -primary">Home</a>
    <a href="https://blog.keshavchawla.com" className="button">Blog</a>
    <a href="https://keshavchawla.com/Keshav_Chawla_CV.pdf" className="button ">CV</a>
    <a href="https://keshavchawla.com/projects" className="button ">Projects</a>
    <a href="https://keshavchawla.com/Keshav_Portfolio_Website.pdf" className="button ">Portfolio</a>
    <a href="https://keshavchawla.com/contact" className="button ">Contact</a>
    </div>

  </nav>


)
