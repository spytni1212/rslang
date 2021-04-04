const SPRINT_GAME_START = 'SPRINT_GAME_START';
const SPRINT_GAME_END = 'SPRINT_GAME_END';
const WORDS_INFO = 'WORDS_INFO';
const RESET_WORDS_INFO = 'RESET_WORDS_INFO';
const RESULT_INFO = 'RESULT_INFO';
const RESET_RESULT_INFO = 'RESET_RESULT_INFO';

let initialState = {
    sprintGameStart: false,
    sprintGameEnd: false,
    wordsInfo: {},
    resultInfo: [],
}

const sprintReducer = (state = initialState, action) => {
    switch (action.type) {
        case SPRINT_GAME_START:
            return {...state, sprintGameStart: !state.sprintGameStart}
        case SPRINT_GAME_END:
            return {...state, sprintGameEnd: !state.sprintGameEnd}
        case WORDS_INFO:
            return {...state, wordsInfo: action.wordsInfo}
        case RESET_WORDS_INFO:
            return {...state, wordsInfo: {}}
        case RESULT_INFO:
            return {...state, resultInfo: [...state.resultInfo, action.resultInfo]}
        case RESET_RESULT_INFO:
            return {...state, resultInfo: []}
        default:
            return state
    }
}

export const setSprintGameStart = () => ({type: SPRINT_GAME_START});
export const setSprintGameEnd = () => ({type: SPRINT_GAME_END});
export const setWordsInfo = (wordsInfo) => ({type: WORDS_INFO, wordsInfo});
export const setResetWordsInfo = () => ({type: RESET_WORDS_INFO});
export const setResultInfo = (resultInfo) => ({type: RESULT_INFO, resultInfo});
export const setResetResultInfo = () => ({type: RESET_RESULT_INFO});

export default sprintReducer;
