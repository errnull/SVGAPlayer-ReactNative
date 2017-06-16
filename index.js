'use strict'

import React, { Component, PropTypes } from 'react';
const { requireNativeComponent, Platform, } = require('react-native');

const NativeSVGAPlayer = requireNativeComponent('SVGAPlayer', null);

class SVGAPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    load(source) {
        this.setState({
            source
        });
    }

    startAnimation() {
        this.setState({
            currentState: "start",
        });
    }

    pauseAnimation() {
        this.setState({
            currentState: "pause",
        });
    }

    stopAnimation() {
        this.setState({
            currentState: "stop",
        });
    }

    stepToFrame(toFrame, andPlay) {
        this.setState({
            currentState: andPlay === true ? "play" : "pause",
            toFrame: -1,
        }, () => {
            this.setState({
                toFrame,
            });
        });
    }

    stepToPercentage(toPercentage, andPlay) {
        this.setState({
            currentState: andPlay === true ? "play" : "pause",
            toPercentage: -1,
        }, () => {
            this.setState({
                toPercentage,
            });
        });
    }

    render() {
        let eventListeners = {};
        if (Platform.OS === "android") {
            eventListeners.onChange = (event) => {
                const { action } = event.nativeEvent;
                if (action === "onFinished") {
                    if (typeof this.props.onFinished === "function") {
                        this.props.onFinished();
                    }
                }
                else if (action === "onFrame") {
                    if (typeof this.props.onFrame === "function") {
                        this.props.onFrame(event.nativeEvent.value);
                    }
                }
                else if (action === "onPercentage") {
                    if (typeof this.props.onPercentage === "function") {
                        this.props.onPercentage(event.nativeEvent.value);
                    }
                }
            }
        }
        else if (Platform.OS === "ios") {
            if (typeof this.props.onFrame === "function") {
                eventListeners.onFrame = (event) => {
                    console.log(event);
                    this.props.onFrame(event.nativeEvent.value);
                }
            }
            if (typeof this.props.onPercentage === "function") {
                eventListeners.onPercentage = (event) => {
                    console.log(event);
                    this.props.onPercentage(event.nativeEvent.value);
                }
            }
        }
        return <NativeSVGAPlayer {...this.props} {...this.state} {...eventListeners} />
    }

}

module.exports = SVGAPlayer;