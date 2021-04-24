import React, { Component } from 'react';
import { convertIntoTime } from '../helper/convertTime';

class CountDownTimer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            sec: 0,
            timeInSeconds: 0
        };

        this.interval = null;
    }

    componentDidMount() {
        this.setState((state, props) => {
            const time = convertIntoTime(props.startTime);
            return {
                min: time.min,
                sec: time.sec,
                timeInSeconds: props.startTime
            }
        }, () => {
            this.interval = setInterval(this.updateTime, 1000);
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    


    updateTime = () => {
        let min = this.state.min;
        let sec = this.state.sec;

        if (sec === 0) {
            min -= 1;
            sec = 59;
        } else {
            sec -= 1;
        }

        let timeFormat = "";
        if (min != 0) {
            timeFormat = `${min}m `;
        }

        if (sec != 0) {
            timeFormat += `${sec}s`;
        }


        this.setState((state, props) => {
            return {
                min: min,
                sec: sec,
                timeInSeconds: state.timeInSeconds - 1
            }
        }, () => {
            this.props.currentTime(this.state.timeInSeconds, timeFormat);
        });

    }


    render() {
        return (
            <h3>
                {(this.state.min < 10 ? '0' : '') + this.state.min}:
                {(this.state.sec < 10 ? '0' : '') + this.state.sec}
            </h3>
        );
    }
}

export default CountDownTimer;