import React, {Component} from "react";
import {FaMinus, FaPlus} from 'react-icons/fa';
import "./style.css";

export default class InputNumbers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numbers: 0
        }
    }

    handleProductsNumbers = (type) => {

        const min = 0;
        const max = 10;
        let numbers = this.state.numbers;

        if (type === "add" && numbers < max) {
            numbers = numbers + 1;
        } else if (type === "remove" && numbers > min) {
            numbers = numbers - 1;
        }

        this.setState({
            numbers
        })
    }

    render() {

        const {max} = this.props;
        const {numbers} = this.state;

        return (
            <div className="component-input-numbers">
                <button className="component-input-numbers-button" type="button" onClick={this.handleProductsNumbers.bind(this, "add")}>
                    <FaPlus />
                </button>
                <div className="component-input-numbers-value">
                    <span>
                        {numbers}
                    </span>
                </div>
                <button className="component-input-numbers-button" type="button" onClick={this.handleProductsNumbers.bind(this, "remove")}>
                    <FaMinus />
                </button>
            </div>
        )
    }
}
