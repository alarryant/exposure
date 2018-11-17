import React, {Component} from 'react';

class Footer extends React.Component {

  render() {

  return (
    <div className="footer">
   <p><i class="fab fa-facebook-f"></i><i class="fab fa-twitter"></i><i class="fab fa-instagram"></i></p>
   <a href="/about">About</a>
   <a href="/contact">Contact us</a>
   <p><i class="far fa-copyright"></i>Exposure Inc. 2018. All rights reserved.</p>
   </div>
   );
 }
}

export default Footer;