import React, { Component } from 'react';
import SprintGamePage from './SprintGamePage';
import SprintGameResult from './SprintGameResult';
import { setSprintGameStart } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';
import style from './SprintMainPage.module.css';

class SprintMainPage extends Component {
    state = {
        endGame: false,
        style: {
            display: 'block'
        }
    }

    handleStartGame = () => {
        this.props.setSprintGameStart();
        this.setState({
            style: {
                display: 'none'
            }
        });
    }
    
    render() {
        return (
            <div className={style.mainPage}>
                <button className={style.startButton} style={this.state.style} onClick={this.handleStartGame}>Начать</button>
                {this.props.sprintGameStart && <SprintGamePage />}
                {this.state.endGame && <SprintGameResult />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sprintGameStart: state.sprint.sprintGameStart
})

const mapDispatchToProps = (dispatch) => ({
    setSprintGameStart: () => dispatch(setSprintGameStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SprintMainPage)