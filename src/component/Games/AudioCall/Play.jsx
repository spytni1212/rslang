import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const Play = ({ ...props }) => {

  useEffect(() => {
    props.funLevelMove();
  }, []);

  useEffect(() => props.funLevelMove(), [props.indexSelectWord])

  const buttonsSelection = props.arrSelectWords.map((object) => <button onClick={()=>{props.buttonChoseWord(object.word)}}>{object.word}</button>);

  return (
    <div>
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

export default connect(mapStateToProps, {})(Play);
