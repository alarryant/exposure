import React from 'react';
import EditAvailability from './Availability.jsx';

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class AvailabilityCard extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
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

  componentDidMount() {
    if (this.props.editable) {
      this.setState({showMenu: true});
    }
  }

  render() {
    // console.log("this is props in profile avail", this.props.currentUser);
    return (
      <div className="profilebtn">
        {this.props.editable ? <button>
          Availability
        </button> : <button onClick={this.showMenu}>
          Availability
        </button>}
        { this.state.showMenu ? (
          <div className="menu"
            ref={ (element) => { this.dropdownMenu = element } }>
            <EditAvailability artistId={this.props.artistId}
                              disabledDays={this.props.disabledDays}
                              currentUser = {this.props.currentUser}/>
          </div>
          ) : (
          null )
        }
      </div>
    );
  }
}

export default AvailabilityCard;