import React, { Component } from 'react';

class StopWatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(this.calculateTime, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.stop === this.props.stop)
            return false;

        if (this.props.stop)
            clearInterval(this.interval);
        else {
            this.calculateTime();
            this.interval = setInterval(this.calculateTime, 1000);
        }
    }


    passCurrentTimeToParent = () => {
        const seconds = this.state.seconds > 0 ? this.state.seconds + 's' : '';
        const minutes = this.state.minutes > 0 ? this.state.minutes + 'm' : '';
        const hours = this.state.hours > 0 ? this.state.hours + 'h' : '';

        const time = `${hours} ${minutes} ${seconds}`.trim();

        this.props.currentTime(time);
    }

    calculateTime = () => {

        if (this.state.seconds === 60) {
            this.setState((state, props) => { 
                return { 
                    seconds: 0, 
                    minutes: state.minutes + 1 
                } 
            }, () => {
                if (this.state.minutes === 60) {
                    this.setState((state, props) => {
                        return {
                            minutes: 0,
                            hours: state.hours + 1
                        }
                    }, () => {
                        this.passCurrentTimeToParent();
                    });
                }

                this.passCurrentTimeToParent();
            });
        } else {
            this.setState((state, props) => {
                return {
                    seconds: state.seconds + 1
                }
            }, () => {
                this.passCurrentTimeToParent();
            });
        }

        
    }

    render() {
        return (
            <h3>
                {(this.state.hours < 10 ? '0' : '') + this.state.hours}:
                {(this.state.minutes < 10 ? '0' : '') + this.state.minutes}:
                {(this.state.seconds < 10 ? '0' : '') + this.state.seconds}
            </h3>
        );
    }
}

export default StopWatch;