import React, { Component } from 'react';
import style from './SprintContainer.module.css';
import Modal from "../../UIKit/Modal/Modal";
import { setResetSprintGameStart, setResetSprintGameEnd, setSprintGameEnd, setResultInfo, setResetWordsInfo, setResetResultInfo } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';

class SprintContainer extends Component {
    state = {
        timeLeft: null,
        timer: null,
        timeout: null,
        firstWord: null,
        secondWord: null,
        score: 0,
        answerItem: 0,
        points: 10,
        results: {correct: 0, wrong: 0}
    }

    componentWillMount() {
        this.showNextPair();
    }

    componentDidMount() {
        document.addEventListener('keydown', this.answerChecker);

        let timer = setInterval(() => {
            let timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) {
                clearInterval(timer);
            }
            this.setState({
                timeLeft: timeLeft
            })
        }, 1000)

        const timeoutGameResults = setTimeout(() => {
            this.analysisResults();
            this.props.setSprintGameEnd();
            document.removeEventListener('keydown', this.answerChecker);
        }, 61000)

        return this.setState({
            timeLeft: 60, timer: timer, timeout: timeoutGameResults
        });
    }

    componentWillUnmount() {
        clearTimeout(this.state.timeout);
        clearInterval(this.state.timer);
        document.removeEventListener('keydown', this.answerChecker);
        this.props.setResetWordsInfo();
        this.props.setResetResultInfo();
        this.props.setResetSprintGameEnd();
        this.props.setResetSprintGameStart();
    }

    analysisResults = () => {
        let correct = 0, wrong = 0;
        this.props.resultInfo.map(res => {
            res.result ? correct++ : wrong ++
        })
        this.setState({
            results: { correct, wrong }
        });
    }

    resetStore = () => {
        this.props.setResetSprintGameStart();
    }

    showNextPair = () => {
        let first, second;
        if (Math.ceil(Math.random() * 2) === 1) {
            first = second = this.props.wordsInfo[Math.floor(Math.random() * this.props.wordsInfo.length)];
        } else {
            first = this.props.wordsInfo[Math.floor(Math.random() * this.props.wordsInfo.length)];
            second = this.props.wordsInfo[Math.floor(Math.random() * this.props.wordsInfo.length)];
        }
        this.setState({
            firstWord: first,
            secondWord: second
        })
    }

    getListRef = (node) => {this.ul = node};

    answerChecker = (e) => {
        if (e.key && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
            return;
        }

        const { firstWord, secondWord, score, answerItem, points } = this.state;

        if ((firstWord._id === secondWord._id && e.target.id === 'correct') ||
            (firstWord._id === secondWord._id && e.key === 'ArrowLeft') ||
            (firstWord._id !== secondWord._id && e.target.id === 'wrong') ||
            (firstWord._id !== secondWord._id && e.key === 'ArrowRight')) {
            
            this.props.setResultInfo({firstWord: firstWord.word, secondWord: secondWord.wordTranslate, result: true});
            
            this.ul.children[answerItem].style.backgroundColor = 'rgb(47,207,68)';

            if (answerItem === 3) {           
                for (let i = 0; i <= 3; i++) {
                    this.ul.children[i].style.backgroundColor = 'rgb(108, 117, 125)';
                }

                if (points < 80) {
                    this.setState({
                        points: points * 2
                    })
                }
            }
    
            if (answerItem === 3) {
                this.setState({
                    score: score + points,
                    answerItem: 0
                });
            } else {
                this.setState({
                    score: score + points,
                    answerItem: answerItem + 1
                });
            }
        } else {
            this.props.setResultInfo({firstWord: firstWord.word, secondWord: secondWord.wordTranslate, result: false});

            for (let i = 0; i <= 3; i++) {
                this.ul.children[i].style.backgroundColor = 'rgb(108, 117, 125)';
            }

            this.setState({
                answerItem: 0,
                points: 10
            })
        }
        this.showNextPair();
    }

    render() {
        return (
            <div className={style.gamePage}>

                <Modal isOpen={this.props.sprintGameEnd}>
                    <div className={style.endGame}>
                        <div>
                            <p className={style.finalScore}>Ваш результат: {this.state.score}</p>
                            <p>Вы знаете {this.state.results.correct} слов(-a)</p>
                            <p>Вы не знаете {this.state.results.wrong} слов(-a)</p>
                        </div>
                        <div>
                            <table>
                                <tbody>
                                    {this.props.resultInfo.map((res, index) => {
                                        const correctAnswer = res.result ? '✓' : 'X';
                                        return (
                                            <tr key={index}>
                                                <td>{res.firstWord}</td>
                                                <td>{res.secondWord}</td>
                                                <td>{correctAnswer}</td>
                                            </tr>
                                    )})}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <button className={style.beginAgainButton} onClick={this.resetStore}>Начать сначала</button>
                        </div>
                    </div>
                </Modal>
                <div className={style.gameInstruction}>
                    <p className={style.gameInstructionRules}>Перед вами слово и перевод. Вам нужно выбрать, правильно это или неправильно.</p>
                    <p className={style.gameInstructionRules}>1. Используйте мышь, чтобы выбрать.</p>
                    <p className={style.gameInstructionRules}>2. Используйте клавиши влево и вправо.</p>
                </div>
                <div className={style.timer}>{this.state.timeLeft}</div>
                <div className={style.scoreInfo}>
                    <p className={style.score}>Счет: {this.state.score}</p>
                    <p className={style.points}>+{this.state.points} за правильный ответ</p>
                    <ul ref={this.getListRef} className={style.answersList}>
                        {[1, 2, 3, 4].map(item => {
                            return <li key={item} className={style.answer}></li>
                        })}
                    </ul>
                </div>
                <div className={style.comparedWords}>
                    <p id={`${this.state.firstWord._id}`}>{this.state.firstWord.word}</p>
                    <p id={`${this.state.secondWord._id}`}>{this.state.secondWord.wordTranslate}</p>
                </div>
                <div className={style.answerButtons}>
                    <button id='correct' className={style.correctButton} tabIndex={this.props.sprintGameEnd ? -1 : 0} onClick={(e) => this.answerChecker(e)}>Правильно</button>
                    <button id='wrong' className={style.wrongButton} tabIndex={this.props.sprintGameEnd ? -1 : 0} onClick={(e) => this.answerChecker(e)}>Неправильно</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sprintGameStart: state.sprint.sprintGameStart,
    sprintGameEnd: state.sprint.sprintGameEnd,
    wordsInfo: state.sprint.wordsInfo,
    resultInfo: state.sprint.resultInfo
})

const mapDispatchToProps = (dispatch) => ({
    setResetSprintGameStart: () => dispatch(setResetSprintGameStart()),
    setSprintGameEnd: () => dispatch(setSprintGameEnd()),
    setResetSprintGameEnd: () => dispatch(setResetSprintGameEnd()),
    setResultInfo: (resultInfo) => dispatch(setResultInfo(resultInfo)),
    setResetWordsInfo: () => dispatch(setResetWordsInfo()),
    setResetResultInfo: () => dispatch(setResetResultInfo())
})

export default connect(mapStateToProps, mapDispatchToProps)(SprintContainer)