import React, { useEffect } from "react";
import { Howl } from "howler";
import Button from '@material-ui/core/Button';
import Modal from "../../UIKit/Modal/Modal";
import s from "./GameProcess.module.css";
import ProgressBar from "../../UIKit/ProgressBar/ProgressBar";
import GameButton from "../../UIKit/GameButton/GameButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bgContainer: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    "&::before": {
      content: '""',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/img/Games/audiocall.jpeg)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      opacity: '0.5',
      position: 'absolute',
      top: '0',
      bottom: '0',
      right: '0',
      left: '0',
    }
  },
  container: {
    zIndex: 11,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '20px',
    '& h2, & div, & button': {
      zIndex: '11',
    }
  },
  gameContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1em',
    rowGap: '1em',
    flexWrap: 'wrap'
  },
  audioButton: {
    borderRadius: `50%`,
    display: `inline-block`,
    border: `1px solid black`,
    padding: `1rem 2rem`,
    margin: `0`,
    textDecoration: `none`,
    background: `none repeat scroll 0 0 #fdf8fb`,
    color: `#ffffff`,
    fontSize: `1rem`,
    cursor: `pointer`,
    textAlign: `center`,
    outline: 'none',
    "&:hover": {
      transform: "scale(1.1)",
    },
    "&:click": {
      border: `none`,
    }
  },
  checkButton: {
    margin: '0 auto',
    background: '#d69eadf5',
    fontSize: '16px',
    "&:hover": {
      background: '#d69eadf !important'
    }
  },
  hintContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
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

  const listCorrectWords = correctWords.map((obj) => <li>{obj.word}</li>);
  const listWrongWords = wrongWords.map((obj) => <li>{obj.word}</li>);

  return (
    <div className={classes.bgContainer}>
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFQklEQVR4nO2dS4gcRRjHf7NJxMSsiauoERV8ICpGjDkoCD5i9qBGhZgoMYkKPnKQ9SRZfIGI4MW3dw8+gi8UhPiIRhF1YyCIojGXGI2PgxDF2Uw04mbGw1dN9cbZ6Z7pr6ZrZr4fND3sfF38t/50V9U3VdVgGIZhGIZhGIZhGIZhGIYx4CwBvgBqwGZgUblyBpsrgUmgkTreLVXRALMaOIiY8AJwsvt8sExRg8ptwL+IAc8CQ+7vyV1idJFxpNLrwMOHfWeGdJEK8DhS4VPAXU1izJAuMRt4Ht9GrJ4hzgzpAvOAd5CK3g+Mtog1QwJzDPAZUsm/ARdmxJshAVkEfI1U8I/AWTmuMUMCcTqwG6ncncgYIw9mSACWIo+nBrAdOLaNa80QZS4HqkilfgDMb/N6M0SRVfhUyIvAnA7KaGbIJcAa4IRC6gaMDchgrwE8hQwCO6GZIcnjr45khceAkQ7LHwgexFfY/QXLambISiQDXEt9XwOewVL10xhCKiVJhdypUGarNuRI4EbEnDp+oHkfnT0e+4o5wEv4VMhKpXLzNuqLgTdT8TuAs5U09BxH4VMhVeAKxbLb7WUtA/aktFynqKUnGAEm8KmQpcrld9LtnQ+87K47RPMscrSsALYyvYHs5PiBfKmQdikyDnkA37nYoKYoII9SzITkmABOCqSx6MDwIXwn43oVRYFYgQj9B9hIuAotisZI/TFXxiRh7mIVPkJEjpctJAOt1EnSpnxJpF3iZKqNxp2xW6GMmWhmyMfALmAdMCtnOcP4bPNGNXWKaCbtvlEqpxkzGZJuv87IWdZy/Kj+RC2BWvRKFrWZzlnALcBefNuwLGd5yeDxaS2BWmga0u1HVsIC4BX3/d+0/m0+4TykG1wDFmoI1ELTkJB3WpbOCj5/9gf5Hl/vu/h7CqtTpF8MATHldRe3jexU/w2p2Gjo5Ua9GcPAzy52fUbsPOAAklaJJl3fy436TKx1sTtzxG52sTd1qCuToeyQYIRs1NvhVeBX4FzkZ95WTLjzxaHElGlI3nFAaKaATe7zVRmxX7nzOaHElGlITHzizll3yB53Pi2glrbop15WmlNd/N6MuBEX93uHutTpV0Pmuvi/MuKOwGe7g2CPLCGph3qpKjBDEo5z56xHUTKDshZKiBkiLHbn7zPiklmP+0IJMUOES915omWUzMYHmQsQBDNElsmtdZ+z1rYvcedd4eS0Rz/2sta72G9zxCbzyIKlTtql3wwZBn5xsesyYvs+uVi2IRXgDfKn31elYqOhXwypAM/hR9158mpbXPxYYXWK9IMhC4HX8CPz5TnKOx//E+4CDYFa9LIhs4FbgZ/cd1Vk6Vwe3nLXPKklUIteNmRb6u+f48cUWYy6a/YDx2sJ1EJzoly3DfkU+A64mfzjr2Fk9N4A7lVTp8hW9KaSlt3LysMmV84O5JEXHdfg08/jFLtTYjckmQFfBc4srCggj+D/4aJHrMsRxpBe1RRwrYqiwFwNfMj/9zls94htwU6F6auB79AUFTMxLmk7Gj/F9BBwu7Km6Ilp0ecocrc2gD+RtnIgKXtZ9AXA26n47US8WqpbdHvjgLnInidbUnFVZEFOlF3bsgi9tcYa4D0kf5V8Pwk8gW1IMyMhN59JtnuqI2mUu5GtA40MQm3PdBmyx0l0+ahewDYwixDb4i9CbBPMCLFtYiMkvZHyPuCijHgzpAvYVuMRYpvxR4i9riJS7IUuEWKvPIqQw18Kdgq+jTFKwl6bFyHJiyUPIN3jaGaoG4ZhGIZhGIZhGIZhGIZhBOc/v7stF6rkSdcAAAAASUVORK5CYII="
                alt='sound image'
                style={{ width: '80px' }}
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
        <Modal isOpen={indexSelectWord === arrWords.length}>
          <div className={s.wrapperList}>
            <div className={s.list}>
              <p>Correct</p>
              {listCorrectWords}
            </div>
            <div className={s.list}>
              <p>Wrong in</p>
              {listWrongWords}
            </div>
          </div>
          <button onClick={props.buttonEndGame}>OK</button>
        </Modal>
      </div>
    </div>
  );
};

export default GameProcess;
