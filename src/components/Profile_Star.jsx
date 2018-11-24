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
    axios.post('/artists/:id/like',
              { currentUser: this.props.currentUser,
                artistId: this.props.artistId })
      .then((res) => {
        this.setState({ liked: true,
                        numberOfLikes: res.data[0].count});
    });
  }

  handleUnlikeClick() {
    axios.post('/artists/:id/unlike',
              { currentUser: this.props.currentUser,
                artistId: this.props.artistId })
      .then((res) => {
        this.setState({liked: false,
                       numberOfLikes: res.data[0].count});
    });
  }

  componentDidMount() {
    axios.get(`/artists/${this.props.artistId}/totallikes`,
             { params: {
                currentUser: this.props.currentUser,
                artistId: this.props.artistId }
              })
      .then((res) => {

        let artistLiked = res.data.likedArtists.map((artist) => {
          return Number(artist.artist_id);
        });

        console.log("this is artistliked in profile star", artistLiked);
        console.log("this is whether artist is liked or not", artistLiked.includes(Number(this.props.artistId)));

        this.setState({
          numberOfLikes: res.data.likeCount[0].count,
          liked: artistLiked.includes(Number(this.props.artistId))
        });
      });

  }

  render() {
    return(
      <div>
        <p>{this.state.numberOfLikes || 0}</p>
        {this.state.liked ? (
          <div>
            <i className="fas fa-star"
               onClick={this.handleUnlikeClick}></i>
          </div>
          ) : (
          <div>
            <i className="far fa-star"
               onClick={this.handleLikeClick}></i>
          </div>)}
      </div>
      )
    }
}

export default StarPhotographer;