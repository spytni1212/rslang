const SET_WORDS = 'SET_WORDS'
const SET_TRANSLATIONS = 'SET_TRANSLATIONS'
const SET_WORD_TO_CHECK = 'SET_WORD_TO_CHECK'
const SET_CORRECT_TRANSLATION = 'SET_CORRECT_TRANSLATION'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP'

let initialState = {
    words: [], 
    translations:[],
    wordToCheck: '',
    correctTranslation:'',
    currentGroup: 0,
    currentPage: 0,
}

const savannahReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WORDS: {
            return {...state, words: action.words}
        }
        case SET_TRANSLATIONS: {
            return {...state, translations: action.translations}
        }
        case SET_WORD_TO_CHECK: {
            return {...state, wordToCheck: action.wordToCheck}
        }
        case SET_CORRECT_TRANSLATION: {
            return {...state, correctTranslation: action.correctTranslation}
        }
        case SET_CURRENT_GROUP: {
            return { ...state, currentGroup: action.currentGroup }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentGroup: action.currentGroup }
        }
        default:
            return state
    }
}

export const setWords = (words) => ({ type: SET_WORDS, words })
export const setTranslations = (translations) => ({ type: SET_TRANSLATIONS, translations })
export const setWordToCheck = (wordToCheck) => ({ type: SET_WORD_TO_CHECK, wordToCheck })
export const setCorrectTranslation = (correctTranslation) => ({ type: SET_CORRECT_TRANSLATION, correctTranslation })
export const setCurrentGroup = (currentGroup) => ({ type: SET_CURRENT_GROUP, currentGroup })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })

export default savannahReducer;