const SET_START_GAME = "SET_START_GAME";
const SET_ARR_WORDS = "SET_ARR_WORDS";
const SET_SELECT_WORD = "SET_SELECT_WORD";
const SET_LIST_BUTTONS_WORDS = "SET_LIST_BUTTONS_WORDS";
const SET_INDEX_SELECT_WORD = "SET_INDEX_SELECT_WORD";
const SET_WORDS_BOARDS = "SET_WORDS_BOARDS";
const SET_BOARDS = "SET_BOARDS";

let initialState = {
  arrWords: [],
  start: false,
  indexSelectWord: null,
  selectWord: {},
  listButtonsWords: [],
  Boards: {
    Requested: {
      name: "Requested",
      items: [],
    },
    BoardWords: {
      name: "BoardWords",
      items: [],
    },
  },
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
          BoardWords: { ...state.Boards.BoardWords, items: action.arr},
        },
      };
    case SET_BOARDS: 
      return {
        ...state, 
        BoardWords: action.obj
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

export default authorGameReducer;
