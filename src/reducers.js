import { combineReducers } from 'redux';

import { 
    ADD_PROBLEM,
    ADD_RIGHTANS,
    ADD_SETUP_INFO,
    ADD_TIMER,
    CLEAR_PROBLEMS,
    CLEAR_SETUP_INFO
} from './actions';

function info(state = {}, action) {
    switch (action.type) {
        case ADD_SETUP_INFO:
            return action.info;
        case CLEAR_SETUP_INFO:
            return {};
        default:
            return state;
    }
}

function problems(state = [], action) {
    switch (action.type) {
        case ADD_PROBLEM:
            return [
                ...state,
                action.problem
            ];
        case CLEAR_PROBLEMS:
            return [];
        default:
            return state;
    }
}

function rightAns(state = 0, action) {
    switch (action.type) {
        case ADD_RIGHTANS:
            return action.rightAns;
        default:
            return state;
    }
}

function timer(state = '0s', action) {
    switch (action.type) {
        case ADD_TIMER:
            return action.time;
        default:
            return state;
    }
}


const arthPracs = combineReducers({
    info,
    problems,
    rightAns,
    timer
});

export default arthPracs;