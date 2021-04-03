import React from 'react';
import SchoolIcon from '@material-ui/icons/School';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TimelineIcon from '@material-ui/icons/Timeline';
import NavigationButton from './NavigationButton'
import s from './Navigation.module.css'

const Navigation = () => {
    const navData = [
        {
            name: "Учебник",
            icon: <SchoolIcon style={{ color: '#414954' }} />,
            link: "book"
        },
        {
            name: "Мини-игры",
            icon: <SportsEsportsIcon style={{ color: '#414954' }} />,
            link: "games"
        },
        {
            name: "Статистика",
            icon: <TimelineIcon style={{ color: '#414954' }} />,
            link: "statistics"
        }
    ]

    return (
        <div>
            <nav className={s.navigation}>
                {navData.map((navDatum) => {
                    return <NavigationButton navDatum={navDatum} />
                })}
            </nav>
        </div>


    )
}

export default Navigation;