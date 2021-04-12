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
  setBords
} from "../../../redux/authorGame-reducer";
import {
  shuffleArray,
  getRequestWords,
} from "../generalFunctionsForGame";
import { v4 as uuidv4 } from 'uuid';

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
  } = props;

  useEffect(() => {}, []);

  useEffect(() => {
    if(start === true){
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
  };

  const initListСhoiceWords = () => {
    setSelectWord(arrWords[indexSelectWord]);
    let arrayOfStrings = arrWords[indexSelectWord].textExample.split(' ');
    const arr =  arrayOfStrings.map(word => ({
        id: uuidv4(),
        content:  word,
    }));
    shuffleArray(arr);
    setWordsBords(arr)
    setListButtonsWords(arrayOfStrings);
  };

  const compostSentence = (arr) => {
    const arrMap = arr.map((obj)=>{
      return obj.content
    }) 
    console.log(arrMap.join(' '))
  }

  const changeBoards = (obj) => {
    const copyObj = Object.assign({}, obj);
    compostSentence(obj.Requested.items)
  }

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
    Boards: state.authorGame.Boards
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
})(AuthorGameContainer);
