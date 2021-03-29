import React from 'react';
import { NavLink } from "react-router-dom";
import SchoolIcon from '@material-ui/icons/School';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import TimelineIcon from '@material-ui/icons/Timeline';
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={s.navigation}>            
            <nav>
                <div className={s.navContainer}>
                    <div>
                        <SchoolIcon />
                    </div>
                   <NavLink to='/book'>Учебник</NavLink>
                </div>
                <div className={s.navContainer}>
                    <div>
                        <SportsEsportsIcon />
                    </div>
                    <NavLink to='/games'>Мини-игры</NavLink>
                </div>
                <div className={s.navContainer}>
                    <div>
                        <TimelineIcon />
                    </div>
                    <NavLink to='/statistics'>Статистика</NavLink>
                </div>
            </nav>
        </div>
            
        
    )
}

export default Navigation;