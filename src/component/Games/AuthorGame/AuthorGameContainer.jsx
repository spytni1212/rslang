import React, { useEffect } from "react";
import { connect } from "react-redux";
import AuthorGame from "./AuthorGame";
import {
  setStartGame,
  setArrWords,
  setSelectWord,
  setListButtonsWords,
  setIndexSelectWord,
  setWordsBords,
  setBords,
  setButtonCheck,
  setSentence,
  setButtonNext,
  addResult,
} from "../../../redux/authorGame-reducer";
import { shuffleArray, getRequestWords } from "../generalFunctionsForGame";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { useHistory } from "react-router-dom";

const AuthorGameContainer = (props) => {
  const {
    start,
    arrWords,
    indexSelectWord,
    selectWord,
    listButtonsWords,
    setListButtonsWords,
    setStartGame,
    setArrWords,
    setSelectWord,
    setIndexSelectWord,
    setWordsBords,
    Boards,
    setBords,
    setButtonCheck,
    ButtonСheck,
    ButtonNext,
    setSentence,
    sentence,
    setButtonNext,
    addResult,
    result,
    userWords
  } = props;

  let history = useHistory();

  useEffect(() => {
    if (props.match.params.userGame) {
      const copyUserWords = _.cloneDeep(userWords);
      shuffleArray(copyUserWords);
      setArrWords(copyUserWords);
      setStartGame(true);
      setIndexSelectWord(0);
    }
  }, []);

  useEffect(() => {
    if (start === true) {
      if (indexSelectWord === arrWords.length) {
        return;
      }
      initListСhoiceWords();
    }
  }, [indexSelectWord]);

  const buttonСhoiceLevel = async (group) => {
    const arrWords = await getRequestWords(group);
    const arrWordsData = arrWords.data;
    shuffleArray(arrWordsData);
    setArrWords(arrWordsData);
    setStartGame(true);
    setIndexSelectWord(0);
  };

  const buttonNextWord = () => {
    setIndexSelectWord(indexSelectWord + 1);
    setButtonNext(false);
  };

  const initListСhoiceWords = () => {
    setButtonCheck(false);
    setSelectWord(arrWords[indexSelectWord]);
    let arrayOfStrings = arrWords[indexSelectWord].textExample.split(" ");
    const arr = arrayOfStrings.map((word) => ({
      id: uuidv4(),
      content: word,
    }));
    shuffleArray(arr);
    setWordsBords(arr);
    setListButtonsWords(arrayOfStrings);
  };

  const compostSentence = (arr) => {
    const arrMap = arr.map((obj) => {
      return obj.content;
    });
    setSentence(arrMap.join(" "));
  };

  const changeBoards = (obj) => {
    const copyObj = Object.assign({}, obj);
    compostSentence(copyObj.Requested.items);
    setButtonCheck(true);
  };

  const handlerButtonCheck = () => {
    const resultObj = {
      composed: sentence,
      sentence: selectWord.textExample,
    };
    if (sentence === selectWord.textExample) {
      resultObj.right = true;
    } else {
      resultObj.right = false;
    }
    addResult(resultObj);
    setButtonNext(true);
  };

  const EndGame = () => {
    setButtonNext(false);
    setStartGame(false);
    if (props.match.params.userGame) {
      history.push("/book");
    }
  };

  return (
    <AuthorGame
      buttonСhoiceLevel={buttonСhoiceLevel}
      start={start}
      arrWords={arrWords}
      indexSelectWord={indexSelectWord}
      selectWord={selectWord}
      listButtonsWords={listButtonsWords}
      buttonNextWord={buttonNextWord}
      Boards={Boards}
      setWordsBords={setWordsBords}
      changeBoards={changeBoards}
      ButtonСheck={ButtonСheck}
      ButtonNext={ButtonNext}
      handlerButtonCheck={handlerButtonCheck}
      setButtonCheck={setButtonCheck}
      result={result}
      EndGame={EndGame}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    start: state.authorGame.start,
    arrWords: state.authorGame.arrWords,
    indexSelectWord: state.authorGame.indexSelectWord,
    selectWord: state.authorGame.selectWord,
    listButtonsWords: state.authorGame.listButtonsWords,
    Boards: state.authorGame.Boards,
    ButtonСheck: state.authorGame.ButtonСheck,
    ButtonNext: state.authorGame.ButtonNext,
    sentence: state.authorGame.sentence,
    colorBoard: state.authorGame.colorBoard,
    result: state.authorGame.result,
    userWords: state.book.userWords
  };
};

export default connect(mapStateToProps, {
  setStartGame,
  setArrWords,
  setSelectWord,
  setIndexSelectWord,
  setListButtonsWords,
  setWordsBords,
  setBords,
  setButtonCheck,
  setSentence,
  setButtonNext,
  addResult,
})(AuthorGameContainer);
