import React, { useEffect } from "react";
import AudioCall from "./AudioCall";
import axios from "axios";
import { connect } from "react-redux";
import {
  setAddCorrectWord,
  setAddWrongWord,
  setAnswer,
  setIndexSelectWord,
  setLevelArr,
  setLevelMove,
  setStartGame,
} from "../../../redux/audioCall-reducer";

function generateRandom(min, max, excludeNumber = null) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num === excludeNumber ? generateRandom(min, max) : num;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const AudioCallContainer = ({ ...props }) => {
  const funLevelMove = () => {

    const newArrSelectWords = [props.levelArr[props.levelGame.indexSelectWord]];

    for (let i = 0; i < 3; i++) {
      
      newArrSelectWords.push(
        props.levelArr[generateRandom(0, 19, props.levelGame.indexSelectWord)]
      );
    }

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
      props.setAnswer(false);

      const wrongWords = [...props.wrongWords, props.selectWord];
      props.setAddWrongWord(wrongWords);
    }

    if (word === props.selectWord.word) {
      props.setAnswer(true);

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
  };
};

export default connect(mapStateToProps, {
  setStartGame,
  setLevelArr,
  setLevelMove,
  setIndexSelectWord,
  setAddWrongWord,
  setAddCorrectWord,
  setAnswer,
})(AudioCallContainer);
