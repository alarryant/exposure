import React from 'react';
import './styles/About.css';

function About() {
  return(
    <div className="aboutPage">
    <h1>About Exposure</h1>
      <div className="aboutImgName">
        <div className="aboutImgContainer">
          <img alt="JayImg" src="/images/technosquare.jpg"/>
        </div>
        <h3>Co-founder Jay</h3>
      </div>
      <div className="aboutImgName">
        <div className="aboutImgContainer">
          <img alt="AngelaImg" src="/images/corgisquare.jpg" />
        </div>
        <h3>Co-founder Angela</h3>
      </div>
      <div className="aboutImgName">
        <div className="aboutImgContainer">
          <img alt="JennyImg" src="/images/penguinsquare.jpg" />
        </div>
        <h3>Co-founder Jenny</h3>
      </div>
      <div className="aboutImgName">
        <div className="aboutImgContainer">
          <img alt="MonicaImg" src="/images/swiffer_owl.jpeg" />
        </div>
        <h3>Co-founder Monica</h3>
      </div>
      <p><b>Exposure</b> began one afternoon when co-founder Angela was listening to the woes of her friend,
        a freelance photographer relatively new to the scene. It was an attempt to solve a major obstacle faced
        by new photographers - <b>getting exposure</b>. And so we were born, with the help of co-founders Jenny,
        Monica, and Jay, who are equally passionate about giving young artists a chance to showcase their talent
        with the world.</p>
    </div>);
}

export default About;