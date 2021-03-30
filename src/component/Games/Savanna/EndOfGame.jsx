import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  popUp: {
    // position: 'absolute',
    // top: '35%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fffefe',
    border: 'none',
    borderRadius: '10px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    alignItems: 'center',
    zIndex:'1000'
  },
  text: {
    marginBottom: '20px',
    textAlign: 'center'
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

  return (
    <Box className={classes.popUp}>
      <h2 className={classes.text}>Поздравляю, вот мы и закончили!</h2>
      <p className={classes.text}>
        Вот сколько баллов, в итоге, удалось набрать: {props.points}/ 200 !
      </p>
      <Box className={classes.footer}>
        <ArrowBackIcon />
        <h3 onClick={props.handleClose} variant="outlined">Вернуться к выбору игры </h3>
      </Box>
    </Box>
  );
}
