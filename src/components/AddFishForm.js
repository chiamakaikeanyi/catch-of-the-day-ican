import React, { Component, } from "react";
import PropTypes from "prop-types";

class AddFishForm extends Component {
    static propTypes = {
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            description: PropTypes.string,
            status: PropTypes.string,
        }).isRequired,
        addFish: PropTypes.func.isRequired,
    }

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descriptionRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
        event.preventDefault();

        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            description: this.descriptionRef.current.value,
            image: this.imageRef.current.value,
        };

        this.props.addFish(fish);
        event.currentTarget.reset();
    }

    render() {
        return (
            <form
                className="fish-edit"
                onSubmit={this.createFish}
            >
                <input
                    name="name"
                    placeholder="Name"
                    ref={this.nameRef}
                    type="text"
                />
                <input
                    name="price"
                    placeholder="Price"
                    ref={this.priceRef}
                    type="text"
                />
                <select
                    name="status"
                    ref={this.statusRef}
                >
                    <option value="available">Fresh</option>
                    <option value="unavailable">Sold Out</option>
                </select>
                <textarea
                    name="description"
                    placeholder="Description"
                    ref={this.descriptionRef}
                />
                <input
                    name="image"
                    placeholder="Image"
                    ref={this.imageRef}
                    type="text"
                />
                <button type="submit">Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;