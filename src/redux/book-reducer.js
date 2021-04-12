const SET_WORDS = 'SET_WORDS'
const SET_USER_WORDS = 'SET_USER_WORDS'
const SET_DELETE_WORDS = 'SET_DELETE_WORDS'
const DELETE_WORD_IN_USER_WORDS = 'DELETE_WORD_IN_USER_WORDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const SET_DIFFICULT_WORDS = 'SET_DIFFICULT_WORDS';
const SET_LEARNING_WORDS = 'SET_LEARNING_WORDS';
const REMOVE_DIFFICULT_WORD = 'REMOVE_DIFFICULT_WORD';
const REMOVE_DELETE_WORD = 'REMOVE_DELETE_WORD';

let initialState = {
    words: [],
    userWords:[],
    deleteWords: [],
    difficultWords: [],
    learningWords: [],
    difficultColor: ['#00FF00	', '#0000FF', '#008000', '#FF00FF', '#FFA500', '#FF0000'],
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
        case SET_DIFFICULT_WORDS: {
            return {...state, difficultWords: action.difficultWords}
        }
        case SET_LEARNING_WORDS: {
            return {...state, learningWords: action.learningWords}
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
        case REMOVE_DIFFICULT_WORD: {            
            return {...state, difficultWords: state.difficultWords.filter(word=> word._id !== action.wordId)}
        }
        case REMOVE_DELETE_WORD: {            
            return {...state, deleteWords: state.deleteWords.filter(word=> word._id !== action.wordId)}
        }
        
        default:
            return state
    }
}

export const setWords = (words) => ({ type: SET_WORDS, words })
export const setUserWords = (userWords) => ({ type: SET_USER_WORDS, userWords })
export const setDeleteWords = (deleteWords) => ({ type: SET_DELETE_WORDS, deleteWords })
export const setDifficultWords = (difficultWords) => ({ type: SET_DIFFICULT_WORDS, difficultWords })
export const setLearningWords = (learningWords) => ({ type: SET_LEARNING_WORDS, learningWords })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setCurrentGroup = (currentGroup) => ({ type: SET_CURRENT_GROUP, currentGroup })
export const setTotalUserCount = (totalUserCount) => ({ type: SET_TOTAL_USER_COUNT, totalUserCount })
export const deleteWordInUserWords = (wordId) => ({ type: DELETE_WORD_IN_USER_WORDS, wordId })
export const removeDifficultWord = (wordId) => ({ type: REMOVE_DIFFICULT_WORD, wordId })
export const removeDeleteWord = (wordId) => ({ type: REMOVE_DELETE_WORD, wordId })



export default bookReducer;