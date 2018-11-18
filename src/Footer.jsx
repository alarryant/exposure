import React from 'react';
import { NavLink } from "react-router-dom"


class Footer extends React.Component {

  render() {

  return (
  <div className="footer">
    <p>
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
    </p>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact us</NavLink>
    <p><i className="far fa-copyright"></i>Exposure Inc. 2018. All rights reserved.</p>
   </div>
   );
 }
}

export default Footer;