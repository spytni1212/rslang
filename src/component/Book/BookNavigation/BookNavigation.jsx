import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SchoolIcon from '@material-ui/icons/School';
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import s from './BookNavigation.module.css'

const useStyles = makeStyles({
    title: {
        fontFamily: "'Kiwi Maru', serif",
        fontSize: '20px'

    },
    img: {
        width: '40px'
    },
    container: {
        margin: '10px 0',
        display: 'flex',
        columnGap: '7px',
    },
    list: {
        fontSize: '16px',
        listStyleType: 'none'
    },
    arrow: {
        width: '16px',
        cursor: 'pointer'
    }
})

const BookNavigation = (props) => {
    const classes = useStyles()
    let groupCount = props.totalGroup;
    let groups = []

    for (let i = 1; i <= groupCount; i++) {
        groups.push(i)
    }

    groups = groups.map(group => {
        return (
            <li key={group}>
                <Box className={classes.container}>
                    <ArrowBackIosIcon className={classes.arrow} o={`/book/textBook`} onClick={() => props.onGroupChanged(group)} />
                    <NavLink to={`/book/textBook`} onClick={() => props.onGroupChanged(group)}>
                        Раздел {group}
                    </NavLink>
                </Box>
            </li>
        )
    })

    return (
        <div className={s.bookNavigation}>
            <div className={s.navigationContainer}>
                <h3 className={classes.title}>Электронный учебник</h3>
                <ul className={classes.list}>
                    {groups}
                </ul>
                <h3 className={classes.title}>Словарь</h3>
                <Box>
                    <Box className={classes.container}>
                        <SchoolIcon />
                        <h4>Изучаемые слова</h4>
                    </Box>
                    <Box className={classes.container}>
                        <WarningIcon />
                        <NavLink to={`/book/difficultWords`}>
                            <h4>Сложные слова</h4>
                        </NavLink>
                    </Box>
                    <Box className={classes.container}>
                        <DeleteIcon />
                        <NavLink to={`/book/deleteWords`}>
                            <h4>Удаленные слова</h4>
                        </NavLink>
                    </Box>
                </Box>
                <Box className={classes.container}>
                    <NavLink to={`/book/settings`}>
                        <h3 className={classes.title}>Настройки</h3>
                    </NavLink>
                </Box>
            </div>
        </div>
    )
}

export default BookNavigation;