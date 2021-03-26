import React, { useEffect } from "react";
import { connect } from "react-redux";
import GameResult from "./GameResult";

const GameProcess = ({ ...props }) => {

  useEffect(() => {
    props.funLevelMove();
  }, []);

  useEffect(() => props.funLevelMove(), [props.indexSelectWord])

  const buttonsSelection = props.arrSelectWords.map((object) => <button onClick={()=>{props.buttonChoseWord(object.word)}}>{object.word}</button>);

  return (
    <div>
      {props.indexSelectWord === 19 && <GameResult/>}
        <p>{props.indexSelectWord}/19</p>
      {props.selectWord.word}
      {buttonsSelection}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    indexSelectWord: state.audioCall.levelGame.indexSelectWord,
    selectWord: state.audioCall.levelMove.selectWord,
    arrSelectWords: state.audioCall.levelMove.arrSelectWords,
  };
};

export default connect(mapStateToProps, {})(GameProcess);
