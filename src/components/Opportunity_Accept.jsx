import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

//MODAL FOR DELETING AN EVENT

class OpportunityAccept extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
        show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleSubmit(event){
    event.preventDefault();
    const artist_id = this.props.applicant.artist_id
    const event_id = this.props.applicant.event_id
    this.props.acceptApplicant(artist_id, event_id);
  }

  render() {
    return (
      <div>
      <Button className="deletebutton" bsStyle="default" bsSize="small" onClick={this.handleShow}>
        Accept
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Event: {this.props.applicant.name}</Modal.Title>
          <p>Date: {this.props.eventdate} - Location: {this.props.applicant.event_location}</p>
        </Modal.Header>
        <form onSubmit={this.handleSubmit}>
          <Modal.Body>
            <h3>You are selecting {this.props.applicant.first_name} {this.props.applicant.last_name} for your event </h3>
            <h4>Please press the button below to confirm for selection</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" onClick={this.handleClose}>Confirm</Button>
          </Modal.Footer>
        </form>
      </Modal>
      </div>
  )}
}

export default OpportunityAccept;