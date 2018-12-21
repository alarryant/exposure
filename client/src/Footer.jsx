import React from 'react';
import { NavLink } from "react-router-dom";
import './styles/Footer.css';


class Footer extends React.Component {

  render() {

  return (
  <div className="footer">
    <p>
      <a href="/"><i className="fab fa-facebook-f"></i></a>
      <a href="/"><i className="fab fa-twitter"></i></a>
      <a href="/"><i className="fab fa-instagram"></i></a>
    </p>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact us</NavLink>
    <p><i className="far fa-copyright"></i>Exposure Inc. 2018. All rights reserved.</p>
   </div>
   );
 }
}

export default Footer;