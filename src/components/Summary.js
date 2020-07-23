import React from 'react';

import { Link } from 'react-router-dom';

import Problem from './Problem';

const Summary = (props) => (
    <div>
        {
            props.problems.length !== 0
            ?
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

                    <h1 className="navbar-brand" style={{ margin: '0'}}>Summary</h1>

                    <div className="collapse navbar-collapse">
                        <h5 className="float-right" style={{ margin: '0 0 0 60px'}}>Time Taken: {props.timeTaken}</h5>
                        <h5 className="float-right" style={{ margin: '0 0 0 60px'}}>Total Right Ans: {props.rightAns} / {props.problems.length}</h5>
                    </div>

                    <form className="form-inline">
                        
                        <Link className="btn btn-primary my-2 my-sm-0" to="/practise">Start Again</Link>
                        <Link className="btn btn-primary my-2 my-sm-0" style={{ marginLeft: '4px' }} to="/">Setup</Link>
                    </form>

                
                </nav>

                <div style={{ marginTop: '60px' }}>
                    {
                        props.problems.map((problem, index) =>  
                            <Problem num1={problem.num1} num2={problem.num2}
                                    op={problem.op} res={problem.res} timeTaken={problem.timeTaken}
                                    id={index + 1} showResult={true} />
                        )

                    }
                </div>
            </div>

            :
            <div> 
                <h1>Sorry, the app isn't set properly.</h1>
                <small>There aren't any problems.</small>
            </div>
        }
    </div>
)

export default Summary;