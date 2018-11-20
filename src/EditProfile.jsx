import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class EditProfile extends Component {
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
            profileImage: '',
            website: '',
            instagram: '',
            facebook: '',
            twitter: '',
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
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;
        const email = this.state.email;
        const password = this.state.password;
        const profileImage = this.state.profileImage;
        const website = this.state.website;
        const instagram = this.state.instagram;
        const facebook = this.state.facebook;
        const twitter = this.state.twitter;
        this.props.editProfileInfo(firstName, lastName, email, password, profileImage, website, instagram, facebook, twitter);
    }

    render() {
        return (
            <div>
            <Button bsStyle="default" bsSize="medium" onClick={this.handleShow}>
                Edit
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Your Profile</Modal.Title>
                </Modal.Header>
                <form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <h4>First Name*</h4>
                        <input type="text" placeholder="First Name" name="firstName" onChange={this.handleChange}></input>
                        <h4>Last Name*</h4>
                        <input type="text" placeholder="Last Name" name="lastName" onChange={this.handleChange}></input>
                        <h4>Email*</h4>
                        <input type="text" placeholder="Email" name="email" onChange={this.handleChange}></input>
                        <h4>Password*</h4>
                        <input type="password" placeholder="Password" name="password" onChange={this.handleChange}></input>
                        <h4>Profile Image</h4>
                        <input type="file" name="profileImage" onChange={this.handleChange}></input>
                        <h4>Website URL</h4>
                        <input type="text" name="website" onChange={this.handleChange}></input>
                        <h4>Instagram URL</h4>
                        <input type="text" name="instagram" onChange={this.handleChange}></input>
                        <h4>Facebook URL</h4>
                        <input type="text" name="facebook" onChange={this.handleChange}></input>
                        <h4>Twitter URL</h4>
                        <input type="text" name="twitter" onChange={this.handleChange}></input>
                        <h4>Location</h4>
                        <input type="text" name="location" onChange={this.handleChange}></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit" onClick={this.handleClose}>Save</Button>
                    </Modal.Footer>
                </form>
            </Modal>
            </div>
        );
        }
}

export default EditProfile;