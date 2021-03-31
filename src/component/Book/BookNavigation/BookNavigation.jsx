import React from 'react';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SettingsIcon from '@material-ui/icons/Settings';
import s from './BookNavigation.module.css'

const useStyles = makeStyles({
    title: {
        fontFamily: "'Kiwi Maru', serif",
        fontSize: '20px'

    },
    img: {
        width: '40px'
    },
    list: {
        fontSize: '16px'
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
        return <li key={group}><NavLink to={`/book/textBook`} onClick={() => props.onGroupChanged(group)}>Раздел {group}</NavLink></li>
    })

    return (
        <div className={s.BookNavigation}>
            <div className={s.navigationContainer}>
                <h3 className={classes.title}>Электронный учебник</h3>
                <ul className={classes.list}>
                    {groups}
                </ul>
                <h3 className={classes.title}>Словарь</h3>
                <ul className={classes.list}>
                    <li>Изучаемые слова</li>
                    <li>Сложные слова</li>
                    <li><NavLink to={`/book/deleteWords`}>Удаленные слова</NavLink></li>
                </ul>
                <Box>
                    <SettingsIcon />
                    <h4>Настройки</h4>
                </Box>
            </div>
        </div>
    )
}

export default BookNavigation;