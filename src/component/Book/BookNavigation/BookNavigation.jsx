import React, {useRef, useEffect} from 'react';
import { NavLink } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SchoolIcon from '@material-ui/icons/School';
import DeleteIcon from '@material-ui/icons/Delete';
import WarningIcon from '@material-ui/icons/Warning';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SettingsIcon from '@material-ui/icons/Settings';
import Modal from '../../UIKit/Modal/Modal'

import SettingsContainer from '../Settings/SettingsContainer'
import s from './BookNavigation.module.css'

const useStyles = makeStyles({
    title: {
        fontFamily: "'Kiwi Maru', serif",
        fontSize: '20px',
    },
    img: {
        width: '40px'
    },
    container: {
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: '7px',
    },
    list: {
        fontSize: '16px',
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    activeItem: {
        width: '100%',
        background: 'linear-gradient(45deg, #fcf2f7, transparent)',
        borderRadius: '10px'
    },
    arrow: {
        width: '16px',
        cursor: 'pointer'
    }
})

const BookNavigation = (props) => {
    const classes = useStyles()
    const ref = useRef()
    let groupCount = props.totalGroup;
    let groups = []

    for (let i = 1; i <= groupCount; i++) {
        groups.push(i)
    }
    
    useEffect(()=> {
        const items = Array.from(ref.current.children)
        items.forEach(item => item.classList.remove(classes.activeItem))
        const activeItem = items.filter((child)=> +child.dataset.id === props.currentGroup)
        const [itemToHighlight] = activeItem
        itemToHighlight.classList.add(classes.activeItem)
    })
    groups = groups.map((group, id) => {
        return (
            <li key={group} data-id={id+1}>
                <Box className={classes.container} >
                    <ArrowBackIosIcon className={classes.arrow} to={`/book`} onClick={() => {
                        props.onGroupChanged(group);
                    }} />
                    <NavLink to={`/book`} onClick={() => props.onGroupChanged(group)}>
                        Раздел {group}
                    </NavLink>
                    <div className={s.circle} style={{ background: props.difficultColor[id] }}></div>
                </Box>
            </li>
        )
    })

    // start pop-up
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    // end pop-up
    return (
        <div className={s.bookNavigation}>
            <Modal
                isOpen={open}
                children={<SettingsContainer handleClose={handleClose} />}
            />
            <div className={s.navigationContainer}>
                <Accordion style={{ background: '#e2cbd9' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Box className={classes.container}>
                            <SchoolIcon />
                            <h3 className={classes.title}>Электронный учебник</h3>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails style={{ flexDirection: 'column' }}>
                        <ul className={classes.list} ref={ref}>
                            {groups}
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ background: '#e2cbd9' }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Box className={classes.container}>
                            <SpellcheckIcon />
                            <h3 className={classes.title}>Словарь</h3>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails style={{ flexDirection: 'column' }}>
                        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box className={classes.container}>
                                <SchoolIcon />
                                <NavLink to={`/book/learningWords`}>
                                    <h4>Изучаемые слова</h4>
                                </NavLink>
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
                    </AccordionDetails>
                </Accordion>
                {
                    props.isLogin ?
                        <Accordion style={{ background: '#e2cbd9' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Box className={classes.container}>
                                    <SportsEsportsIcon />
                                    <h3 style={{ fontFamily: "'Kiwi Maru', serif", fontSize: '20px', }}>Игры</h3>

                                </Box>
                            </AccordionSummary>
                            <AccordionDetails style={{ flexDirection: 'column' }}>
                                <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '10px' }}>
                                    <NavLink to='/games/savannah/userGame'>Саванна</NavLink>
                                    <NavLink to='/games/audioCall/userGame'>Аудиовызов</NavLink>
                                    <NavLink to='/games/sprint/userGame'>Спринт</NavLink>
                                    <NavLink to='/games/authorGame/userGame'>Авторская игра</NavLink>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        : null
                }
                <Box className={classes.container} style={{justifyContent: 'flex-start', padding: '14px'}}>
                    <SettingsIcon/>
                    <h3 className={classes.title} style={{ cursor: 'pointer' }} onClick={handleOpen}>Настройки</h3>
                </Box>
            </div>
        </div >
    )
}

export default BookNavigation;