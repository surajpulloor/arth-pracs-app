import { connect } from 'react-redux';
import { addProblem } from '../actions';
import Problem from '../components/Problem';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addProblem: problem => {
            dispatch(addProblem(problem))
        }
    }
}

const VisibleProblem = connect(mapStateToProps, mapDispatchToProps)(Problem);

export default VisibleProblem;