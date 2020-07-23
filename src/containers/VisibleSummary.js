import { connect } from 'react-redux';
import Summary from '../components/Summary';

const mapStateToProps = state => {
    return {
        problems: state.problems,
        timeTaken: state.timer,
        rightAns: state.rightAns
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

const VisibleSummary = connect(mapStateToProps, mapDispatchToProps)(Summary);

export default VisibleSummary;