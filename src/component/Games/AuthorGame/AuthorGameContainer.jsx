import React, { useEffect } from "react";
import { connect } from "react-redux";
import AuthorGame from "./AuthorGame";
import {
  setStartGame,
  setArrWords,
  setSelectWord,
  setListChoiceWords,
} from "../../../redux/authorGame-reducer";
import {
  generateRandom,
  shuffleArray,
  getRequestWords,
} from "../generalFunctionsForGame";

const AuthorGameContainer = (props) => {
  const {
    start,
    arrWords,
    indexSelectWord = null,
    selectWord,
    listСhoiceWords,
    setStartGame,
    setArrWords,
    setSelectWord,
    setListChoiceWords,
  } = props;

  useEffect(() => {}, []);

  useEffect(() => {
    if (start === true) {
      initListСhoiceWords();
    }
  }, [start]);

  const buttonСhoiceLevel = async (group) => {
    const arrWords = await getRequestWords(group);
    const arrWordsData = arrWords.data.slice();
    shuffleArray(arrWordsData);
    setArrWords(arrWordsData);
    setSelectWord(indexSelectWord, arrWordsData[indexSelectWord]);
    setStartGame(true);
  };

  const buttonNextWord = () => {
    const index = indexSelectWord + 1;
    setSelectWord(index, arrWords[index]);
    initListСhoiceWords();
  };

  const initListСhoiceWords = () => {
    let indexСhoiceWords = [indexSelectWord];
    for (let i = 0; i < 3; i++)
      indexСhoiceWords.push(
        generateRandom(0, arrWords.length-1, indexСhoiceWords)
      );
    shuffleArray(indexСhoiceWords);
    const listСhoiceWords = indexСhoiceWords.map((n) => {
      return Object.assign({ typeButton: "active" }, arrWords[n]);
    });
    setListChoiceWords(listСhoiceWords);
  };

  const buttonChoiceWord = (obj) => {
    // console.log(obj);


    // if (word !== selectWord.word) {

    //   const arrTypesSelectWords = props.arrSelectWords.map((obj, index)=>{

    //     if(obj.word == word){
    //       obj.typeButton ='wrong'
    //     } else {
    //       obj.typeButton ='block'
    //     }

    //     return obj
    // })

    // if (word === selectWord.word) {

    //   const newArrSelectWords = props.arrSelectWords.map((obj, index)=>{
    //     if(obj.word === word){
    //       obj.typeButton ='correct'
    //     } else {
    //       obj.typeButton ='block'
    //     }

    //     return obj
    // })



      // const objectLevelMove = {
      //   selectWord: props.levelArr[props.levelGame.indexSelectWord],
      //   arrSelectWords: arrTypesSelectWords,
      //   answer: false,
      // };
      
      // props.setLevelMove(objectLevelMove);


      // const wrongWords = [...props.wrongWords, props.selectWord];
      // props.setAddWrongWord(wrongWords);
    // }

      // const objectLevelMove = {
      //   selectWord: props.levelArr[props.levelGame.indexSelectWord],
      //   arrSelectWords: newArrSelectWords,
      //   answer: true,
      // };
      
      // props.setLevelMove(objectLevelMove);

      // const correctWords = [...props.correctWords, props.selectWord];
      // props.setAddCorrectWord(correctWords);

      // setListChoiceWords(listСhoiceWords);
    // }
  };

  return (
    <AuthorGame
      buttonСhoiceLevel={buttonСhoiceLevel}
      start={start}
      arrWords={arrWords}
      indexSelectWord={indexSelectWord}
      selectWord={selectWord}
      listСhoiceWords={listСhoiceWords}
      buttonNextWord={buttonNextWord}
      buttonChoiceWord={buttonChoiceWord}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    start: state.authorGame.start,
    arrWords: state.authorGame.arrWords,
    indexSelectWord: state.authorGame.indexSelectWord,
    selectWord: state.authorGame.selectWord,
    listСhoiceWords: state.authorGame.listСhoiceWords,
  };
};

export default connect(mapStateToProps, {
  setStartGame,
  setArrWords,
  setSelectWord,
  setListChoiceWords,
})(AuthorGameContainer);
