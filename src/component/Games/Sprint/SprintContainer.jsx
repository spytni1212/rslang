import React, { Component } from 'react';
import style from './SprintContainer.module.css';
import { setSprintGameStart, setSprintGameEnd, setTotalScore, setResultInfo } from '../../../redux/sprint-reducer';
import { connect } from 'react-redux';

class SprintContainer extends Component {
    state = {
        timeLeft: null,
        timer: null,
        firstWord: null,
        secondWord: null,
        score: 0,
        answerItem: 0,
        points: 10
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

        setTimeout(() => {
            this.props.setSprintGameStart();
            this.props.setSprintGameEnd();
            this.props.setTotalScore(this.state.score);
        }, 61000)

        return this.setState({
            timeLeft: 60, timer: timer
        });
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.answerChecker);
        clearInterval(this.state.timer);
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
        const { firstWord, secondWord, score, answerItem, points } = this.state;

        if ((firstWord.id === secondWord.id && e.target.id === 'correct') ||
            (firstWord.id === secondWord.id && e.key === 'ArrowLeft') ||
            (firstWord.id !== secondWord.id && e.target.id === 'wrong') ||
            (firstWord.id !== secondWord.id && e.key === 'ArrowRight')) {
            
            this.props.setResultInfo({firstWord: firstWord.word, secondWord: secondWord.wordTranslate, result: true});
            
            this.ul.children[answerItem].style.backgroundColor = 'green';

            if (answerItem === 3) {           
                for (let i = 0; i <= 3; i++) {
                    this.ul.children[i].style.backgroundColor = 'white';
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
                this.ul.children[i].style.backgroundColor = 'white';
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
                    <p id={`${this.state.firstWord.id}`}>{this.state.firstWord.word}</p>
                    <p id={`${this.state.secondWord.id}`}>{this.state.secondWord.wordTranslate}</p>
                </div>
                <div className={style.answerButtons}>
                    <button id='correct' className={style.correctButton} onClick={(e) => this.answerChecker(e)}>Правильно</button>
                    <button id='wrong' className={style.wrongButton} onClick={(e) => this.answerChecker(e)}>Неправильно</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    wordsInfo: state.sprint.wordsInfo
})

const mapDispatchToProps = (dispatch) => ({
    setSprintGameStart: () => dispatch(setSprintGameStart()),
    setSprintGameEnd: () => dispatch(setSprintGameEnd()),
    setTotalScore: (totalScore) => dispatch(setTotalScore(totalScore)),
    setResultInfo: (resultInfo) => dispatch(setResultInfo(resultInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(SprintContainer)