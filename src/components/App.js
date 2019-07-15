import React, { Component, } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Fish from "./Fish";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        storeId: PropTypes.string,
      })
    }).isRequired,
  }

  state = {
    fishes: {},
    order: {},
  }

  componentDidMount() {
    const { params, } = this.props.match;

    // reinstate the local storage data
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentDidUpdate() {
    const { params, } = this.props.match;
    localStorage.setItem(params.storeId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes, };
    fishes[`fish${Date.now()}`] = fish;

    this.setState({
      fishes,
    });
  }

  updateFish = (key, updatedFish) => {
    const fishes = {
      ...this.state.fish,
    };
    fishes[key] = updatedFish;

    this.setState({
      fishes,
    });
  }

  deleteFish = (key) => {
    const fishes = {
      ...this.state.fish,
    };
    fishes[key] = null;

    this.setState({
      fishes,
    });
  }

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes,
    });
  }

  addToOrder = (key) => {
    const order = { ...this.state.order, };
    order[key] = order[key] + 1 || 1;

    this.setState({
      order,
    });
  }

  removeFromOrder = (key) => {
    const order = { ...this.state.order, };
    delete order[key];

    this.setState({
      order,
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Daily" />
          <ul className="fishes">
            {this.state.fishes && Object.keys(this.state.fishes).map(index => <Fish
              addToOrder={this.addToOrder}
              details={this.state.fishes[index]}
              index={index}
              key={index}
                                                                              />)}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          deleteFish={this.deleteFish}
          fishes={this.state.fishes}
          loadSampleFishes={this.loadSampleFishes}
          updateFish={this.updateFish}
        />
      </div>
    );
  }
}

export default App;