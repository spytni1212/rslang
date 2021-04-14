import React from "react";
import LevelMenu from "../../UIKit/LevelMenu/LevelMenu";
import s from "./AuthorGame.module.css";
import GameProcess from "./GameProcess";

const AuthorGame = (props) => {
  const { start, buttonСhoiceLevel } = props;
  return (
    <div className={`${s.wrapper}`}>
      {start === false ? (
        <LevelMenu funClickButton={buttonСhoiceLevel} />
      ) : (
        <GameProcess {...props} />
      )}
    </div>
  );
};

export default AuthorGame;
