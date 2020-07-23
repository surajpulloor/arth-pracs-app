export const ADD_SETUP_INFO = 'ADD_SETUP_INFO';
export const ADD_PROBLEM = 'ADD_PROBLEM';
export const ADD_RIGHTANS = 'ADD_RIGHTANS';
export const ADD_TIMER = 'ADD_TIMER';

export const CLEAR_SETUP_INFO = 'CLEAR_SETUP_INFO';
export const CLEAR_PROBLEMS = 'CLEAR_PROBLEMS';

export function addSetupInfo(info) {
    return {
        type: ADD_SETUP_INFO,
        info
    }
}

export function addProblem(problem) {
    return {
        type: ADD_PROBLEM,
        problem
    }
}

export function addRightAns(rightAns) {
    return {
        type: ADD_RIGHTANS,
        rightAns
    }
}

export function addTimer(time) {
    return {
        type: ADD_TIMER,
        time
    }
}

export function clearSetupInfo() {
    return { type: CLEAR_SETUP_INFO }
}

export function clearProblems() {
    return { type: CLEAR_PROBLEMS }
}