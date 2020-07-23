import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import VisibleProblem from '../containers/VisibleProblem';
import StopWatch from './Stopwatch';

class Practise extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num1Len: 0,
            num2Len: 0,
            op: '',

            num1: 0,
            num2: 0,
            id: 0,

            stopStopWatch: false,
            stopProblemTimer: false,

            solvedTime: '',
            totalRightAns: 0,
        };
    }

    componentDidMount() {
        
        this.props.clearProblems();

        this.setState((state, props) => {
            return {
                num1Len: props.setupInfo.num1Len,
                num2Len: props.setupInfo.num2Len,
                op: props.setupInfo.op
            }
        }, () => {
            this.genProblems();
        });
    }

    genProblems = () => {
        let num1 = 0;
        let num2 = 0;


        for (let i = 1; i <= this.state.num1Len; i++) {
            num1 *= 10;
            num1 += Math.floor(Math.random() * (9 - 1)) + 1;
        }

        for (let i = 1; i <= this.state.num2Len; i++) {
            num2 *= 10;
            num2 += Math.floor(Math.random() * (9 - 1)) + 1;
        }
        

        this.setState((state, props) => {
            return {
                num1,
                num2,
                id: state.id + 1,
            }
        });

    }

    updateStore = (rightAns) => {
        // push into the store
        this.setState((state, props) => {

            if (rightAns) {
                return {
                    totalRightAns: state.totalRightAns + 1
                };
            }

        });

        this.genProblems();
    }

    stop = () => {

        this.setState({ stopStopWatch: true, stopProblemTimer: true });

        if (window.confirm("Do you want to stop?")) {
            // push rightAns and solvedTime
            this.props.addRightAns(this.state.totalRightAns);
            this.props.addTimer(this.state.solvedTime);
            
            this.props.history.push('/summary');
        } else {
            this.setState({ stopStopWatch: false, stopProblemTimer: false });
        }
    }

    render() {
        return (
            <div>
                {
                    (this.props.setupInfo.num1Len && this.props.setupInfo.num2Len && this.props.setupInfo.op) !== undefined
                    ?
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Practise problems</h1>
                            </div>

                            <div className="col-md-6">
                                <StopWatch stop={this.state.stopStopWatch} currentTime={(time) => this.setState({solvedTime: time})} />
                            </div>
                        </div>
                        <VisibleProblem num1={this.state.num1} num2={this.state.num2}
                                op={this.state.op} id={this.state.id} 
                                showResult={false} updateResult={this.updateStore}
                                stopTimer={this.state.stopProblemTimer} />

                        <button className="btn btn-primary" onClick={this.stop}>Stop</button>
                    </div>
                    :
                    <div> 
                        <h1>Sorry, the app isn't set properly.</h1>
                        <small>
                            What's the 1<sup>st</sup> and 2<sup>nd</sup> number's length.
                            <div>
                                What's the operator?
                            </div>
                        </small>
                    </div>
                }
                
            </div>
        );
    }


}

export default withRouter(Practise);