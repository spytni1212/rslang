import React, { Component } from 'react';
import style from './Timer.module.css';

export default class Timer extends Component {
    state = {
        timeLeft: null,
        timer: null,
    }

    componentDidMount() {
        let timer = setInterval(() => {
            let timeLeft = this.state.timeLeft - 1;
            if (timeLeft === 0) {
                clearInterval(timer);
            }
            this.setState({
                timeLeft: timeLeft
            })
        }, 1000)
        return this.setState({
            timeLeft: 60, timer: timer
        });
    }

    render() {
        return <div className={style.timer}>{this.state.timeLeft}</div>
    }
}
