import React from 'react';

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class PackagesCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.renderPricePackage = this.renderPricePackage.bind(this);
  }

  renderPricePackage(pricePackages=[]) {
    let tier;

    return pricePackages.map(function(pricePackage) {
      if (pricePackage.tier === 1) {
      tier = "Basic";
    } else if (pricePackage.tier === 2) {
      tier = "Intermediate";
    } else if (pricePackage.tier === 3) {
      tier = "Deluxe";
    }
      return (
        <div>
          <h5>{tier}</h5>
          <p>{pricePackage.price}</p>
          <p>{pricePackage.description}</p>
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
        <button onClick={ this.showMenu }>
          Packages
        </button>
        {this.state.showMenu ? (
          <div className="menu"
            ref={ (element) => { this.dropdownMenu = element } }>
            {this.renderPricePackage(this.props.packages)}
          </div>
          ) : (
          null )}
      </div>
    );
  }
}

export default PackagesCard;