import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
                <h2>НЕКОГДА ОБЪЯСНЯТЬ, БЫСТРЕЕ УЧИ АНГЛИЙСКИЙ!</h2>
                <div className={s.promoContainer}>
                    <div className={s.videoContainer}>
                        video(photo)
                    </div>
                    <div className={s.promoDescription}>
                        <p>
                            Промо рассказ о том, почему надо выбирать именно наше приложение, его преимущества, возможности
                        </p>
                    </div>
                </div>
                <h3>О КОМАНДЕ</h3>
                <div className={s.aboutUsContainer}>
                    <div className={s.personContainer}>
                        <div className={s.photo}></div>
                        <p>О вкладе каждого члена команды</p>
                    </div>
                    <div className={s.personContainer}>
                        <div className={s.photo}></div>
                        <p>О вкладе каждого члена команды</p>
                    </div>
                    <div className={s.personContainer}>
                        <div className={s.photo}></div>
                        <p>О вкладе каждого члена команды</p>
                    </div>
                    <div className={s.personContainer}>
                        <div className={s.photo}></div>
                        <p>О вкладе каждого члена команды</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;