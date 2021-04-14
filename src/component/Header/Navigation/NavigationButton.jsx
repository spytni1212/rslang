import React from 'react'
import { NavLink } from "react-router-dom";
import Box from '@material-ui/core/Box';    
import s from './Navigation.module.css'

const NavigationButton = (props) => {
    
    return (
        <Box className={s.navContainer} onClick={props.toggleDrawer(false)}>
            {props.navDatum.icon}
            <NavLink to={`/${props.navDatum.link}`}>
                {props.navDatum.name}
            </NavLink>
        </Box>
    )
}

export default NavigationButton;