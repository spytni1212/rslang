import { result } from "lodash";

const SET_START_GAME = "SET_START_GAME";
const SET_ARR_WORDS = "SET_ARR_WORDS";
const SET_SELECT_WORD = "SET_SELECT_WORD";
const SET_LIST_BUTTONS_WORDS = "SET_LIST_BUTTONS_WORDS";
const SET_INDEX_SELECT_WORD = "SET_INDEX_SELECT_WORD";
const SET_WORDS_BOARDS = "SET_WORDS_BOARDS";
const SET_BOARDS = "SET_BOARDS";
const SET_BUTTONS_CHECK = "SET_BUTTONS_CHECK";
const SET_BUTTONS_NEXT = "SET_BUTTONS_NEXT";
const SET_SENTENCE = "SET_SENTENCE";
const ADD_RESULT = "ADD_RESULT"

let initialState = {
  arrWords: [],
  start: false,
  indexSelectWord: null,
  selectWord: {},
  listButtonsWords: [],
  Boards: {
    Requested: {
      name: "Ваш вариант",
      items: [],
      style: "requested",
    },
    BoardWords: {
      name: "Используемые слова",
      items: [],
      style: "words",
    },
  },
  sentence: null,
  ButtonСheck: false,
  ButtonNext: false,
  result: [],
  showRules: false,
};

const authorGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_START_GAME:
      return { ...state, start: action.start };
    case SET_ARR_WORDS:
      return { ...state, arrWords: action.arrWords };
    case SET_INDEX_SELECT_WORD:
      return { ...state, indexSelectWord: action.number };
    case SET_SELECT_WORD:
      return {
        ...state,
        selectWord: action.obj,
      };
    case SET_LIST_BUTTONS_WORDS:
      return { ...state, listButtonsWords: action.arr };
    case SET_WORDS_BOARDS:
      return {
        ...state,
        Boards: {
          ...state.Boards,
          BoardWords: { ...state.Boards.BoardWords, items: action.arr },
        },
      };
    case SET_BOARDS:
      return {
        ...state,
        BoardWords: action.obj,
      };
    case SET_BUTTONS_CHECK:
      return {
        ...state,
        ButtonСheck: action.buttonCheck,
      };
    case SET_BUTTONS_NEXT:
      return {
        ...state,
        ButtonNext: action.buttonNext,
      };
    case SET_SENTENCE:
      return {
        ...state,
        sentence: action.sentence,
      };
    case ADD_RESULT: 
      return {
        ...state,
        result: [...state.result, action.obj]
      }
    default:
      return state;
  }
};

export const setStartGame = (boolean) => ({
  type: SET_START_GAME,
  start: boolean,
});
export const setArrWords = (arr) => ({ type: SET_ARR_WORDS, arrWords: arr });
export const setSelectWord = (obj) => ({ type: SET_SELECT_WORD, obj });
export const setIndexSelectWord = (number) => ({
  type: SET_INDEX_SELECT_WORD,
  number,
});
export const setListButtonsWords = (arr) => ({
  type: SET_LIST_BUTTONS_WORDS,
  arr,
});
export const setWordsBords = (arr) => ({ type: SET_WORDS_BOARDS, arr });
export const setBords = (obj) => ({ type: SET_WORDS_BOARDS, obj });
export const setButtonCheck = (buttonCheck) => ({
  type: SET_BUTTONS_CHECK,
  buttonCheck,
});
export const setButtonNext = (buttonNext) => ({
  type: SET_BUTTONS_NEXT,
  buttonNext,
});
export const setSentence = (sentence) => ({ type: SET_SENTENCE, sentence });
export const addResult = (obj) => ({ type: ADD_RESULT, obj });

export default authorGameReducer;

