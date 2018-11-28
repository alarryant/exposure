import React from 'react';
import DeleteReview from './DeleteReview.jsx';

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class ReviewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: true,
      user: Number(this.props.currentUser)
    };

    this.renderReviews = this.renderReviews.bind(this);

  }

  renderReviews(reviews = []) {
    let currentUser = this.state.user;
    const deleteReview = this.props.deleteReview;
    return reviews.map(function (review) {
        return (
          <div className="reviewCard">
            <h4>{review.rating}/5</h4>
            <h4>{review.first_name} said:</h4>
              <p>{review.description}</p>
              {currentUser === review.user_id ? <DeleteReview review={review}
                currentUser={currentUser}
                deleteReview={deleteReview} />  : ""}
          </div>
        )
    })
  }

  render() {
    return (
      <div >
        <h1>
          Reviews
        </h1>
        <hr/>
        { this.state.showMenu ? (
          <div className="reviewMenu">
            {this.renderReviews(this.props.reviews)}
          </div>
          ) : (
          null )}
      </div>
    );
  }
}

export default ReviewsCard;