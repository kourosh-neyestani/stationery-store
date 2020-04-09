import React from "react";
import { Slider, Rail, Handles, Tracks } from 'react-compound-slider'
import { SliderRail, Handle, Track } from './component'
import {Col, Row} from "react-grid-system";
import Button from "@material-ui/core/Button/Button"; // example render components - source below

const sliderStyle = {
    position: 'relative',
    width: '100%',
}

const defaultValues = [0, 100]

export default class SliderTwoPoint extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            domain: [0, 100],
            values: defaultValues.slice(),
            update: defaultValues.slice(),
            reversed: false,
        }
    }

    onUpdate = update => {
        this.setState({ update })
    }

    onChange = values => {
        this.setState({ values })
    }

    render() {
        const {
            state: { domain, values, update, reversed },
        } = this

        return (
            <div>
                <div className="products-widget-price-slider">
                    <Slider
                        mode={1}
                        step={5}
                        domain={domain}
                        reversed={reversed}
                        rootStyle={sliderStyle}
                        onUpdate={this.onUpdate}
                        onChange={this.onChange}
                        values={values}
                    >
                        <Rail>
                            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
                        </Rail>
                        <Handles>
                            {({ handles, getHandleProps }) => (
                                <div className="slider-handles">
                                    {handles.map(handle => (
                                        <Handle
                                            key={handle.id}
                                            handle={handle}
                                            domain={domain}
                                            getHandleProps={getHandleProps}
                                        />
                                    ))}
                                </div>
                            )}
                        </Handles>
                        <Tracks left={false} right={false}>
                            {({ tracks, getTrackProps }) => (
                                <div className="slider-tracks">
                                    {tracks.map(({ id, source, target }) => (
                                        <Track
                                            key={id}
                                            source={source}
                                            target={target}
                                            getTrackProps={getTrackProps}
                                        />
                                    ))}
                                </div>
                            )}
                        </Tracks>
                    </Slider>
                </div>
                <div className="products-widget-price-inner">
                    <Row className="row-0">
                        <Col>
                            <div className="products-widget-price-box line">
                                <span className="from">تا</span>
                                <span className="value">{update[1]}</span>
                                <span className="type">تومان</span>
                            </div>
                        </Col>
                        <Col>
                            <div className="products-widget-price-box">
                                <span className="to">از</span>
                                <span className="value">{update[0]}</span>
                                <span className="type">تومان</span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Button variant="contained" color="primary" className="button-price">
                    <span className="title">اعمال تغیرات</span>
                </Button>
            </div>
        )
    }
}