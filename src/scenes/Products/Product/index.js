import React, { Component } from "react";
import { FaShoppingBag } from 'react-icons/fa';
import Button from "@material-ui/core/Button/Button";
import { Container, Row, Col } from "react-grid-system";
import ImageZoom from "../../../components/ImageZoom";
import InputNumbers from "../../../components/Form/components/InputNumber";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FaBolt } from "react-icons/fa";

import "./style.css";
import Gallery from "./components/Gallery";
import CommentForm from "./components/CommentForm";
import CommentList from "./components/CommentList";
import RelatedProducts from "../../../components/RelatedProducts";
import Stars from "../../../components/Stars";

export default class Product extends Component {


    render() {
        return (
            <div className="page-product">
                {this.topbar()}
                <section className="section-product">
                    <Container fluid className="container-fluid">
                        <Row className="row-sm">
                            <Col lg={4}>
                                <Gallery>
                                    <ImageZoom src={"http://localhost:3001/static/media/thumb-1.6bbc17ed.jpg"} />
                                    <ImageZoom src={"http://localhost:3001/static/media/thumb-1.6bbc17ed.jpg"} />
                                    <ImageZoom src={"http://localhost:3001/static/media/thumb-1.6bbc17ed.jpg"} />
                                </Gallery>
                            </Col>
                            <Col>
                                <div className="product-details" style={{ height: 495 }}>
                                    <div className="details">
                                        <h1 className="title">مداد رنگی 24 رنگ کنکو</h1>
                                        <ul>
                                            <li>
                                                <p className="subtitle">
                                                    <span>تولید کننده: </span>
                                                    <span className="text-primary">کنکو</span>
                                                </p>
                                            </li>
                                            <li>
                                                <p className="subtitle">
                                                    <span>دسته بندی: </span>
                                                    <span className="text-primary">نوشت افزار</span>
                                                </p>
                                            </li>
                                        </ul>
                                        <div className="floating-item floating-item-1 floating-item-stars">
                                            <Stars stars={4} />
                                            <span className="text">از 150 رای</span>
                                        </div>
                                        {/*<div className="floating-item floating-item-1 floating-item-discount">*/}
                                        {/*<span className="font-num">10 درصد تخفیف</span>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="attribute">
                                        <div className="attribute-item">
                                            <span className="attribute-label">انتخاب رنگ:</span>
                                            <ul className="product-colors">
                                                <li className="active">
                                                    <span className="color-value" />
                                                    <span className="color-label">قرمز</span>
                                                </li>
                                                <li>
                                                    <span className="color-value" />
                                                    <span className="color-label">صورتی</span>
                                                </li>
                                                <li>
                                                    <span className="color-value" />
                                                    <span className="color-label">جیگری</span>
                                                </li>
                                                <li>
                                                    <span className="color-value" />
                                                    <span className="color-label">نارنجی</span>
                                                </li>
                                                <li>
                                                    <span className="color-value" />
                                                    <span className="color-label">جیگری</span>
                                                </li>
                                                <li>
                                                    <span className="color-value" />
                                                    <span className="color-label">نارنجی</span>
                                                </li>
                                                <li>
                                                    <span className="color-value" />
                                                    <span className="color-label">یشمی</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="attribute-item">
                                            <span className="attribute-label">قیمت واحد:</span>
                                            <div className="product-price product-price-old">
                                                <span className="price-amount">15,000</span>
                                                <span className="price-currency"> تومان </span>
                                            </div>
                                            <div className="product-price">
                                                <span className="price-amount">12,000</span>
                                                <span className="price-currency"> تومان </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ paddingTop: 9 }}>
                                        <Button variant="contained" color="primary" className="button-lg button-primary button-icon-base">
                                            <div className="icon">
                                                <FaShoppingBag />
                                            </div>
                                            <span className="title">افزودن به سبد خرید</span>
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {this.productTabs()}
                <RelatedProducts rtl={false} />
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

    breadcrumb = () => {
        return (
            <div className="product-breadcrumb">

            </div>
        )
    }

    productTabs = () => {
        return (
            <section>
                <Container fluid className="container-fluid">
                    <Tabs className="product-tab">
                        <TabList className="product-tab-list">
                            <Tab selectedClassName="active">
                                <Button className="button-tab-link">
                                    مشخصات کالا
                                </Button>
                            </Tab>
                            <Tab selectedClassName="active">
                                <Button className="button-tab-link">
                                    توضیحات کالا
                                </Button>
                            </Tab>
                            <Tab selectedClassName="active">
                                <Button className="button-tab-link">
                                    دیدگاه کاربران
                                </Button>
                            </Tab>
                        </TabList>
                        <TabPanel selectedClassName="active">
                            <div className="product-tab-panel-table">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="a-right specname">
                                                جنس بدنه
                                            </td>
                                            <td className="a-left specvalue">
                                                پلاستیک
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                رنگ نوشتاری
                                            </td>
                                            <td className="a-left specvalue">
                                                چند رنگ
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                سطح مقطع
                                            </td>
                                            <td className="a-left specvalue">
                                                دایره
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                ضخامت نوک
                                            </td>
                                            <td className="a-left specvalue">
                                                0.7mm
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                روش استفاده
                                            </td>
                                            <td className="a-left specvalue">
                                                مقاوم در برابر آب , مناسب عکاسی , مناسب عکاسی سلفی , مناسب بازی , مجهز به حس‌گر تشخیص چهره
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                سایر ویژگی‌ها
                                            </td>
                                            <td className="a-left specvalue">
                                                قابلیت حذف صدا‌های مزاحم هنگام مکالمه با استفاده از میکروفون دوم. قابلیت حذف صدا‌های مزاحم هنگام مکالمه با استفاده از میکروفون دوم
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                وزن
                                            </td>
                                            <td className="a-left specvalue">
                                                7 گرم
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                طول
                                            </td>
                                            <td className="a-left specvalue">
                                                14 سانتیمتر
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                عرض
                                            </td>
                                            <td className="a-left specvalue">
                                                2 سانتیمتر
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="a-right specname">
                                                ارتفاع
                                            </td>
                                            <td className="a-left specvalue">
                                                2 سانتیمتر
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                        <TabPanel selectedClassName="active">
                            <div className="product-tab-panel">
                                <h4 style={{ paddingTop: 15 }}>نقد و بررسی اجمالی</h4>
                                <p>
                                    برند صدف دست به طراحی خودکاری خاص زده است. خودکار حاضر دارای نوک ژله‌ای بوده و بسیار نرم و روان روی کاغذ حرکت می‌کند و از طریق نوک 0.7 میلی‌متری خود خطی بدون لک و صاف به همراه جریان دائمی برای شما فراهم می‌سازد. این خودکار به خاطر وزن سبکش در نوشتن‌های طولانی مدت انگشتان شما را خسته نمی‌کند. همچنین بدنه این خوکار از پلاستیکی نرم تشکیل شده که از عرق کردن دست شما جلوگیری می‌کند. این محصول در 3 رنگ آبی، مشکی و قرمز تولید شده است.
                                    <br />
                                    خودکار و روان نویس جزء وسایلی است که به صورت روزمره به منظور ثبت موضوعات و یادداشت مسائل از آنها استفاده می‌شود. خودکار پنتر سری M&G مدل AGP12379 از طریق نوک 0.7 میلی‌متری خود خطی صاف و بدون لک به همراه جریان دائمی  برای شما فراهم می‌کند. بدنه این خودکار دارای یک پلاستیک نرم و ژله ای بوده که دست شما را اذیت نکرده و در نوشتن‌های طولانی مدت انگشتان‌تان را خسته نمی کند. از دیگر ویژگی‌های قابل توجه این خودکار می‌توان به وزن سبک آن اشاره کرد. این خودکار با داشتن گیره در قسمت بالای خود امکان حمل آن را آسان کرده است. کمپانی پنتر این خودکار ژله‌ای را در رنگ‌های متنوع و شاد طراحی و تولید کرده‌است.
                                </p>
                                <h4>ویژگی های محصول:</h4>
                                <ul>
                                    <li>نوک‌ مقاوم ‌از‌ جنس ‌نیکل‌ سیلور‌‌</li>
                                    <li>بدون‌ جوهر‌ ریزی ‌و ‌ایجاد ‌لکه ‌روی‌ کاغذ</li>
                                    <li>استفاده ‌از‌ مواد ‌درجه ‌یک‌ و‌ غیر‌ بازیافتی</li>
                                    <li>دارای گریپ جهت راحتی دست در زمان نوشتاری طولانی</li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel selectedClassName="active">
                            <div className="product-tab-panel">
                                <Row>
                                    <Col xl={6}>
                                        <h4 style={{ paddingTop: 15, marginBottom: 45 }}>دیدگاه خود را درباره این محصول بنویسید.</h4>
                                        <CommentForm />
                                    </Col>
                                    <Col xl={6}>
                                        <h4 style={{ paddingTop: 15, marginBottom: 45 }}>دیدگاه کاربران درباره این محصول (3 دیدگاه)</h4>
                                        <CommentList />
                                    </Col>
                                </Row>
                            </div>
                        </TabPanel>
                    </Tabs>
                </Container>
            </section>
        )
    }

}
