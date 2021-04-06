import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Howl } from "howler";
import Modal from "../../UIKit/Modal/Modal";
import ProgressBar from "../../UIKit/ProgressBar/ProgressBar";
import GameButton from "../../UIKit/GameButton/GameButton";

const GameProcess = ({ ...props }) => {

  return (
    <div>
      <Modal isOpen={props.indexSelectWord > 19 && true}>
      </Modal>
      <ProgressBar number={props.indexSelectWord} />

      <div>
    
      </div>
    </div>
  );
};

export default GameProcess;
