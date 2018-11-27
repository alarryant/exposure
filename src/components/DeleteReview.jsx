import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

class DeleteReview extends Component {
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

    handleClose(e) {
        e.preventDefault();
        // const reviewId = this.props.review.review_id;
        const review = this.props.review;
        this.props.deleteReview(review);
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleChange(e) {
        e.preventDefault();
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render() {
        return (
            <div>
            <Button className="deleteReview" bsStyle="default" bsSize="small" onClick={this.handleShow}>
                Delete Review
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <p>Your Review: {this.props.review.description}</p>
                </Modal.Header>
                <form onSubmit={this.handleSubmit}>
                  <Modal.Body>
                    <h3>Are you sure you want to delete this review?</h3>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button type="submit" onClick={this.handleClose}>Yes, Delete!</Button>
                  </Modal.Footer>
                </form>
            </Modal>
            </div>
        );
    }
}

export default DeleteReview;