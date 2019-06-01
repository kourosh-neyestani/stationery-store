import React, {Component} from "react";
import {Container, Hidden, Row, Col} from "react-grid-system";
import {FaAngleLeft, FaAngleRight, FaAngleDown, FaAngleUp, FaHeart, FaRegHeart, FaRandom, FaShoppingCart} from 'react-icons/fa';
import Card from "./../../components/Card";

import "./style.css";

import {products} from "./data";

export default class Products extends Component {
    render() {
        return (
            <div className="page-products">
                {this.topbar()}
                <section className="products-list-items">
                    <Container fluid className="container-fluid">
                        <div className="row-products">
                            <div className="col-products-xl-2">
                                {this.sidebar()}
                            </div>
                            <div className="col-products-xl-80">
                                {this.products()}
                                {this.productsBar()}
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
        )
    }

    products = () => {
        return (
            <div className="products-list products-list-1">
                <Row className="row-0">
                    {products.map((product, i) => (
                        <Col xs={6} sm={6} md={4} lg={4} xl={3} key={i}>
                            <Card {...product} test={i}/>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }

    topbar = () => {
        return (
            <section className="products-top-bar">
                <Container fluid className="container-fluid">
                    <div className="row-products">
                        <div className="col-products-xl-2">
                            <h1 className="title">
                            </h1>
                        </div>
                        <div className="col-products-xl-80">
                            <Row>
                                <Col>

                                </Col>
                                <Col>
                                    <ul className="products-sorting">
                                        <li>
                                        </li>
                                        <li className="divider" />
                                        <li>
                                        </li>
                                        <li className="divider" />
                                        <li>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }

    sidebar = () => {
        return (
            <div className="products-sidebar">
                <div className="products-sidebar-inner">
                    <Widget active={true} title="">
                        <div style={{height: 180}}></div>
                    </Widget>
                    <Widget/>
                    <Widget/>
                    <Widget/>
                    <Widget/>
                    <Widget/>
                    <Widget/>
                    <Widget active={true} className="products-widget-colors" title="رنگ بندی محصولات">
                        <ul>
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </Widget>
                    <Widget/>
                </div>
            </div>
        )
    }

    pagination = () => {
        return (
            <div className="products-pagination">
                <ul>
                    <li className="icon prev">
                        <FaAngleRight />
                    </li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li className="icon next">
                        <FaAngleLeft />
                    </li>
                </ul>
            </div>
        )
    }

    productsBar = () => {
        return (
            <div className="products-bar">
                {this.pagination()}
            </div>
        )
    }


}





class Widget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: this.props.active
        }
    }

    handleClick = () => {
        let status = !this.state.status;
        this.setState({
            status
        })
    };

    render() {
        const {status} = this.state;
        const {children, className, title} = this.props;
        return (
            <div className={["products-widget", status && "active", className].join(" ")}>
                <div className="products-widget-head" onClick={this.handleClick.bind(this)}>
                    <h3 className={["title", !title ? "wf-title" : null ].join(" ")}>
                        {title && title}
                    </h3>
                    <div className="icon">
                        {status ? <FaAngleUp/> : <FaAngleDown/>}
                    </div>
                </div>
                <div className="products-widget-body">
                    <div className="products-widget-block">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}