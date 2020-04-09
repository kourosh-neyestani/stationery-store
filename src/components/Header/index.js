import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import {Container, Row, Col} from "react-grid-system";
import {FaShoppingBag} from 'react-icons/fa';
import "./style.css";

export default class Header extends Component {
    render() {
        return (
            <div className="site-header">
                <Container fluid className="container-fluid">
                    <Row>
                        <Col>
                            <ul className="header-menu">
                                <li>
                                    <span className="text"></span>
                                </li>
                                <li>
                                    <span className="text"></span>
                                </li>
                                <li>
                                    <span className="text"></span>
                                </li>
                                <li>
                                    <span className="text"></span>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <div className="header-cart">
                                <Button variant="contained" color="primary" className="button-cart">
                                    <div className="icon">
                                        <FaShoppingBag />
                                    </div>
                                    <span className="title">سبد خرید</span>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}