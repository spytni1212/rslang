const SET_START_GAME = "SET_START_GAME";
const SET_ARR_WORDS = "SET_ARR_WORDS";
const SET_SELECT_WORD = "SET_SELECT_WORD";
const SET_LIST_CHOICE_WORDS = "SET_LIST_CHOICE_WORDS";

let initialState = {
  arrWords: [],
  start: false,
  indexSelectWord: 0,
  selectWord: {},
  listСhoiceWords: [],
};

const authorGameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_START_GAME:
      return { ...state, start: action.start };
    case SET_ARR_WORDS:
      return { ...state, arrWords: action.arrWords };
    case SET_SELECT_WORD:
      return {
        ...state,
        indexSelectWord: action.payload.index,
        selectWord: action.payload.obj,
      };
    case SET_LIST_CHOICE_WORDS:
      return { ...state, listСhoiceWords: action.arr };
    default:
      return state;
  }
};

export const setStartGame = (boolean) => ({
  type: SET_START_GAME,
  start: boolean,
});
export const setArrWords = (arr) => ({ type: SET_ARR_WORDS, arrWords: arr });
export const setSelectWord = (index, obj) => ({
  type: SET_SELECT_WORD,
  payload: { index, obj },
});
export const setListChoiceWords = (arr) => ({
  type: SET_LIST_CHOICE_WORDS,
  arr,
});

export default authorGameReducer;
