import React from 'react';

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class EditPackagesCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // showMenu: true,
    };

    this.renderPricePackage = this.renderPricePackage.bind(this);
    this.newInputPackages = this.newInputPackages.bind(this);
  }

  newInputPackages() {
    return (
        <div>
          <label>
            Tier
          </label>
          <input type="number"
                 name="packagetier"
                 placeholder="Enter a number between 1 and 3.">
          </input>
          <label>
            Price
          </label>
          <input type="number"
            name="packageprice"
            placeholder="Enter a price here.">
          </input>
          <label>
            Description
          </label>
          <textarea name="packagedescription"
            placeholder="Describe expected services, deliverables, and occasion recommendations."/>
        </div>
      )
  }

  renderPricePackage(pricePackages=[]) {
    let numberOfPackages = pricePackages.length;
    let newInputFields = 3 - numberOfPackages;

    const currentPackages = pricePackages.map(function(pricePackage) {
      return (
        <div>
          <label>
            Tier
          </label>
          <input type="number"
                 name="packagetier"
                 value={pricePackage.tier}
                 placeholder="Enter a number between 1 and 3.">
          </input>
          <label>
            Price
          </label>
          <input type="number"
                 name="packageprice"
                 value={pricePackage.price}
                 placeholder="Enter a price here.">
          </input>
          <label>
            Description
          </label>
          <textarea name="packagedescription"
                    value={pricePackage.description}
                    placeholder="Describe expected services, deliverables, and occasion recommendations."/>
        </div>
      )
    })

    for (let i = 0; i < newInputFields; i++) {
      currentPackages.push(this.newInputPackages());
    }

    return currentPackages;
  }

  render() {


    return (
      <div className="profilebtn" >
        <button>
          Packages
        </button>
        <div className="menu"
          ref={ (element) => { this.dropdownMenu = element } }>
          {this.renderPricePackage(this.props.packages)}
        </div>
      </div>
    );
  }
}

export default EditPackagesCard;