import React, {Component} from "react";
import {Row, Col} from "react-grid-system";
import Stars from "../../../../../components/Stars";
import "./style.css";

export default class CommentList extends Component{
    render() {
        return (
            <ul className="comments-list">
                <li>
                   <Row className="row-xs">
                       <Col lg={2}>
                           <div className="comment-avatar">
                               <img src={require("./images/avatar.jpg")}/>
                               <span className="name">کوروش نیستانی</span>
                           </div>
                       </Col>
                       <Col lg={10}>
                           <div className="comment-details">
                               <Stars stars={4} className="comment-stars" />
                               <span className="comment-date">1397/12/11</span>
                               <div className="comment-content">
                                    <p>عیب اول این خودکار کمی رنگ پس دادنه که لکه میکنه تو نوشتن. عیب دوم پایین خودکار بدنه کامل پلاستیکه که امکان شکستنش زیاد .</p>
                               </div>
                           </div>
                       </Col>
                   </Row>
                </li>
                <li>
                    <Row className="row-xs">
                        <Col lg={2}>
                            <div className="comment-avatar">
                                <img src={require("./images/avatar.jpg")}/>
                                <span className="name">آناهیتا پاسبان</span>
                            </div>
                        </Col>
                        <Col lg={10}>
                            <div className="comment-details">
                                <Stars stars={2} className="comment-stars" />
                                <span className="comment-date">1397/12/12</span>
                                <div className="comment-content">
                                    <p>این مدل در بین تمام مدل های کنکو از همه روان تره ولی قسمت انتهای خودکار در محل نوشتن پلاستیکیه و بر خلاف مدل های دیگه فلزی نیست. من که هر بار این خودکار رو استفاده کردم تا وسط جوهر رسیدم نوکش خورد شد.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </li>
                <li>
                    <Row className="row-xs">
                        <Col lg={2}>
                            <div className="comment-avatar">
                                <img src={require("./images/avatar.jpg")}/>
                                <span className="name">پریناز کاشانی</span>
                            </div>
                        </Col>
                        <Col lg={10}>
                            <div className="comment-details">
                                <Stars stars={1} className="comment-stars" />
                                <span className="comment-date">1397/12/14</span>
                                <div className="comment-content">
                                    <p>بسته بندیه خود شرکت کنکو کمی ضعیفه به قدری که وقتی به دستم رسید گوشه ی پایینی بسته بندی پاره شده بود و ترسیدم که نکنه ضربه خرده باشه و خودکار ها رو آسیب زده باشه.!!! از این مشکل که بگذریم باید بگم که تمامی رنگ ها سالم بودن و نوک خودکار ها دارای پلمپ بود.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </li>
            </ul>
        )
    }
}
