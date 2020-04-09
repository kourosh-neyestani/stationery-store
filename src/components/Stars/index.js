import React from 'react';
import {FaStar, FaRegStar} from "react-icons/fa";
import './style.css';

export default class Stars extends React.Component {
    render() {
        const {className, stars} = this.props;
        return (
            <ul className={["component-stars", className && className].join(" ")}>
                {[1,2,3,4,5].map((i) => (
                    <li>
                        {stars >= i ? <FaStar /> : <FaRegStar />}
                    </li>
                ))}
            </ul>
        )
    }
}