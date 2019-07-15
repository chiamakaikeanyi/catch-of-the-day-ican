/* eslint-disable react/prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends Component {

  render() {
    return (
      <div className="inventory">

        <h2>Inventory</h2>
        {
          this.props.fishes && Object.keys(this.props.fishes).map(index => (
            <EditFishForm
              deleteFish={this.props.deleteFish}
              fish={this.props.fishes[index]}
              index={index}
              key={index}
              updateFish={this.props.updateFish}
            />
          ))
        }
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  fishes: PropTypes.object.isRequired,
  deleteFish: PropTypes.func.isRequired,
  updateFish: PropTypes.func.isRequired,
  addFish: PropTypes.func.isRequired,
  loadSampleFishes: PropTypes.func.isRequired,
};

export default Inventory;