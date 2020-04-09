import React, {Component} from "react";
import {FaStar, FaRegStar} from "react-icons/fa";
import "./style.css";

export default class InputStars extends Component{

    state = {
        focused: 1,
        selected: 1,
    }

    render() {
        const {focused, selected} = this.state;
        return (
            <div className="component-input-stars">
                <span className="component-input-stars-label">امتیاز شما به این محصول</span>
                <ul>
                    {[1,2,3,4,5].map((i) => (
                        <li onMouseEnter={this.handleHover.bind(this, i)} onClick={this.handleSubmit.bind(this, i)} className={focused >= i || selected >= i ? "active" : ""}>
                            {selected >= i ? <FaStar /> : <FaRegStar />}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    handleHover = (i) => {
        this.setState({
            focused: i
        })
    }

    handleSubmit = (i) => {
        this.setState({
            selected: i
        })
    }
}