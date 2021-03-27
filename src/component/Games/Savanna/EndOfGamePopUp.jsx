import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  popUp: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '0.5em',
    cursor: 'pointer',
    "&:hover": {
      transform: 'scale(1.05)'
  }
  },
}));
 
export default function EndOfGamePopUp(props) {
  const classes = useStyles();
  const body = (
    <div className={classes.popUp}>
      <h2 id="simple-modal-title">Вот мы и закончили!</h2>
      <p id="simple-modal-description">
        А набралось, в итоге, { props.points } баллов из 200 !
      </p>
      <Box className={classes.footer}>
        <ArrowBackIcon/>
        <h3 onClick={props.handleClose} variant="outlined">Вернуться к выбору игры </h3>
      </Box>
    </div>
  );

  return (
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
}
