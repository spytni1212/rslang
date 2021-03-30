const SET_WORDS = 'SET_WORDS'
const SET_USER_WORDS = 'SET_USER_WORDS'
const SET_DELETE_WORDS = 'SET_DELETE_WORDS'
const DELETE_WORD_IN_USER_WORDS = 'DELETE_WORD_IN_USER_WORDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';

let initialState = {
    words: [],
    userWords:[],
    deleteWords: [],
    totalPages: 30,
    wordsPerPage: 20,
    totalUserCount: 0,
    currentPage: 1,
    totalGroup: 6,
    currentGroup: 1
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORDS: {
            return {...state, words: action.words}
        }
        case SET_USER_WORDS: {
            return {...state, userWords: action.userWords}
        }
        case SET_DELETE_WORDS: {
            return {...state, deleteWords: action.deleteWords}
        }
        case DELETE_WORD_IN_USER_WORDS: {
            
            return {...state, userWords: state.userWords.filter(word=> word._id !== action.wordId)}
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_CURRENT_GROUP: {
            return { ...state, currentGroup: action.currentGroup }
        }
        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalUserCount: action.totalUserCount }
        }
        default:
            return state
    }
}

export const setWords = (words) => ({ type: SET_WORDS, words })
export const setUserWords = (userWords) => ({ type: SET_USER_WORDS, userWords })
export const setDeleteWords = (deleteWords) => ({ type: SET_DELETE_WORDS, deleteWords })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setCurrentGroup = (currentGroup) => ({ type: SET_CURRENT_GROUP, currentGroup })
export const setTotalUserCount = (totalUserCount) => ({ type: SET_TOTAL_USER_COUNT, totalUserCount })
export const deleteWordInUserWords = (wordId) => ({ type: DELETE_WORD_IN_USER_WORDS, wordId })

export default bookReducer;