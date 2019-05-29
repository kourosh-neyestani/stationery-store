import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {BrowserRouter as Router, Route} from "react-router-dom";
// Components
// Scenes
import Home from './scenes/Home';


export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div className="site-wrapper">
                    <Route path="/" exact component={() => (
                        <ScrollAnimation animateIn="fadeIn" duration={1.26}>
                            <Home/>
                        </ScrollAnimation>
                    )}/>
                </div>
            </Router>
        )
    }
}

