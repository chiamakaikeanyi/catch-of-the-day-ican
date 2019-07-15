import React, { Component, } from "react";
import PropTypes from "prop-types";
import { getFunName, } from "../helpers";

class StorePicker extends Component {

    inputRef = React.createRef();

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    goToStore = (event) => {
        event.preventDefault();

        const storeName = this.inputRef.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <form
                className="store-selector"
                onSubmit={this.goToStore}
            >
                <h2>Please enter a store</h2>
                <input
                    defaultValue={getFunName()}
                    placeholder="Store Name"
                    ref={this.inputRef}
                    required
                    type="text"
                />
                <button type="submit">Visit Store</button>
            </form>
        );
    }
}

export default StorePicker;
