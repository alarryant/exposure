import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class Signup extends Component {

    constructor(props) {
        super(props);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
        this.state = { 
            show: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userType: null
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
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const password = this.state.password;
        const userType = this.state.userType;
        this.props.signupInfo(firstName, lastName, email, password, userType);
    }

    render() {
        return (
            <div>
            <Button bsStyle="default" bsSize="small" onClick={this.handleShow}>
                Sign Up
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create Your Account</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <h4>First Name</h4>
                        <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange}></input>
                        <h4>Last Name</h4>
                        <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange}></input>
                        <h4>Email</h4>
                        <input type="email" placeholder="Email" name="email" onChange={this.handleChange}></input>
                        <h4>Password</h4>
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange}></input>
                        <h4>Are you a:</h4>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="radio" name="userType">
                            <ToggleButton value={1} onChange={this.handleChange}>Artist</ToggleButton>
                            <ToggleButton value={2} onChange={this.handleChange}>Client</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
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