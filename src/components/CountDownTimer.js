import React, { Component } from 'react';
import '../styles/CountDownTimer.css';

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
            const time = this.convertIntoTime(props.startTime);
            return {
                min: time.min,
                sec: time.sec,
                timeInSeconds: props.startTime
            }
        }, () => {
            this.updateTime();
            this.interval = setInterval(this.updateTime, 1000);
        });
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    

    convertIntoTime = (timeInSeconds) => {

        let minutes = 0;
        let seconds = 0;
    
        if (timeInSeconds > 60) {
            timeInSeconds /= 60;
    
            minutes = parseInt(timeInSeconds);
            seconds = timeInSeconds - minutes;
    
            if (seconds !== 0) {
                seconds *= 100;
                seconds = parseInt(seconds);
            }
    
    
        } else {
            seconds = timeInSeconds;
        }
    
        
    
        return {
            min: minutes,
            sec: seconds
        };
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

        if (min === 0 && sec === 0) {
            timeFormat = "This was a time bound. You used up all your time.";
        }

        if (min !== 0) {
            timeFormat = `${min}m `;
        }

        if (sec !== 0) {
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
                <span>You have left: </span>
                <span className={this.state.min < 5 ? (this.state.min === 0 ? "countdown-red" : "countdown-orange") : ""}>
                    {this.state.min !== 0 ? ((this.state.min < 10 ? '0' : '') + this.state.min + ":") : ""}
                    {(this.state.sec < 10 && this.state.min !== 0 ? '0' : '') + this.state.sec + (this.state.min === 0 ? "s" : "")}
                </span>
                
            </h3>
        );
    }
}

export default CountDownTimer;