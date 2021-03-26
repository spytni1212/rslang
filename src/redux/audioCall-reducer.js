const SET_LEVEL = "SET_LEVEL";
const SET_GAME_START = "SET_GAME_START";
const SET_LEVEL_ARR = "SET_LEVEL_ARR";
const SET_LEVEL_MOVE = "SET_LEVEL_MOVE";
const SET_INDEX_SELECT_WORD = "SET_INDEX_SELECT_WORD";
const SET_ADD_WRONG_WORD = "SET_ADD_WRONG_WORD";
const SET_ADD_CORRECT_WORD = "SET_ADD_CORRECT_WORD";

let initialState = {
  levelsGame: [
    {
      name: "Level1",
      page: 0,
    },
    {
      name: "Level2",
      page: 1,
    },
    {
      name: "Level3",
      page: 2,
    },
    {
      name: "Level4",
      page: 3,
    },
    {
      name: "Level5",
      page: 4,
    },
    {
      name: "Level6",
      page: 5,
    },
  ],
  gameStart: false,
  levelArr: [],
  levelGame: {
    indexSelectWord: 0,
  },
  levelMove: {
    selectWord: {},
    arrSelectWords: []
  },
  levelResult: {
    correctWords: [],
    wrongWords: []
  }
};

const audioCallReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LEVEL: {
      return { ...state, words: action.words };
    }
    case SET_GAME_START: {
        return {...state, gameStart: action.value}
    }
    case SET_LEVEL_ARR: {
        return {...state, levelArr: action.array}
    }
    case SET_LEVEL_MOVE: {
        return {...state, levelMove: action.object}
    }
    case SET_INDEX_SELECT_WORD: {
      return {...state, levelGame: action.object}
    }
    case SET_ADD_WRONG_WORD:{
      return {...state, levelResult: {...state.levelResult, wrongWords: action.words}}
    }
    case SET_ADD_CORRECT_WORD:{
      return {...state, levelResult: {...state.levelResult, correctWords: action.words}}
    }
    default:
      return state;
  }
};

export const setLevel = (level) => ({ type: SET_LEVEL, level });
export const setStartGame = (value) => ({ type: SET_GAME_START, value});
export const setLevelArr = (array) => ({ type: SET_LEVEL_ARR, array});
export const setLevelMove = (object) => ({type: SET_LEVEL_MOVE, object});
export const setIndexSelectWord = (object) => ({type: SET_INDEX_SELECT_WORD, object});
export const setAddWrongWord = (words) => ({type: SET_ADD_WRONG_WORD, words});
export const setAddCorrectWord = (words) => ({type: SET_ADD_CORRECT_WORD, words});

export default audioCallReducer;
