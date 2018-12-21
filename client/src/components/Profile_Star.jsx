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
    axios.post('/api/artists/:id/like',
              { currentUser: this.props.currentUser,
                artistId: this.props.artistId })
      .then((res) => {
        this.setState({ liked: true,
                        numberOfLikes: res.data[0].count});
    });
  }

  handleUnlikeClick() {
    axios.post('/api/artists/:id/unlike',
              { currentUser: this.props.currentUser,
                artistId: this.props.artistId })
      .then((res) => {
        this.setState({liked: false,
                       numberOfLikes: res.data[0].count});
    });
  }

  componentDidMount() {
    axios.get(`/api/artists/${this.props.artistId}/totallikes`,
             { params: {
                currentUser: this.props.currentUser,
                artistId: this.props.artistId }
              })
      .then((res) => {

        let artistLiked = res.data.likedArtists.map((artist) => {
          return Number(artist.artist_id);
        });

        this.setState({
          numberOfLikes: res.data.likeCount[0].count,
          liked: artistLiked.includes(Number(this.props.artistId))
        });
      });

  }

  render() {
    return(
      <span className="likesContainer">
        <p>{this.state.numberOfLikes || 0}</p>
        {this.state.liked ? (
          <span>
            <i className="fas fa-star"
               onClick={this.handleUnlikeClick}></i>
          </span>
          ) : (
          <span>
            <i className="far fa-star"
               onClick={this.handleLikeClick}></i>
          </span>)}
      </span>
      )
    }
}

export default StarPhotographer;