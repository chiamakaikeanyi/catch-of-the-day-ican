import React, { Component, } from "react";
import PropTypes from "prop-types";
import { formatPrice, } from "../helpers";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class Order extends Component {
    static propTypes = {
        fishes: PropTypes.object.isRequired,
        order: PropTypes.object.isRequired,
        removeFromOrder: PropTypes.func.isRequired,
    }

    renderOrder = (key) => {
        const { fishes, order, } = this.props;

        const fish = fishes[key];
        const count = order[key];
        const isAvailable = fish && fish.status === "available";
        const transitionOptions = {
            classNames: "order",
            key,
            timeout: { enter: 250, exit: 250 }
        };

        // ensure the fish is loaded
        if (!fish) {
            return null;
        }

        if (!isAvailable) {
            return (
                <CSSTransition {...transitionOptions}>
                    <li key={key}> Sorry, {fish ? fish.name : "fish"} is no longer available</li>
                </CSSTransition>
            );
        }

        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup
                            className="count"
                            component="span"
                        >
                            <CSSTransition
                                classNames="count"
                                key={count}
                                timeout={{ enter: 250, exit: 250 }}
                            >
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>

                        lbs - {fish.name}
                        {formatPrice(count * fish.price)}
                        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        );
    }

    render() {
        const { fishes, order, } = this.props;

        const orderIds = order && Object.keys(order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = fishes[key];
            const count = order[key];
            const isAvailable = fish && fish.status === "available";

            if (isAvailable) {
                return prevTotal + count * fish.price;
            }
            return prevTotal;
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup
                    className="order"
                    component="ul"
                >
                    {
                        orderIds && orderIds.map(this.renderOrder)
                    }
                </TransitionGroup>
                <div className="total">
                    Total:
                  <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;