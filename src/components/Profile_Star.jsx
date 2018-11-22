import React from 'react';
import axios from 'axios';

class StarPhotographer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: false};

    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleUnlikeClick = this.handleUnlikeClick.bind(this);
  }

  handleLikeClick() {
    axios.post('/artists/:id/like', { currentUser: this.props.currentUser, artistId: this.props.artistId })
      .then((res) => {
        this.setState({liked: true, numberOfLikes: res.data[0].count});
    });
  }

  handleUnlikeClick() {
    axios.post('/artists/:id/unlike', { currentUser: this.props.currentUser, artistId: this.props.artistId })
      .then((res) => {
        this.setState({liked: false, numberOfLikes: res.data[0].count});
    });
  }

  componentDidMount() {
    axios.get('/artists/:id/totallikes', { currentUser: this.props.currentUser, artistId: this.props.artistId })
      .then((res) => {
        this.setState({numberOfLikes: res.data[0].count});
    });
  }

  render() {
    return(
      <div>
        <p>{this.state.numberOfLikes}</p>
        {this.state.liked ? (
          <div>
            <i className="fas fa-star" onClick={this.handleUnlikeClick}></i>
          </div>
          ) : (
          <div>
            <i className="far fa-star" onClick={this.handleLikeClick}></i>
          </div>)}
      </div>
      )
    }
}

export default StarPhotographer;