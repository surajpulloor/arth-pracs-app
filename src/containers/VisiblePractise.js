import { connect } from 'react-redux';
import { addTimer, addRightAns, clearProblems } from '../actions';
import Practise from '../components/Practise';

const mapStateToProps = state => {
    return {
        setupInfo: state.info
    }
}

const mapDispatchToProps = dispatch => {
    return {

        addRightAns: rightAns => {
            dispatch(addRightAns(rightAns));
        },

        addTimer: time => {
            dispatch(addTimer(time));
        },

        clearProblems: () => {
            dispatch(clearProblems());
        }
    }
}

const VisiblePractise = connect(mapStateToProps, mapDispatchToProps)(Practise);

export default VisiblePractise;