import React from 'react';
import Splashart from './Splashart.jpg';
import Carousel from 'react-bootstrap/lib/Carousel';

class CategoryHeader extends React.Component {
  render () {
    return (
      <h1>{this.props.categories}</h1>
      )
  }
}

// class Carousel extends React.Component {

// }

class Home extends React.Component {

  render() {

  return (

    <div className="splashcontainer">
      <img className="splashart" src={Splashart} />
    </div>
  );
 }
}

export default Home;