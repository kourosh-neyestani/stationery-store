import React, {Component} from "react";
import {FaHeart, FaRegHeart, FaRandom} from 'react-icons/fa';
import "./style.css";

export default class Card extends Component {
    render() {

        const {...product} = this.props;
        const { test} = this.props;

        return(
            <div className="component-card">
                <div className="product-item">
                    <div className="product-image">
                        <img src={require(`./images/product-${test}.jpg`)} alt=""/>
                    </div>
                    <div className="product-details">
                        <h3 className="product-name">
                            {product.name}
                        </h3>
                        {product.discount && (
                            <div className="product-price-discounted">
                                <span className="price-count">{this.addComma(product.price * product.discount / 100)}</span>
                                <span className="price-type"> تومان </span>
                            </div>
                        )}
                        <div className={["product-price", product.discount && "discounted" ].join(" ")}>
                            <span className="price-count">{this.addComma(product.price)}</span>
                            <span className="price-type"> تومان </span>
                        </div>
                    </div>
                    {product.discount && (
                        <div className="product-discount">
                            <span className="count">%{product.discount}</span>
                        </div>
                    )}
                    <div className={["product-icon", "product-favorite", product.favorite && "active"].join(" ")}>
                        {product.favorite ? <FaHeart /> : <FaRegHeart />}
                    </div>
                    <div className="product-icon product-compare">
                        <FaRandom />
                    </div>
                </div>
            </div>
        )
    }

    addComma = ( num, sep ) => {
        let number = typeof num === "number"? num.toString() : num,
            separator = typeof sep === "undefined"? ',' : sep;
        return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1"+separator);

    }
}

