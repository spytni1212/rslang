const SET_START_GAME = 'SET_START_GAME'
const SET_ARR_WORDS = 'SET_ARR_WORDS'

let initialState = {
    start: false,
    arrWords: []
}

const authorGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_GAME:
            return { ...state, start: action.start }
        case SET_ARR_WORDS:
            return {...state, arrWords: action.arrWords}
        default:
            return state;
    }
}

export const setStartGame = (boolean) => ({ type: SET_START_GAME, start: boolean })
export const setArrWords = (arr) => ({type: SET_ARR_WORDS, arrWords: arr})


export default authorGameReducer;