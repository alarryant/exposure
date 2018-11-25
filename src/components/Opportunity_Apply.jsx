import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

//MODAL FOR APPLYING TO AN EVENT

class OpportunityApply extends Component {
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
    const description = this.state.description;
    const currentUser = parseInt(this.props.currentUser)
    this.props.saveApplication(event_id, currentUser, description);
  }

    render() {
      return (
        <div>
          <Button bsStyle="default" bsSize="small" onClick={this.handleShow}>
              Apply
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.event.name}</Modal.Title>
              <p>Date: {this.props.date} - Location: {this.props.event.event_location}</p>
            </Modal.Header>
            <form onSubmit={this.handleSubmit}>
              <Modal.Body>
                <h3>What else would you like to share with the client?</h3>
                <textarea className="applyEventForm" type="text" name="description" onChange={this.handleChange}></textarea>
              </Modal.Body>

              <Modal.Footer>
                <Button type="submit" onClick={this.handleClose}>Send {this.props.event.first_name} your application!</Button>
              </Modal.Footer>
            </form>
          </Modal>
          </div>
        )};
}

export default OpportunityApply;