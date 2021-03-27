import React, { Component } from 'react';
import SprintGameStart from './SprintGameStart';
import SprintGamePage from './SprintGamePage';
import SprintGameResult from './SprintGameResult';
import { setSprintGameStart } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';
import style from './SprintMainPage.module.css';

const SprintMainPage = (props) => {    
    return (
        <div className={style.mainPage}>
            {!props.sprintGameStart && !props.sprintGameEnd && <SprintGameStart />}
            {props.sprintGameStart && <SprintGamePage />}
            {props.sprintGameEnd && <SprintGameResult />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    sprintGameStart: state.sprint.sprintGameStart,
    sprintGameEnd: state.sprint.sprintGameEnd
})

const mapDispatchToProps = (dispatch) => ({
    setSprintGameStart: () => dispatch(setSprintGameStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SprintMainPage)