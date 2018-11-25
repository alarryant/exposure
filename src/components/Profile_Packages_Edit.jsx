import React from 'react';

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class EditPackagesCard extends React.Component {
  constructor(props) {
    super(props);

    this.renderPricePackage = this.renderPricePackage.bind(this);
    this.newInputPackages = this.newInputPackages.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    console.log(event.target.name, event.target.value);
    this.props.sendPackageField(event.target.name, event.target.value);
  }

  newInputPackages(index) {
    return (
        <div>
          <label>
            Tier
          </label>
          <input
            type="number"
            name={`tier_${index}`}
            placeholder="Enter a number between 1 and 3."
            onChange={this.handleChange}
          >
          </input>
          <label>
            Price
          </label>
          <input
            type="number"
            name={`price_${index}`}
            placeholder="Enter a price here."
            onChange={this.handleChange}>
          </input>
          <label>
            Description
          </label>
          <textarea
            name={`description_${index}`}
            placeholder="Describe expected services, deliverables, and occasion recommendations."
            onChange={this.handleChange}/>
        </div>
      )
  }

  renderPricePackage(pricePackages=[]) {
    const currentPackages = pricePackages.map((pricePackage, index) => {
      return (
        <div>
          <label>
            Tier
          </label>
          <input type="number"
                 name={`tier_${index}`}
                 value={pricePackage.tier}
                 placeholder="Enter a number between 1 and 3."
                 onChange={this.handleChange}>
          </input>
          <label>
            Price
          </label>
          <input type="number"
                 name={`price_${index}`}
                 value={pricePackage.price}
                 placeholder="Enter a price here."
                 onChange={this.handleChange}>
          </input>
          <label>
            Description
          </label>
          <textarea name={`description_${index}`}
                    value={pricePackage.description}
                    placeholder="Describe expected services, deliverables, and occasion recommendations."
                    onChange={this.handleChange}/>
        </div>
      )
    })

    for (let i = pricePackages.length; i < 3; i++) {
      currentPackages.push(this.newInputPackages(i));
    }

    return currentPackages;
  }

  render() {

    return (
      <div className="profilebtn" >
        <button>
          Packages
        </button>
        <div className="menu">
          {this.renderPricePackage(this.props.packages)}
        </div>
      </div>
    );
  }
}

export default EditPackagesCard;