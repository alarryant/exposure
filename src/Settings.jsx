import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Settings extends Component{

    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        this.props.changeAccountInfo(firstName, lastName, email, password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>First Name</h3>
                    <input type='text' name='firstName' onChange={this.handleChange}/>
                    <h3>Last Name</h3>
                    <input type='text' name='lastName' onChange={this.handleChange}/>
                    <h3>Email</h3>
                    <input type='text' name='email' onChange={this.handleChange}/>
                    <h3>Password</h3>
                    <input type='password' name='password' onChange={this.handleChange}/>
                    <Button type='submit'>Save Changes</Button>
                </form>
            </div>
        )
    }
}

export default Settings;