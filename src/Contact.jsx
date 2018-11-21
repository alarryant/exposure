import React from 'react';
import './styles/Contact.css';


class Contact extends React.Component {
  render() {
    return(
      <div className="contactPage">
        <h1>Contact Us</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.746517842841!2d-123.11703208431068!3d49.28120017933119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717ecf53065d%3A0x5773ecde3efd958b!2s401+W+Georgia+St%2C+Vancouver%2C+BC+V6B+5A1!5e0!3m2!1sen!2sca!4v1542767713114"></iframe>
        <div className="addressContainer">
          <h2>Mailing Address</h2>
          <h3>#600 - 401 W Georgia St.</h3>
          <h3>Vancouver, BC</h3>
          <h3>V6B 5A1</h3>
        </div>
        <div className="emailContainer">
          <h2>Email us</h2>
          <h3><a href="mailto:exposurephotography@email.com">exposurephotography@email.com</a></h3>
        </div>
        <div className="phoneContainer">
          <h2>Call us</h2>
          <h3>+1 (123) 456-7890</h3>
        </div>
      </div>
      );
  }
}

export default Contact;