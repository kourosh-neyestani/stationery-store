import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {BrowserRouter as Router, Route} from "react-router-dom";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Scenes
import Home from './scenes/Home';
import Products from './scenes/Products';
import Product from './scenes/Products/Product';


export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div className="site-wrapper">
                    <Header type="fixed" ltr={false} lang="persian"/>

                    {/* Home */}

                    <Route path="/" exact component={() => (
                        <Home/>
                    )}/>

                    {/* Products */}

                    <Route path="/Products" exact component={() => (
                        <div className="site-content">
                            <Products/>
                        </div>
                    )}/>

                    {/* Single Product */}

                    <Route path="/Products/:id" exact component={() => (
                        <div className="site-content">
                            <Product/>
                        </div>
                    )}/>

                    <Footer ltr={false} lang="persian"/>
                </div>
            </Router>
        )
    }
}

