import React from 'react';

// https://blog.campvanilla.com/reactjs-dropdown-menus-b6e06ae3a8fe
class EditPackagesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state= {tierError: null};

    this.renderPricePackage = this.renderPricePackage.bind(this);
    this.newInputPackages = this.newInputPackages.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    if (event.target.name.includes("tier") && (event.target.value > 3 || event.target.value < 1)) {
      this.setState({tierError: true});
      event.target.value = '';
    } else {
      this.setState({tierError: null});
      this.props.sendPackageField(event.target.name, event.target.value);
    }
  }

  newInputPackages(index) {
    return (
        <div className="packageForm">
          <label>
            Tier
          </label>
          <input
            type="number"
            name={`tier_${index}`}
            placeholder="1/2/3"
            onChange={this.handleChange}
            className="tierinput"
          >
          </input>
          {this.state.tierError ? <p className="tierError">Tier must be a number between 1 and 3.</p> : ''}
          <br/>
          <label>
            Price
          </label>
          <input
            type="number"
            name={`price_${index}`}
            placeholder="Enter a price here."
            onChange={this.handleChange}
            className="priceinput">
          </input>
          <br/>
          <label>
            Description
          </label>
          <textarea
            name={`description_${index}`}
            placeholder="Describe expected services, deliverables, and occasion recommendations."
            onChange={this.handleChange}
            className="descriptioninput"/>
        </div>
      )
  }

  renderPricePackage(pricePackages=[]) {
    const currentPackages = pricePackages.map((pricePackage, index) => {
      return (
        <div className="packageForm">
          <label>
            Tier
          </label>
          <input type="number"
                 name={`tier_${index}`}
                 value={pricePackage.tier}
                 placeholder="1/2/3"
                 onChange={this.handleChange}
                 className="tierinput">
          </input>
          <br/>
          <label>
            Price
          </label>
          <input type="number"
                 name={`price_${index}`}
                 value={pricePackage.price}
                 placeholder="Enter a price here."
                 onChange={this.handleChange}
                 className="priceinput">
          </input>
          <br/>
          <label>
            Description
          </label>
          <textarea name={`description_${index}`}
                    value={pricePackage.description}
                    placeholder="Describe expected services, deliverables, and occasion recommendations."
                    onChange={this.handleChange}
                    className="descriptioninput"/>
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