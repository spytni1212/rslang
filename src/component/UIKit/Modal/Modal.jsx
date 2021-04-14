import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import s from "./Modal.module.css";

const Modal = ({ ...props }) => {

  const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const containerVariant = {
    initial: { top: "-50%", transition: { type: "spring" } },
    isOpen: { top: "50%" },
    exit: { top: "-50%" },
  };

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          className={s.overlay}
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
        >
          <motion.div className={s.modalContainer} variants={containerVariant}>
            
            {props.children}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default Modal;
