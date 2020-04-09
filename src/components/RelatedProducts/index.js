import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Container} from "react-grid-system";
import Slider from "react-slick/lib";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import "./style.css";

import {products} from "./data";
import Card from "../Card";

export default class RelatedProducts extends Component {
    render() {

        const {category, numbers, rtl} = this.props;

        const settings = {
            rtl: !!rtl,
            dots: false,
            speed: 500,
            autoplay: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide: true,
            prevArrow: <PrevArrow/>,
            nextArrow: <NextArrow/>,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        centerPadding: "120px",
                        infinite: true,
                        dots: true
                    }
                },
            ]
        };

        return (
            <section className="related-products">
                <Container fluid className="container-fluid">
                    <div className="section-title">
                        <h4>خریداران این محصول، محصولات زیر را هم خریده اند</h4>
                    </div>
                    <div className="related-products-row">
                        <Slider {...settings}>
                            {products.map((product, i) => (
                                <Link to={`/products/${i}`}>
                                    <div className="related-products-col">
                                        <Card {...product} test={i}/>
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </section>
        )
    }
}

function PrevArrow(props) {
    const {onClick} = props;
    return (
        <div onClick={onClick} className="related-products-arrow prev">
            <FaAngleLeft/>
        </div>
    );
}

function NextArrow(props) {
    const {onClick} = props;
    return (
        <div onClick={onClick} className="related-products-arrow next">
            <FaAngleRight/>
        </div>
    );
}