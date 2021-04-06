import React, { useEffect } from "react";
import AudioCall from "./AudioCall";
import axios from "axios";
import { connect } from "react-redux";
import {
  setAddCorrectWord,
  setAddWrongWord,
  setIndexSelectWord,
  setLevelArr,
  setLevelMove,
  setStartGame,
} from "../../../redux/audioCall-reducer";
import {generateRandom, shuffleArray} from "../generalFunctionsForGame"


const AudioCallContainer = ({ ...props }) => {


  const funLevelMove = () => {

    const newArrSelectWords = [props.levelArr[props.levelGame.indexSelectWord]];

    for (let i = 0; i < 3; i++) {
      newArrSelectWords.push(
        props.levelArr[generateRandom(0, 19, props.levelGame.indexSelectWord)]
      );
    }
    
    newArrSelectWords.forEach((obj)=>{
      return obj.typeButton = 'active'
    })

    shuffleArray(newArrSelectWords)
    const objectLevelMove = {
      selectWord: props.levelArr[props.levelGame.indexSelectWord],
      arrSelectWords: newArrSelectWords,
      answer: null,
    };
    props.setLevelMove(objectLevelMove);
  };



  const buttonChoseWord = (word) => {
    if (props.levelGame.indexSelectWord > 19) {
      return;
    }

    if (word !== props.selectWord.word) {

      const arrTypesSelectWords = props.arrSelectWords.map((obj, index)=>{

        if(obj.word == word){
          obj.typeButton ='wrong'
        } else {
          obj.typeButton ='block'
        }

        return obj
      })

      console.log(arrTypesSelectWords)

      const objectLevelMove = {
        selectWord: props.levelArr[props.levelGame.indexSelectWord],
        arrSelectWords: arrTypesSelectWords,
        answer: false,
      };
      
      props.setLevelMove(objectLevelMove);


      const wrongWords = [...props.wrongWords, props.selectWord];
      props.setAddWrongWord(wrongWords);
    }

    if (word === props.selectWord.word) {

      const newArrSelectWords = props.arrSelectWords.map((obj, index)=>{
        if(obj.word === word){
          obj.typeButton ='correct'
        } else {
          obj.typeButton ='block'
        }

        return obj
      })

      console.log(newArrSelectWords)

      const objectLevelMove = {
        selectWord: props.levelArr[props.levelGame.indexSelectWord],
        arrSelectWords: newArrSelectWords,
        answer: true,
      };
      
      props.setLevelMove(objectLevelMove);

      const correctWords = [...props.correctWords, props.selectWord];
      props.setAddCorrectWord(correctWords);
    }
  };

  const buttonNextWord = () => {
    if (props.levelGame.indexSelectWord > 19) {
      return;
    }

    props.setIndexSelectWord({
      indexSelectWord: props.levelGame.indexSelectWord + 1,
    });
  };

  const buttonEndGame = () => {
    props.setStartGame(false);
    props.setLevelMove({
      selectWord: {},
      arrSelectWords: [],
      answer: null,
    });
    props.setIndexSelectWord({
      indexSelectWord: 0,
    });
    props.setAddWrongWord([]);
    props.setAddCorrectWord([]);
  };

  const handlerButtonStart = (group, page) => {
    axios
      .get(
        `https://react-learn-words.herokuapp.com/words?group=${group}&page=${generateRandom(0, 29)}`
      )
      .then((res) => {
        props.setLevelArr(res.data);
      })
      .then(() => props.setStartGame(true));
  };

  return (
    <AudioCall
      handlerButtonStart={handlerButtonStart}
      levels={props.levels}
      {...props}
      funLevelMove={funLevelMove}
      buttonChoseWord={buttonChoseWord}
      buttonNextWord={buttonNextWord}
      buttonEndGame={buttonEndGame}
    />
  );
};

let mapStateToProps = (state) => {
  return {
    levels: state.audioCall.levelsGame,
    start: state.audioCall.gameStart,
    levelArr: state.audioCall.levelArr,
    levelMove: state.audioCall.levelMove,
    levelGame: state.audioCall.levelGame,
    selectWord: state.audioCall.levelMove.selectWord,
    wrongWords: state.audioCall.levelResult.wrongWords,
    correctWords: state.audioCall.levelResult.correctWords,
    arrSelectWords: state.audioCall.levelMove.arrSelectWords
  };
};

export default connect(mapStateToProps, {
  setStartGame,
  setLevelArr,
  setLevelMove,
  setIndexSelectWord,
  setAddWrongWord,
  setAddCorrectWord,
})(AudioCallContainer);
