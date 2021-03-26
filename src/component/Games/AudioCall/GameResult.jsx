import React, { useEffect } from "react";
import { connect } from "react-redux";

const GameResult = ({ ...props }) => {

        
  return (
    <div>
      <h1>Correct</h1>
      {}
      <h1>Wrong in</h1>
      {}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    correctWords: state.audioCall.levelResult.correctWords,
    wrongWords: state.audioCall.levelResult.wrongWords,
  };
};

export default connect(mapStateToProps, {})(GameResult);
