import { connect } from 'react-redux';
import { addSetupInfo, clearSetupInfo } from '../actions';
import MainPage from '../components/MainPage';


const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        onSetup: info => {
            dispatch(addSetupInfo(info));
        },

        clearSetupInfo: () => {
            dispatch(clearSetupInfo());
        }
    }
}

const VisibleMainPage = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default VisibleMainPage;