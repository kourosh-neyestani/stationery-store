import React, {Component} from "react";
import Slider from "react-slick/lib";
import "./style.css";

import {FaAngleLeft, FaAngleRight, FaRegHeart, FaRandom} from 'react-icons/fa';

export default class Gallery extends Component {
    render() {
        const settings = {
            dotsClass: "slick-dots slick-thumb product-gallery-paging",
            dots: true,
            speed: 500,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevArrow/>,
            nextArrow: <NextArrow/>,
            customPaging: function (i) {
                return (
                    <a>
                        <img src="https://dkstatics-public.digikala.com/digikala-products/1148045.jpg"/>
                    </a>
                );
            }
        };
        const {children} = this.props;

        return (
            <div className="product-gallery">
                <Slider {...settings}>
                    {children}
                </Slider>
                <div className="floating-item floating-item-favorite">
                    <FaRegHeart />
                </div>
                <div className="floating-item floating-item-compare">
                    <FaRandom />
                </div>
            </div>
        )
    }
}

function PrevArrow(props) {
    const {onClick} = props;
    return (
        <div onClick={onClick} className="product-gallery-arrow prev">
            <FaAngleLeft/>
        </div>
    );
}

function NextArrow(props) {
    const {onClick} = props;
    return (
        <div onClick={onClick} className="product-gallery-arrow next">
            <FaAngleRight/>
        </div>
    );
}