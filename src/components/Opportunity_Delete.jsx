import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

//MODAL FOR DELETING AN EVENT

class DeleteEvent extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        show: false,
        date: '',
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
    const event_id = this.props.eventid;
    const creatorId = this.props.event.creator_id
    this.props.deleteEvent(event_id, creatorId);
  }

  render() {
    return (
      <div>
      <Button bsStyle="default" bsSize="small" onClick={this.handleShow}>
          Delete Event
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.event.name}</Modal.Title>
          <p>Date: {this.props.date} - Location: {this.props.event.event_location}</p>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <h3>Are you sure you want to delete?</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={this.handleClose}>Yes, Delete!</Button>
          </Modal.Footer>
        </form>
      </Modal>
      </div>
  )}
}

export default DeleteEvent;