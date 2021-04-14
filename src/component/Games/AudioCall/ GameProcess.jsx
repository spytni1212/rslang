import React, { useEffect } from "react";
import { Howl } from "howler";
import Button from "@material-ui/core/Button";
import Modal from "../../UIKit/Modal/Modal";
import s from "./GameProcess.module.css";
import ProgressBar from "../../UIKit/ProgressBar/ProgressBar";
import GameButton from "../../UIKit/GameButton/GameButton";
import { makeStyles } from "@material-ui/core/styles";
import GameResults from "../../UIKit/GameResults/GameResults";

const useStyles = makeStyles({
  bgContainer: {
    position: "absolute",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
    "&::before": {
      content: '""',
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/img/Games/audiocall.jpeg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      opacity: "0.5",
      position: "absolute",
      top: "0",
      bottom: "0",
      right: "0",
      left: "0",
    },
  },
  container: {
    zIndex: 11,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "20px",
    "& h2, & div, & button": {
      zIndex: "11",
    },
  },
  gameContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    columnGap: "1em",
    rowGap: "1em",
    flexWrap: "wrap",
  },
  audioButton: {
    borderRadius: `50%`,
    display: `inline-block`,
    // border: `1px solid black`,
    padding: `1rem 2rem`,
    margin: `0`,
    textDecoration: `none`,
    // background: `none repeat scroll 0 0 #fdf8fb`,
    color: `#ffffff`,
    fontSize: `1rem`,
    cursor: `pointer`,
    textAlign: `center`,
    outline: "none",
    background: `none`,
    color: `inherit`,
    border: `none`,
    padding: `0`,
    font: `inherit`,
    cursor: `pointer`,
    outline: `inherit`,
    "&:hover": {
      transform: "scale(1.1)",
    },
    "&:click": {
      border: `none`,
    },
  },
  checkButton: {
    margin: "0 auto",
    background: "#d69eadf5",
    fontSize: "16px",
    "&:hover": {
      background: "#d69eadf !important",
    },
  },
  hintContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const GameProcess = ({ ...props }) => {
  const {
    buttonNextWord,
    buttonChoseWord,
    selectWord,
    indexSelectWord,
    arrWords,
    listСhoiceWords,
    correctWords,
    wrongWords,
    answer,
  } = props;

  const classes = useStyles();

  useEffect(() => {
    return playAudio();
  }, [selectWord]);

  const playAudio = () => {
    const src = `https://react-learn-words.herokuapp.com/${selectWord.audio}`;
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const buttonsSelection = listСhoiceWords.map((object, index) => (
    <GameButton
      disabled={answer}
      typeButton={object.typeButton}
      funClickButton={buttonChoseWord}
      funProp={object}
      key={index}
    >
      {object.wordTranslate}
    </GameButton>
  ));

  return (
    <div className={classes.bgContainer}>
      <Modal isOpen={indexSelectWord === arrWords.length}>
        <GameResults
          score={props.score}
          results={props.results}
          resultInfo={props.resultInfo}
          endGame={props.buttonEndGame}
        />
      </Modal>
      <div className={classes.container}>
        <ProgressBar number={indexSelectWord} />
        <div>
          {answer ? (
            <div className={classes.hintContainer}>
              <div
                className={s.img}
                style={{
                  backgroundImage: `url('https://react-learn-words.herokuapp.com/${selectWord.image}')`,
                }}
              ></div>
              <p>
                {props.selectWord.word}-{props.selectWord.transcription}-
                {props.selectWord.wordTranslate}
              </p>
            </div>
          ) : (
            <button onClick={playAudio} className={classes.audioButton}>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/727/727269.svg?token=exp=1618426453~hmac=5c07dbdd55f4a6ecc84e5e1d08428ceb"
                alt="sound image"
                style={{ width: "80px" }}
              />
            </button>
          )}
        </div>

        <div className={classes.gameContainer}>{buttonsSelection}</div>
        <Button
          variant="contained"
          disabled={!answer}
          onClick={buttonNextWord}
          className={classes.checkButton}
        >
          {indexSelectWord === arrWords.length - 1 ? "Результат" : "Дальше"}
        </Button>
      </div>
    </div>
  );
};

export default GameProcess;
