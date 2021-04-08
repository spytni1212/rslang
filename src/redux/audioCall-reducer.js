const SET_CALL_ARR_WORDS = "SET_CALL_ARR_WORDS";
const SET_CALL_START_GAME = "SET_CALL_START_GAME";
const SET_CALL_INDEX_SELECT_WORD = "SET_CALL_INDEX_SELECT_WORD";
const SET_CALL_SELECT_WORD = "SET_CALL_SELECT_WORD";
const SET_CALL_LIST_CHOICE_WORDS = "SET_CALL_LIST_CHOICE_WORDS";
const SET_ANSWER = "SET_ANSWER"
const SET_CALL_ADD_WRONG_WORD = "SET_CALL_ADD_WRONG_WORD";
const SET_CALL_ADD_CORRECT_WORD = "SET_CALL_ADD_CORRECT_WORD";

let initialState = {
  start: false,
  arrWords: [],
  indexSelectWord: null,
  selectWord: {},
  listСhoiceWords: [],
  answer: false,
  levelResult: {
    correctWords: [],
    wrongWords: [],
  },
};

const audioCallReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CALL_START_GAME: {
      return { ...state, start: action.boolean };
    }
    case SET_CALL_ARR_WORDS: {
      return { ...state, arrWords: action.arrWords };
    }
    case SET_CALL_INDEX_SELECT_WORD:
      return {
        ...state,
        indexSelectWord: action.index,
      };
    case SET_CALL_SELECT_WORD:
      return {
        ...state,
        selectWord: action.obj,
      };
    case SET_CALL_LIST_CHOICE_WORDS:
      return { ...state, listСhoiceWords: action.arr };

    case SET_CALL_ADD_WRONG_WORD: {
      return {
        ...state,
        levelResult: { ...state.levelResult, wrongWords: action.words },
      };
    }
    case SET_CALL_ADD_CORRECT_WORD: {
      return {
        ...state,
        levelResult: { ...state.levelResult, correctWords: action.words },
      };
    }
    case SET_ANSWER: {
      return {
        ...state,
        answer: action.value
      }
    }
    default:
      return state;
  }
};

export const setCallStartGame = (boolean) => ({
  type: SET_CALL_START_GAME,
  boolean,
});
export const setCallArrWords = (arr) => ({
  type: SET_CALL_ARR_WORDS,
  arrWords: arr,
});
export const setCallIndexSelectWord = (index) => ({
  type: SET_CALL_INDEX_SELECT_WORD,
  index,
});
export const setCallSelectWord = (obj) => ({
  type: SET_CALL_SELECT_WORD,
  obj,
});
export const setCallListChoiceWords = (arr) => ({
  type: SET_CALL_LIST_CHOICE_WORDS,
  arr,
});

export const setCallAddWrongWord = (words) => ({
  type: SET_CALL_ADD_WRONG_WORD,
  words,
});
export const setCallAddCorrectWord = (words) => ({
  type: SET_CALL_ADD_CORRECT_WORD,
  words,
});
export const setAnswer = (value) => ({
  type: SET_ANSWER,
  value,
});

export default audioCallReducer;
