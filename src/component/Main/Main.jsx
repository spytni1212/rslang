import React from 'react';
import ReactPlayer from 'react-player'
import Authors from './Authors';
import s from './Main.module.css';

const Main = () => {
    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
                <h2>НЕКОГДА ОБЪЯСНЯТЬ, БЫСТРЕЕ УЧИ АНГЛИЙСКИЙ!</h2>
                <div className={s.promoContainer}>
                    <div className={s.videoContainer}>
                        <ReactPlayer url ='https://www.youtube.com/watch?v=jrTMMG0zJyI' controls width='100%' height='100%'/>
                    </div>
                    <div className={s.promoDescription}>
                        <p>
                            Промо рассказ о том, почему надо выбирать именно наше приложение, его преимущества, возможности
                        </p>
                    </div>
                </div>
                <Authors />
            </div>
        </div>
    )
}

export default Main;