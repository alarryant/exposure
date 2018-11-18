import React, {Component} from 'react';

class Footer extends React.Component {

  render() {

  return (
    <div className="footer">
   <p><i className="fab fa-facebook-f"></i><i className="fab fa-twitter"></i><i className="fab fa-instagram"></i></p>
   <a href="/about">About</a>
   <a href="/contact">Contact us</a>
   <p><i className="far fa-copyright"></i>Exposure Inc. 2018. All rights reserved.</p>
   </div>
   );
 }
}

export default Footer;