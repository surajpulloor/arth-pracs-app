import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/MainPage.css';


class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                num1Range: {
                    from: '',
                    to: '',
                },
                num2Range: {
                    from: '',
                    to: '',
                },
                op: '',
            },

            sameAsNum1Range: false,
            enableCheckbox: false
            
        };
    }

    componentDidMount() {
        this.props.clearSetupInfo();
    }

    onSubmit = (e) => {
        // call props.onStart
        this.props.onSetup(this.state.data);

        e.preventDefault();

        this.props.history.push('/practise');
    }

    getChoiceValue = (e) => {
        this.setState(prevState => ({
             data: {
                 ...prevState.data,
                 op: e.target.value 
             }
        }));

        e.persist();
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
                                        placeholder="From" value={this.state.data.num1Range.from} 
                                        id="num1From" onChange={ 
                                            e => {
                                                
                                                this.setState(prevState => { 
                                                    const num1Range = Object.assign({}, prevState.data.num1Range);
                                                    const v = parseInt(e.target.value);
                                                    num1Range.from = v ? v : "";

                                                    const num2Range = Object.assign({}, prevState.data.num2Range);
                                                    if (prevState.sameAsNum1Range)
                                                        num2Range.from = num1Range.from;

                                                    return {
                                                        data: {
                                                            ...prevState.data,
                                                            num1Range,
                                                            num2Range
                                                        },
                                                        sameAsNum1Range: v || prevState.data.num1Range.to !== '' ? prevState.sameAsNum1Range : false,
                                                        enableCheckbox: v || prevState.data.num1Range.to !== '' ? true : false
                                                    };
                                                });

                                                e.persist();
                                            }
                                        }
                                        className="form-control" 
                                        autoFocus
                                />
                            </div>

                            <div className="col-md-3">
                                <input type="number" min="1" max="10000" 
                                        placeholder="To" value={this.state.data.num1Range.to} 
                                        id="num1To" onChange={ 
                                            e => {
                                                
                                                this.setState(prevState => { 

                                                    const v = parseInt(e.target.value);

                                                    const to = v ? v : '';


                                                    return {
                                                        data: {
                                                            ...prevState.data,
                                                            num1Range: {
                                                                ...prevState.data.num1Range,
                                                                to
                                                            },
                                                            num2Range: {
                                                                ...prevState.data.num2Range,
                                                                to: prevState.sameAsNum1Range ? to : prevState.data.num2Range.to
                                                            }
                                                        },
                                                        sameAsNum1Range: v || prevState.data.num1Range.from !== '' ? prevState.sameAsNum1Range : false,
                                                        enableCheckbox: v || prevState.data.num1Range.from !== '' ? true : false
                                                    }
                                                    
                                                    
                                                });

                                                e.persist();
                                            }
                                        }
                                        className="form-control" 
                                />
                            </div>
                        
                        </div>
                        
                    </div>

                    <div className="form-group">

                        <div className="num2RangeLabel">
                            <span className="label">Num2 Range</span>
                            
                            <span className="leftParen">
                            (
                            </span>

                            <div className="custom-control custom-checkbox sameRangeCheckbox" style={{ color: this.state.enableCheckbox ? 'black' : 'grey'}}>
                                <input 
                                    type="checkbox" 
                                    className="custom-control-input" 
                                    id="toNum1Range"
                                    disabled={!this.state.enableCheckbox}
                                    checked={this.state.sameAsNum1Range}
                                    onClick={ 
                                        e => {
                                            e.target.checked 

                                            ? this.setState(prevState => ({
                                                data: {
                                                    ...prevState.data,
                                                    num2Range: {
                                                        to: prevState.data.num1Range.to,
                                                        from: prevState.data.num1Range.from
                                                    }
                                                },
                                                sameAsNum1Range: true
                                            }))
                                            :
                                            this.setState(prevState => ({
                                                data: {
                                                    ...prevState.data,
                                                    num2Range: {
                                                        to: "",
                                                        from: ""
                                                    }
                                                },
                                                sameAsNum1Range: false
                                                
                                            }))

                                        }
                                    } 
                                />
                                <label className="custom-control-label" htmlFor="toNum1Range">Same as Num1 range</label>
                            </div>

                            <span className="rightParen">
                            )
                            </span>
                        </div>
                        

                        <div className="row">
                            <div className="col-md-3">
                                <input type="number" min="1" max="10000" 
                                        placeholder="From" value={this.state.data.num2Range.from} 
                                        id="num2From" onChange={ 
                                            e => {
                                                
                                                this.setState(prevState => { 
                                                    const num2Range = Object.assign({}, this.state.data.num2Range);
                                                    const v = parseInt(e.target.value);
                                                    num2Range.from = v ? v : '';

                                                    return {
                                                        data: {
                                                            ...prevState.data,
                                                            num2Range
                                                        }
                                                    };
                                                });

                                                e.persist();
                                            }
                                        }
                                        className="form-control" 
                                />
                            </div>

                            <div className="col-md-3">
                                <input type="number" min="1" max="10000" 
                                        placeholder="To" value={this.state.data.num2Range.to} 
                                        id="num2To" onChange={ 
                                            e => {
                                                
                                                this.setState(prevState => { 

                                                    const v = parseInt(e.target.value);

                                                    return {
                                                        data: {
                                                            ...prevState.data,
                                                            num2Range: {
                                                                ...prevState.data.num2Range,
                                                                to: v ? v : ''
                                                            }
                                                        }
                                                    }
                                                    
                                                    
                                                });

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
                            value="+" checked={ this.state.data.op === '+' }
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
                            value="-" checked={ this.state.data.op === '-' }
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
                            value="*" checked={ this.state.data.op === '*' }
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
                            value="/" checked={ this.state.data.op === '/' }
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