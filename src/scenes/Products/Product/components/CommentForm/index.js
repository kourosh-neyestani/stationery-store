import React, {Component} from "react";
import {Row, Col} from "react-grid-system";
import Button from '@material-ui/core/Button';
import {FaPaperPlane} from 'react-icons/fa';
import InputStars from "../../../../../components/Form/components/InputStars";
import "./style.css";

export default class CommentForm extends Component {
    render() {
        return (
            <div className="component-coment-form">
                <form>
                    <Row>
                        <Col>
                            <div className="form-div">
                                <input type="text" placeholder="عنوان نظر" autoFocus={true}/>
                            </div>
                        </Col>
                        <Col>
                            <InputStars />
                        </Col>
                    </Row>
                    <div className="form-div">
                        <textarea cols="30" rows="10" placeholder="دیدگاه خود را بنویسید ..." />
                    </div>
                    <div className="form-submit">
                        <Button variant="contained" color="secondary" className="button-md button-secondary">
                            ارسال دیدگاه
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}
