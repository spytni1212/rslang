import React, { useEffect } from "react";
import Modal from "../../UIKit/Modal/Modal";
import ProgressBar from "../../UIKit/ProgressBar/ProgressBar";
import GameButton from "../../UIKit/GameButton/GameButton";
import s from './GameProcess.module.css'
import BoardsC from './BoardsC'

const GameProcess = ({ ...props }) => {
  const { buttonNextWord, buttonChoiceWord, selectWord, indexSelectWord, arrWords, listButtonsWords, Boards, changeBoards } = props;

  return (
    <div className={s.wrapper}>
      {/* <Modal isOpen={indexSelectWord == arrWords.length}></Modal> */}
      <ProgressBar number={indexSelectWord} />
      <div >
        {selectWord.word}
        <br />
        {Boards.BoardWords.items.length !== 0 && <BoardsC Boards={Boards} changeBoards={changeBoards}/>}
        {selectWord.textExample}
        <button onClick={buttonNextWord}>Проверить</button>
        <button onClick={buttonNextWord}>Дальше</button>
      </div>
    </div>
  );
};

export default GameProcess;
