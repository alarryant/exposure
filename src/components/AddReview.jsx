import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

class AddReview extends Component {

    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            show: false,
            rating: '',
            review: '',
            artistId: '',
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

    handleSubmit(event) {
        event.preventDefault();
        const rating = this.state.rating;
        const review = this.state.review;
        const user = this.props.currentUser;
        const artist = this.props.artistId
        this.props.createReview(rating, review, artist, user);
    }

    render() {
        return (
            <div>
                <Button bsStyle="default" bsSize="small" onClick={this.handleShow}>
                    Add Review
            </Button>

                <Modal show={this.state.show} onHide={this.handleClose} className="addReviewModal">
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Review</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Body>
                            <h4>Rating</h4>
                            <ButtonToolbar>
                                <ToggleButtonGroup type="radio" name="rating">
                                    <ToggleButton value={1} onChange={this.handleChange}>1</ToggleButton>
                                    <ToggleButton value={2} onChange={this.handleChange}>2</ToggleButton>
                                    <ToggleButton value={3} onChange={this.handleChange}>3</ToggleButton>
                                    <ToggleButton value={4} onChange={this.handleChange}>4</ToggleButton>
                                    <ToggleButton value={5} onChange={this.handleChange}>5</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                            <h4>Review</h4>
                            <textarea name="review" value={this.state.value} onChange={this.handleChange} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" onClick={this.handleClose}>Add Review</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default AddReview;