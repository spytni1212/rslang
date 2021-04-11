import React from "react";
import LevelMenu from "../../UIKit/LevelMenu/LevelMenu";
import s from "./AuthorGame.module.css";
import GameProcess from "./GameProcess";

const AuthorGame = (props) => {
  const { start, buttonСhoiceLevel } = props;
  return (
    <div>
      <div className={`wrapper ${s.wrapper}`}>
        {start === false ? (
          <LevelMenu funClickButton={buttonСhoiceLevel} />
        ) : (
          <GameProcess {...props}/>
        )}
      </div>
    </div>
  );
};

export default AuthorGame;
