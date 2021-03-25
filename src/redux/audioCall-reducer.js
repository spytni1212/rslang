const SET_LEVEL = 'SET_LEVEL'
const SET_ADD_ARRAY_GAME = 'SET_CURRENT_PAGE';


let initialState = {
    levelGame: 1,
    arrOneGame: [{},{},{},{},{},{},{}],
    oneMove: {
        selectedWord: {},
    },
    
    // arrError: [],
    // arrTrue: []
}

const audioCallReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LEVEL: {
            return {...state, words: action.words}
        }
        default:
            return state
    }
}

export const setLevel = (level) => ({ type: SET_LEVEL, level })

export default audioCallReducer;