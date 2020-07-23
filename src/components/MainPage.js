import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            num1Len: 1,
            num2Len: 1,
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
                        <label htmlFor="num1Len">Num1 Length</label>
                        <input type="number" min="1" max="10" 
                                placeholder="Enter no. of digits" value={this.state.num1Len} 
                                id="num1Len" onChange={ e => this.setState({ num1Len: parseInt(e.target.value) })}
                                className="form-control" 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="num2Len">Num2 Length</label>
                        <input type="number" min="1" max="10" 
                                placeholder="Enter no. of digits" value={this.state.num2Len}
                                id="num2Len" onChange={ e => this.setState({ num2Len: parseInt(e.target.value) })} 
                                className="form-control"
                            required
                        />
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