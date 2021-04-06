import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Howl } from "howler";
import Modal from "../../UIKit/Modal/Modal";
import s from "./GameProcess.module.css";
import ProgressBar from "../../UIKit/ProgressBar/ProgressBar";
import GameButton from "../../UIKit/GameButton/GameButton";

const GameProcess = ({ ...props }) => {
  const listCorrectWords = props.correctWords.map((obj) => <li>{obj.word}</li>);
  const listWrongWords = props.wrongWords.map((obj) => <li>{obj.word}</li>);

  useEffect(() => {
    if (props.indexSelectWord > 19) return;
    props.funLevelMove();
  }, [props.indexSelectWord]);

  useEffect(() => {
    return playAudio();
  }, [props.selectWord]);

  const playAudio = () => {
    const src = `https://react-learn-words.herokuapp.com/${props.selectWord.audio}`;
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const buttonsSelection = props.arrSelectWords.map((object,index) => (
    <GameButton
      typeButton={object.typeButton}
      funClickButton={props.buttonChoseWord}
      funProp={object.word}
      key={index}
    >
      {object.wordTranslate}
    </GameButton>
  ));

  return (
    <div
      className={`${s.field} ${props.answer === true && s.right} ${
        props.answer === false && s.wrong
      }`}
    >
      <Modal isOpen={props.indexSelectWord > 19 && true}>
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

      <ProgressBar number={props.indexSelectWord} />

      <div>
        <button onClick={playAudio}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAFQklEQVR4nO2dS4gcRRjHf7NJxMSsiauoERV8ICpGjDkoCD5i9qBGhZgoMYkKPnKQ9SRZfIGI4MW3dw8+gi8UhPiIRhF1YyCIojGXGI2PgxDF2Uw04mbGw1dN9cbZ6Z7pr6ZrZr4fND3sfF38t/50V9U3VdVgGIZhGIZhGIZhGIZhGIYx4CwBvgBqwGZgUblyBpsrgUmgkTreLVXRALMaOIiY8AJwsvt8sExRg8ptwL+IAc8CQ+7vyV1idJFxpNLrwMOHfWeGdJEK8DhS4VPAXU1izJAuMRt4Ht9GrJ4hzgzpAvOAd5CK3g+Mtog1QwJzDPAZUsm/ARdmxJshAVkEfI1U8I/AWTmuMUMCcTqwG6ncncgYIw9mSACWIo+nBrAdOLaNa80QZS4HqkilfgDMb/N6M0SRVfhUyIvAnA7KaGbIJcAa4IRC6gaMDchgrwE8hQwCO6GZIcnjr45khceAkQ7LHwgexFfY/QXLambISiQDXEt9XwOewVL10xhCKiVJhdypUGarNuRI4EbEnDp+oHkfnT0e+4o5wEv4VMhKpXLzNuqLgTdT8TuAs5U09BxH4VMhVeAKxbLb7WUtA/aktFynqKUnGAEm8KmQpcrld9LtnQ+87K47RPMscrSsALYyvYHs5PiBfKmQdikyDnkA37nYoKYoII9SzITkmABOCqSx6MDwIXwn43oVRYFYgQj9B9hIuAotisZI/TFXxiRh7mIVPkJEjpctJAOt1EnSpnxJpF3iZKqNxp2xW6GMmWhmyMfALmAdMCtnOcP4bPNGNXWKaCbtvlEqpxkzGZJuv87IWdZy/Kj+RC2BWvRKFrWZzlnALcBefNuwLGd5yeDxaS2BWmga0u1HVsIC4BX3/d+0/m0+4TykG1wDFmoI1ELTkJB3WpbOCj5/9gf5Hl/vu/h7CqtTpF8MATHldRe3jexU/w2p2Gjo5Ua9GcPAzy52fUbsPOAAklaJJl3fy436TKx1sTtzxG52sTd1qCuToeyQYIRs1NvhVeBX4FzkZ95WTLjzxaHElGlI3nFAaKaATe7zVRmxX7nzOaHElGlITHzizll3yB53Pi2glrbop15WmlNd/N6MuBEX93uHutTpV0Pmuvi/MuKOwGe7g2CPLCGph3qpKjBDEo5z56xHUTKDshZKiBkiLHbn7zPiklmP+0IJMUOES915omWUzMYHmQsQBDNElsmtdZ+z1rYvcedd4eS0Rz/2sta72G9zxCbzyIKlTtql3wwZBn5xsesyYvs+uVi2IRXgDfKn31elYqOhXwypAM/hR9158mpbXPxYYXWK9IMhC4HX8CPz5TnKOx//E+4CDYFa9LIhs4FbgZ/cd1Vk6Vwe3nLXPKklUIteNmRb6u+f48cUWYy6a/YDx2sJ1EJzoly3DfkU+A64mfzjr2Fk9N4A7lVTp8hW9KaSlt3LysMmV84O5JEXHdfg08/jFLtTYjckmQFfBc4srCggj+D/4aJHrMsRxpBe1RRwrYqiwFwNfMj/9zls94htwU6F6auB79AUFTMxLmk7Gj/F9BBwu7Km6Ilp0ecocrc2gD+RtnIgKXtZ9AXA26n47US8WqpbdHvjgLnInidbUnFVZEFOlF3bsgi9tcYa4D0kf5V8Pwk8gW1IMyMhN59JtnuqI2mUu5GtA40MQm3PdBmyx0l0+ahewDYwixDb4i9CbBPMCLFtYiMkvZHyPuCijHgzpAvYVuMRYpvxR4i9riJS7IUuEWKvPIqQw18Kdgq+jTFKwl6bFyHJiyUPIN3jaGaoG4ZhGIZhGIZhGIZhGIZhBOc/v7stF6rkSdcAAAAASUVORK5CYII=" />
        </button>
        {props.answer !== null && 
        <div> 
        <div className={s.img} style={{ backgroundImage: `url('https://react-learn-words.herokuapp.com/${props.selectWord.image}')` }}></div>
        <p>{props.selectWord.word}-{props.selectWord.transcription}-{props.selectWord.wordTranslate}</p>
        </div>}
      </div>

      <div>{buttonsSelection}</div>

      {props.answer !== null && (
        <button onClick={props.buttonNextWord}>Дальше</button>
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    indexSelectWord: state.audioCall.levelGame.indexSelectWord,
    selectWord: state.audioCall.levelMove.selectWord,
    arrSelectWords: state.audioCall.levelMove.arrSelectWords,
    answer: state.audioCall.levelMove.answer,
    correctWords: state.audioCall.levelResult.correctWords,
    wrongWords: state.audioCall.levelResult.wrongWords,
  };
};

export default connect(mapStateToProps, {})(GameProcess);
