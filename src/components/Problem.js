import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import '../styles/Problem.css';

class Problem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timeTaken: 1,
            res: 0
        };
    }

    setTimer = () => {
        if (!this.props.showResult) {

            this.interval = setInterval(() => this.setState((state, props) => { 
                return { timeTaken: state.timeTaken + 1 } 
            }), 1000);

        }
        
        this.computeResult();

    }

    computeResult = () => {
        let res;

        switch (this.props.op) {
            case '+':
                res = this.props.num1 + this.props.num2;
                break;
            case '-':
                res = this.props.num1 - this.props.num2;
                break;
            case '*':
                res = this.props.num1 * this.props.num2;
                break;
            case '/':
                res = this.props.num1 / this.props.num2;
                break;
        }

        this.setState({ res });
    }

    componentDidMount() {
        this.setTimer();
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (
            this.props.num1 === nextProps.num1 && 
            this.props.num2 === nextProps.num2 &&
            this.props.stopTimer === nextProps.stopTimer
        )
            return false;

        if (this.interval && !this.props.stopTimer) {
            clearInterval(this.interval);
            this.setState({timeTaken: 1}, this.setTimer);
        }
        
        if (this.props.stopTimer) {
            clearInterval(this.interval);
        }

        return true;
    }

    componentWillUnmount() {
        if (this.interval)
            clearInterval(this.interval);
    }

    onEnter = (e) => {
        if (e.keyCode === 13) {

            if (e.target.value === '') {
                alert("Please enter a number!");
                return;
            }
            
            let timeTaken = `${this.state.timeTaken}s`;

            if (this.state.timeTaken >= 60) {
                let time = this.state.timeTaken / 60;

                let minutes = Math.floor(time);
                let seconds = Math.floor((time - minutes) * 100);

                timeTaken = `${minutes}m ${seconds}s`;

            }

            this.props.addProblem({
                num1: this.props.num1, 
                num2: this.props.num2,
                op: this.props.op,
                res: parseInt(e.target.value), 
                timeTaken,
            });
            
            this.props.updateResult(this.state.res === parseInt(e.target.value));

            e.target.value = "";
        }
    }

    render() {
        return (
            <div className="problem">
                <div className="row">
                    <div className="col-md-4">
                        <h3>{this.props.id}.</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-5 num1">
                        <h4>
                            {
                                this.props.num1.toString().length < this.props.num2.toString().length
                                ? this.props.num1.toString().padStart(this.props.num2.toString().length, '0')
                                : this.props.num1.toString()
                            }
                        </h4>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-5">
                        <h4>
                            <span>{this.props.op}</span>
                            <span>
                            {
                                this.props.num2.toString().length < this.props.num1.toString().length
                                ? this.props.num2.toString().padStart(this.props.num1.toString().length, '0')
                                : this.props.num2.toString()
                            } 
                            </span>
                               
                        </h4>
                        <hr />
                        
                        { 
                            this.props.showResult 
                            ?   <h4>
                                    <span>{ this.props.res }</span>
                                    { 
                                        this.props.res === this.state.res 
                                        ? <FontAwesomeIcon icon={faCheck} style={{ color: 'green', marginLeft: '4px' }} /> 
                                        : <FontAwesomeIcon icon={faTimes} style={{ color: 'red', marginLeft: '4px' }} />
                                    }
                                    
                                    { 
                                        this.props.res !== this.state.res
                                        ?
                                        <div style={{ display: 'inline-block', marginLeft: '8px' }}>
                                            <span>{ this.state.res }</span>
                                            <FontAwesomeIcon icon={faCheck} style={{ color: 'green', marginLeft: '4px' }} />
                                        </div> 
                                        :
                                        ''
                                        
                                    }
                                    <span className="float-right">{ this.props.timeTaken }</span>
                                </h4>
                            : <div>
                                <input type="number" placeholder="Please enter your Ans." className="form-control" onKeyDown={this.onEnter} autoFocus />
                            </div>
                        }

                        <hr />
                    </div>
                </div>

            </div>
        );
    }
}

export default Problem;