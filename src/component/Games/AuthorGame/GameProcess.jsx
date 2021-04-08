import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Howl } from "howler";
import Modal from "../../UIKit/Modal/Modal";
import ProgressBar from "../../UIKit/ProgressBar/ProgressBar";
import GameButton from "../../UIKit/GameButton/GameButton";

const GameProcess = ({ ...props }) => {
  const { buttonNextWord, buttonChoiceWord, selectWord, indexSelectWord, arrWords, listСhoiceWords} = props;

  const buttonsSelection = listСhoiceWords.map((object, index) => (
    <GameButton
      typeButton={object.typeButton}
      funClickButton={buttonChoiceWord}
      funProp={object}
      key={index}
    >
      {object.word}
    </GameButton>
  ));

  return (
    <div>
      <Modal isOpen={indexSelectWord == arrWords.length}></Modal>
      <ProgressBar number={indexSelectWord} />
      <div>
        {selectWord.word}
        <br />
        {selectWord.textExample}
        <br />
        {buttonsSelection}
        <br />
        <button onClick={buttonNextWord}>Дальше</button>
      </div>
    </div>
  );
};

export default GameProcess;
