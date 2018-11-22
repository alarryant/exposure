import React from 'react';

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class ReviewsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.renderReviews = this.renderReviews.bind(this);
  }

  renderReviews(reviews=[]) {
    return reviews.map(function(review) {
      return (
        <div>
        <h4>{review.first_name} said:</h4>
        <h5>{review.rating}/5</h5>
        <p>{review.description}</p>
        </div>
      )
    })
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div className="profilebtn" >
        <button onClick={this.showMenu}>
          Reviews
        </button>
        { this.state.showMenu ? (
          <div className="menu"
            ref={ (element) => { this.dropdownMenu = element } }>
            {this.renderReviews(this.props.reviews)}
          </div>
          ) : (
          null )}
      </div>
    );
  }
}

export default ReviewsCard;