import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num1Range: {
                from: "",
                to: "",
            },
            num2Range: {
                from: "",
                to: "",
            },
            op: '',
        };
    }

    componentDidMount() {
        this.props.clearSetupInfo();
    }

    onSubmit = (e) => {
        // call props.onStart
        this.props.onSetup(this.state);

        e.preventDefault();
        console.log(this.state);

        this.props.history.push('/practise');
    }

    getChoiceValue = (e) => {
        this.setState({ op: e.target.value });
    }

    render() {
        return (
           <div>
                <h1>Arthimetic Practise</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Num1 Range</label>
                        <div className="row">
                            <div className="col-md-3">
                                <input type="number" min="1" max="10000" 
                                        placeholder="From" value={this.state.num1Range.from} 
                                        id="num1From" onChange={ 
                                            e => {
                                                
                                                this.setState(prevState => { 
                                                    const num1Range = Object.assign({}, this.state.num1Range);
                                                    num1Range.from = parseInt(e.target.value);

                                                    return {num1Range};
                                                });

                                                e.persist();
                                            }
                                        }
                                        className="form-control" 
                                />
                            </div>

                            <div className="col-md-3">
                                <input type="number" min="1" max="10000" 
                                        placeholder="To" value={this.state.num1Range.to} 
                                        id="num1To" onChange={ 
                                            e => {
                                                
                                                this.setState(prevState => ({ 
                                                    num1Range: {
                                                        ...prevState.num1Range,
                                                        to: parseInt(e.target.value)
                                                    }
                                                }));

                                                e.persist();
                                            }
                                        }
                                        className="form-control" 
                                />
                            </div>
                        
                        </div>
                        
                    </div>

                    <div className="form-group">
                        <label>Num2 Range</label>
                        <div className="row">
                            <div className="col-md-3">
                                <input type="number" min="1" max="10000" 
                                        placeholder="From" value={this.state.num2Range.from} 
                                        id="num2From" onChange={ 
                                            e => {
                                                
                                                this.setState(prevState => { 
                                                    const num2Range = Object.assign({}, this.state.num2Range);
                                                    num2Range.from = parseInt(e.target.value);

                                                    return {num2Range};
                                                });

                                                e.persist();
                                            }
                                        }
                                        className="form-control" 
                                />
                            </div>

                            <div className="col-md-3">
                                <input type="number" min="1" max="10000" 
                                        placeholder="To" value={this.state.num2Range.to} 
                                        id="num2To" onChange={ 
                                            e => {
                                                
                                                this.setState(prevState => ({ 
                                                    num2Range: {
                                                        ...prevState.num2Range,
                                                        to: parseInt(e.target.value)
                                                    }
                                                }));

                                                e.persist();
                                            }
                                        }
                                        className="form-control" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" 
                            name="operator" id="add" 
                            value="+" checked={ this.state.op === '+' }
                            onChange={this.getChoiceValue} 
                            required
                        />
                        <label className="form-check-label" htmlFor="add">
                            +
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" 
                            name="operator" id="subtract" 
                            value="-" checked={ this.state.op === '-' }
                            onChange={this.getChoiceValue} 
                            required
                        />
                        <label className="form-check-label" htmlFor="subtract">
                            -
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" 
                            name="operator" id="multiply" 
                            value="*" checked={ this.state.op === '*' }
                            onChange={this.getChoiceValue} 
                            required
                        />
                        <label className="form-check-label" htmlFor="multiply">
                            *
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" 
                            name="operator" id="divide" 
                            value="/" checked={ this.state.op === '/' }
                            onChange={this.getChoiceValue} 
                            required
                        />
                        <label className="form-check-label" htmlFor="divide">
                            /
                        </label>
                    </div>

                    <button type="submit" className="btn btn-primary">Start</button>
                </form>
           </div>
        )
    }
}

export default withRouter(MainPage);