import React from "react";
import PropTypes from "prop-types";
import { formatPrice, } from "../helpers";

const Fish = (props) => {
    const { image, name, price, description, status, } = props.details;

    const isAvailable = status === "available";

    return (
        <li className="menu-fish">
            <img
                alt={name}
                src={image}
            />
            <h3 className="fish-name">
                {name}
                <span className="price">{formatPrice(price)}</span>
            </h3>
            <p>{description}</p>
            <button
                disabled={!isAvailable}
                onClick={() => props.addToOrder(props.index)}
            >
                {isAvailable ? "Add To Cart" : "Sold Out"}
            </button>
        </li>
    );
};

Fish.propTypes = {
    details: PropTypes.shape({
        image: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        status: PropTypes.string,
    }).isRequired,
    addToOrder: PropTypes.func.isRequired,
    index: PropTypes.string.isRequired,
};

export default Fish;