import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class CreateEvent extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        show: false,
        title: '',
        description: '',
        date: '',
        price: '',
        location: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    const title = this.state.title;
    const description = this.state.description;
    const date = this.state.date;
    const price = this.state.price;
    const location = this.state.location;
    this.props.createEvent(title, description, date, price, location);
  }

  render() {
    return (
      <div>
        <Button className="createbutton" bsStyle="default" bsSize="small" onClick={this.handleShow}>
            Create Event
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Your Event</Modal.Title>
          </Modal.Header>

          <form onSubmit={this.handleSubmit}>
            <Modal.Body>
              <h4>Title</h4>
              <input type="text" name="title" onChange={this.handleChange}></input>
              <h4>Description</h4>
              <textarea name="description" onChange={this.handleChange}></textarea>
              <h4>Date of Event</h4>
              <input type="date" name="date" onChange={this.handleChange}></input>
              <h4>Price Estimate</h4>
              <input type="text" name="price" placeholder="$CAD" onChange={this.handleChange}></input>
              <h4>Location</h4>
              <input type="text" name="location" onChange={this.handleChange}></input>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" onClick={this.handleClose}>Create</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )};
}

export default CreateEvent;