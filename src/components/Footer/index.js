import React, {Component} from "react";
import {Container, Row, Col} from "react-grid-system";
import "./style.css";

export default class Footer extends Component {
    render() {
        return (
            <div className="site-footer">
                <Container fluid className="container-fluid">
                    <Row>
                        <Col>
                            <p className="copyright">‏© 1396 کلیه حقوق این سامانه محفوظ و متعلق به شرکت کنکو کانادا می باشد.</p>
                        </Col>
                        <Col>
                            <ul className="social-links">
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}