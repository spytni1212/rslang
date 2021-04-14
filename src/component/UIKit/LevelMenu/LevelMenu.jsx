import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles({

    levelsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: '450px',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '20px',
        boxShadow: '2px 2px 7px 2px #b4b4c7',
    },
    title: {
        marginBottom: '1.2em',
    },
    levelButton: {
        width: '140px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1.2em',
        padding: '13px',
        background: '#bea6d09e',
        border: '2px solid #b493cc',
        borderRadius: '50%',
        cursor: 'pointer',
        "&:hover": {
            background: '#dcc8ea',
            boxShadow: '1px 1px 8px 1px #9d7cb5',
            transform: 'scale(1.05)',
            cursor: 'pointer'
        }
    },
    icon: {
        marginRight: '10px'
    }
    });

const getlevelPosition = (level) => {
    if (level === 0 || level === 4) {
        return 'flex-start'
    }
    if (level === 2) {
        return 'flex-end'
    }
    return 'auto'
}

const LevelMenu = ({ funClickButton }) => {
    const classes = useStyles();
    const arrLevels = [0, 1, 2, 3, 4, 5];

    return (
        <Box className={classes.levelsContainer} p={3}>
            {arrLevels.map((level, index) => {
                return (
                    <Box
                        key={index}
                        onClick={() => funClickButton(level)}
                        className={classes.levelButton}
                        style={{ alignSelf: getlevelPosition(level) }}
                    >
                        <DoneIcon className={classes.icon} />
                        <h4>Уровень {level + 1}</h4>
                    </Box>
                )
            })}
        </Box>
    )
}

export default LevelMenu;