const SET_WORDS_INFO = 'SET_WORDS_INFO'
const SET_WORD_TO_CHECK = 'SET_WORD_TO_CHECK'
const SET_CORRECT_TRANSLATION = 'SET_CORRECT_TRANSLATION'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP'
const SET_CORRECT_WORDS = 'SET_CORRECT_WORDS'
const SET_WRONG_WORDS = 'SET_WRONG_WORDS'


let initialState = {
    wordsInfo: [],
    currentGroup: 0,
    currentPage: 0,
    correctWords: [],
    wrongWords: []
}

const savannahReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORDS_INFO: {
            return { ...state, wordsInfo: action.wordsInfo }
        }
        case SET_CURRENT_GROUP: {
            return { ...state, currentGroup: action.currentGroup }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentGroup: action.currentGroup }
        }
        case SET_CORRECT_WORDS: {
            return { ...state, correctWords: [...state.correctWords, action.correctWords] }
        }
        case SET_WRONG_WORDS: {
            return { ...state, wrongWords: [...state.wrongWords, action.wrongWords] }
        }
        default:
            return state
    }
}

export const setWordsInfo = (wordsInfo) => ({ type: SET_WORDS_INFO, wordsInfo })
export const setWordToCheck = (wordToCheck) => ({ type: SET_WORD_TO_CHECK, wordToCheck })
export const setCorrectTranslation = (correctTranslation) => ({ type: SET_CORRECT_TRANSLATION, correctTranslation })
export const setCurrentGroup = (currentGroup) => ({ type: SET_CURRENT_GROUP, currentGroup })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setCorrectWords = (correctWords) => ({ type: SET_CORRECT_WORDS, correctWords })
export const setWrongWords = (wrongWords) => ({ type: SET_WRONG_WORDS, wrongWords })

export default savannahReducer;