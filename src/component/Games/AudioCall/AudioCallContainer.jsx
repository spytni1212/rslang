import React, { useEffect } from "react";
import AudioCall from "./AudioCall";
import axios from "axios";
import { connect } from "react-redux";
import {
    setIndexSelectWord,
  setLevelArr,
  setLevelMove,
  setStartGame,
} from "../../../redux/audioCall-reducer";

function generateRandom(min, max, excludeNumber) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num === excludeNumber ? generateRandom(min, max) : num;
}

const AudioCallContainer = ({ ...props }) => {

  const funLevelMove = () => {
    const newArrSelectWords = [props.levelArr[props.levelGame.indexSelectWord]];
    for (let i = 0; i < 3; i++) {
      newArrSelectWords.push(
        props.levelArr[generateRandom(0, 19, props.levelGame.indexSelectWord)]
      );
    }

    const objectLevelMove = {
      selectWord: props.levelArr[props.levelGame.indexSelectWord],
      arrSelectWords: newArrSelectWords,
    };
    props.setLevelMove(objectLevelMove);
  };

  const buttonChoseWord = (word) => {
        if(props.levelGame.indexSelectWord === 19){
          return alert('end')
        }
        props.setIndexSelectWord({
            indexSelectWord: props.levelGame.indexSelectWord + 1
        })
    }

  const handlerButtonStart = (page) => {
    axios
      .get(
        `https://react-learn-words.herokuapp.com/words?group=${0}&page=${page}`
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
    />
  );
};

let mapStateToProps = (state) => {
  return {
    levels: state.audioCall.levelsGame,
    start: state.audioCall.gameStart,
    levelArr: state.audioCall.levelArr,
    levelMove: state.audioCall.levelMove,
    levelGame: state.audioCall.levelGame
  };
};

export default connect(mapStateToProps, {
  setStartGame,
  setLevelArr,
  setLevelMove,
  setIndexSelectWord,
})(AudioCallContainer);
