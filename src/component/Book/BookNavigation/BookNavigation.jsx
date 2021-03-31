import React from 'react';
import { NavLink } from "react-router-dom";
import s from './BookNavigation.module.css'

const BookNavigation = (props) => {

    let groupCount = props.totalGroup;
    let groups = []

    for (let i = 1; i <= groupCount; i++) {
        groups.push(i)
    }

    groups = groups.map(group => {
        return <li key={group}><NavLink to={`/book/textBook`} onClick={()=> props.onGroupChanged(group)}>Раздел {group}</NavLink></li>
    })

    return (
        <div className={s.BookNavigation}>
            <div className={s.navigationContainer}>
                <span>Электронный учебник</span>
                <ul>
                    {groups}
                </ul>
                <span>Словарь</span>
                <ul>
                    <li>Изучаемые слова</li>
                    <li><NavLink to={`/book/difficultWords`}>Сложные слова</NavLink></li>
                    <li><NavLink to={`/book/deleteWords`}>Удаленные слова</NavLink></li>
                </ul>
                <span>Настройки</span>
            </div>
        </div>
    )
}

export default BookNavigation;