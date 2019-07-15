import React, { Component, } from "react";
import PropTypes from "prop-types";

class EditFishForm extends Component {

  static propTypes = {
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
      status: PropTypes.string,
    }).isRequired,
    index: PropTypes.string.isRequired,
    updateFish: PropTypes.func.isRequired,
    deleteFish: PropTypes.func.isRequired,
  }

  handleChange = (event) => {
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  }

  render() {
    return (
      <div className="fish-edit">
        <input
          name="name"
          onChange={this.handleChange}
          type="text"
          value={this.props.fish.name}
        />
        <input
          name="price"
          onChange={this.handleChange}
          type="text"
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="description"
          onChange={this.handleChange}
          value={this.props.fish.description}
        />
        <input
          name="image"
          onChange={this.handleChange}
          type="text"
          value={this.props.fish.image}
        />
        <button
          onClick={() => this.props.deleteFish(this.props.index)}
          type="submit"
        >Delete Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
