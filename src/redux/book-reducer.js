let SET_WORDS = 'SET_WORDS'

let initialState = {
    words: [],
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORDS: {
            return {...state, words: action.words}
        }
        default:
            return state
    }
}

export const setWords = (words) => ({ type: SET_WORDS, words })

export default bookReducer;