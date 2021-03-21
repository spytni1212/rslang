let SET_WORDS = 'SET_WORDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    words: [],
    totalPages: 30,
    currentPage: 1,

}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORDS: {
            return {...state, words: action.words}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        default:
            return state
    }
}

export const setWords = (words) => ({ type: SET_WORDS, words })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export default bookReducer;