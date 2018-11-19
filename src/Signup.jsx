import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class Signup extends Component {

    constructor(props) {
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
        this.state = { 
            show: false,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
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

    render() {
        return (
            <div>
            <Button bsStyle="default" bsSize="medium" onClick={this.handleShow}>
                Sign Up
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create Your Account</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSignup}>
                    <Modal.Body>
                        <h4>First Name</h4>
                        <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange}></input>
                        <h4>Last Name</h4>
                        <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange}></input>
                        <h4>Email</h4>
                        <input type="email" placeholder="Email" name="email" onChange={this.handleChange}></input>
                        <h4>Password</h4>
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange}></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" onClick={this.handleClose}>Sign Up</Button>
                    </Modal.Footer>
                </form>
            </Modal>
            </div>
        );
        }
}

export default Signup;