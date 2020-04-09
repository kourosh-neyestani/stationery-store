import React, {Component} from "react";
import {FaShoppingBasket, FaShoppingBag, FaRegHeart, FaArrowsAlt, FaRandom, FaHeart} from 'react-icons/fa';
import "./style.css";

export default class Card extends Component {
    render() {

        const {...product} = this.props;
        const { test} = this.props;

        return(
            <div className="component-card">
                <div className={["product-card-item", product.unavailable && "unavailable"].join(" ")}>
                    <div className="product-card-image">
                        <img src={require(`./images/product-${test}.jpg`)} alt=""/>
                    </div>
                    <div className="product-card-details">
                        <h3 className="product-card-name">
                            {product.name}
                        </h3>
                        {product.discount && (
                            <div className="product-card-price product-card-price-old">
                                <span className="price-amount font-num">{this.addComma(product.price)}</span>
                                <span className="price-currency"> تومان </span>
                            </div>
                        )}
                        <div className="product-card-price product-card-price-new">
                            <span className="price-amount font-num">{product.discount ? this.addComma(((product.price * product.discount) / 100)) : this.addComma(product.price)}</span>
                            <span className="price-currency"> تومان </span>
                        </div>
                    </div>
                    {product.discount && (
                        <div className="product-card-discount">
                            <span className="count font-num">%{product.discount}</span>
                        </div>
                    )}
                    <div className={["product-card-icon", "product-card-favorite", product.favorite && "active"].join(" ")}>
                        {product.favorite ? <FaHeart /> : <FaRegHeart />}
                    </div>
                    <div className="product-card-icon product-card-compare">
                        <FaRandom />
                    </div>
                    <div className="product-card-icon product-card-add-to-cart">
                        <FaShoppingBasket />
                    </div>
                    {/*<div className="product-card-icon product-zoom">*/}
                        {/*<FaArrowsAlt />*/}
                    {/*</div>*/}
                    <div className="product-card-show-details" />
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

