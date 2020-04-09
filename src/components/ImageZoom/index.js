import React, {Component} from "react";
import "./style.css";

const image = "https://dkstatics-public.digikala.com/digikala-products/1148045.jpg";

export default class ImageZoom extends Component {

    constructor(props) {
        super(props);

        this.state = {
            backgroundImage: `url(${image})`,
            backgroundPosition: '0% 0%'
        }

        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleMouseMove = e => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        this.setState({ backgroundPosition: `${x}% ${y}%` })
    }

    render() {
        const {src} = this.props;
        return (
            <div className="zoom-container">
                <div onMouseMove={this.handleMouseMove} style={this.state}>
                    <div className="zoom-container-image">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}