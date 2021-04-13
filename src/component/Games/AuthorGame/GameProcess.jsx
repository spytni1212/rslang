import React, { useEffect } from "react";
import Modal from "../../UIKit/Modal/Modal";
import ProgressBar from "../../UIKit/ProgressBar/ProgressBar";
import GameButton from "../../UIKit/GameButton/GameButton";
import s from "./GameProcess.module.css";
import BoardsC from "./BoardsC";
import Button from "@material-ui/core/Button";

const GameProcess = ({ ...props }) => {
  const {
    buttonNextWord,
    buttonChoiceWord,
    selectWord,
    indexSelectWord,
    arrWords,
    listButtonsWords,
    Boards,
    changeBoards,
    ButtonСheck,
    ButtonNext,
    handlerButtonCheck,
    colorBoard,
    setButtonCheck,
    result,
  } = props;

  return (
    <div >
      <Modal isOpen={indexSelectWord === arrWords.length}>
        <button>Закрыть</button>
      </Modal>
      <ProgressBar number={indexSelectWord} />
      {selectWord.textExample}
      {!ButtonNext && <h2>{selectWord.textExampleTranslate}</h2>}
      {!ButtonNext ? (
        <BoardsC
          Boards={Boards}
          changeBoards={changeBoards}
          colorBoard={colorBoard}
          setButtonCheck={setButtonCheck}
        />
      ) : (
        <div>
          <h1>{result[result.length - 1].right ? "Правильно" : "Неправильно"}</h1>
          
          <p>{result[result.length - 1].sentence}</p>
          {!result[result.length - 1].right && <p>Ваш вариант:{result[result.length - 1].composed}</p>}
        </div>
      )}

      {!ButtonNext ? (
        <Button
          onClick={handlerButtonCheck}
          disabled={!ButtonСheck}
          variant="contained"
          style={{
            margin: "0 auto",
            background: "#d69eadf5",
            "&:hover": {
              background: "#d69eadf !important",
            },
          }}
        >
          Проверить
        </Button>
      ) : (
        <Button
          onClick={buttonNextWord}
          variant="contained"
          style={{
            margin: "0 auto",
            background: "#d69eadf5",
            "&:hover": {
              background: "#d69eadf !important",
            },
          }}
        >
          Дальше
        </Button>
      )}
    </div>
  );
};

export default GameProcess;
