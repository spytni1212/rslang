const SET_START_GAME = 'SET_START_GAME'

let initialState = {
    start: false,
}

const authorGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_GAME:
            return { ...state, start: action.start }
        default:
            return state;
    }
}

export const setStartGame = (boolean) => ({ type: SET_START_GAME, start: boolean })


export default authorGameReducer;