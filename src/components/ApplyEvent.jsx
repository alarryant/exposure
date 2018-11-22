import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class ApplyEvent extends Component {
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
        const title = this.props.event;
        const description = this.state.description;
        const date = this.props.date;
        const location = this.state.location;
        // this.props.editProfileInfo(title, description, date, price, location);
    }

    render() {
        console.log("ApplyEvent", this.props)
        return (
            <div>
            <Button bsStyle="default" bsSize="medium" onClick={this.handleShow}>
                Interested
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Send a Message that You are Interested</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <h4>Title</h4>
                        <p>{this.props.event}</p>
                        <h4>Date of Event</h4>
                        <p>{this.props.date}</p>
                        <h4>Tell Me About You</h4>
                        <textarea type="text" name="description" onChange={this.handleChange}></textarea>
                        <h4>Location</h4>
                        <input type="text" name="location" onChange={this.handleChange}></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" onClick={this.handleClose}>Send</Button>
                    </Modal.Footer>
                </form>
            </Modal>
            </div>
        );
        }
}

export default ApplyEvent;