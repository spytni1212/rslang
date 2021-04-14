import React, { useEffect } from "react";
import Modal from "../../UIKit/Modal/Modal";
import ProgressBar from "../../UIKit/ProgressBar/ProgressBar";
import GameButton from "../../UIKit/GameButton/GameButton";
import s from "./GameProcess.module.css";
import BoardsC from "./BoardsC";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  checkButton: {
    margin: "0 auto",
    background: "lightblue",
    fontSize: "16px",
    "&:hover": {
      background: "#d69eadf !important",
    },
  },
})

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
    EndGame,
  } = props;

const classes = useStyles();

  return (
    <div className={s.wrapper}>
      <Modal isOpen={indexSelectWord === arrWords.length}>
        <div>
          
        </div>
        <button onClick={()=>{EndGame()}}>Закрыть</button>
      </Modal>
      <ProgressBar number={indexSelectWord} />
      {!ButtonNext && <h2>{selectWord.textExampleTranslate}</h2>}
      {!ButtonNext ? (
        <BoardsC
          Boards={Boards}
          changeBoards={changeBoards}
          colorBoard={colorBoard}
          setButtonCheck={setButtonCheck}
        />
      ) : (
        <div className={s.result}> 
          <h1>{result[result.length - 1].right ? "Правильно" : "Неправильно"}</h1>
          
          <p><b>Правильный вариант: &nbsp;</b> {result[result.length - 1].sentence}</p>
          {!result[result.length - 1].right && <p><b>Ваш вариант:&nbsp;</b> {result[result.length - 1].composed}</p>}
        </div>
      )}

      {!ButtonNext ? (
        <Button
          onClick={handlerButtonCheck}
          disabled={!ButtonСheck}
          variant="contained"
          className={classes.checkButton}
        >
          Проверить
        </Button>
      ) : (
        <Button
          onClick={buttonNextWord}
          variant="contained"
          style={{
            margin: "0 auto",
            background: "lightblue",
            fontSize: "16px",
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
