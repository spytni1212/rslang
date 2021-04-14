import React from "react";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  word: {
    padding: "0.8em",
    background: "#f3d7e6",
    boxShadow: "2px 2px 7px 2px #b4b4c7",
    border: "2px #0000002b solid",
    borderRadius: "10px",
    outline: "none",
    cursor: "pointer",
    fontSize: "16px",
    "&:hover": {
      transform: "scale(1.1)",
    },
    "&:disabled": {
        border: `1px solid #999999`,       
    },
  },
  correct: {
    borderColor: "#1f841f",
    background: "#97e697",
    color: `black`
  },
  wrong: {
    borderColor: "#e00606",
    background: "#de8d8d",
    color: `black`
  },
  block: {
    borderColor: "grey",
    background: "grey",
    "&:hover": {
      transform: "scale(1)",
    },
  },
});


const GameButton = ({
  typeButton,
  funClickButton,
  funProp,
  disabled,
  ...props
}) => {
  const classes = useStyles();

  return (
    <button
      disabled={disabled}
      onClick={() => {
        funClickButton(funProp);
      }}
      className={`${classes.word} ${classes[typeButton]}`}
    >
      {props.children}
    </button>
  );
};

export default GameButton;
