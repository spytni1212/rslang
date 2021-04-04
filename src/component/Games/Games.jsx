import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Games.module.css'

const Games = () => {
    const games = {
        game1: {
            name: 'Саванна',
            picture: './img/Games/Savannah.jpg',
            description: 'Саванна – игра, в которой дается английское слово, а вам нужно нажать на правильное русское слово.',
            link: '/games/savannah'
        },
        game2: {
            name: 'Аудиовызов',
            picture: './img/Games/AudioCall.jpg',
            description: 'Аудиовызов – прослушиваете английское слово и выбираете один из пяти вариантов ответа.',
            link: '/games/audioCall'
        },
        game3: {
            name: 'Спринт',
            picture: './img/Games/Sprint.jpg',
            description: 'Спринт - скоростная тренировка. В течение минуты нужно угадывать, верный перевод предложен к английскому слову или нет.',
            link: '/games/sprint'
        },
        game4: {
            name: 'Авторская игра',
            picture: './img/Games/Sprint.jpg',
            description: 'Описание игры',
            link: '/games/authorGame'
        }
    }

    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
               <h2>ПОИГРАЕМ?</h2>
               <div className={s.gamesContainer}>
                    {[0, 1, 2, 3].map(i => {
                        return (
                            <NavLink to={games[`game${i + 1}`].link} className={s.gameLink}>
                                <div key={i} className={s.gameContainer}>
                                    <div className={s.gameIcon}>
                                        <img className={s.gamePicture} src={games[`game${i + 1}`].picture} alt={games[`game${i + 1}`].name}/>
                                    </div>
                                    <div className={s.gameDescription}>
                                        <div className={s.gameName}>{games[`game${i + 1}`].name}</div>
                                        <div className={s.description}>{games[`game${i + 1}`].description}</div>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                   {/* <div className={s.gameContainer}>
                       <div className={s.gameIcon}></div>
                       <div className={s.gameDescription}>
                           <NavLink to='/games/savannah'><div className={s.gameName}>Саванна</div></NavLink>
                           <div className={s.description}>Описание игры</div>
                       </div>
                   </div>
                   <div className={s.gameContainer}>
                       <div className={s.gameIcon}></div>
                       <div className={s.gameDescription}>
                           <NavLink to='/games/audioCall'><div className={s.gameName}>Аудиовызов</div></NavLink>                           
                           <div className={s.description}>Описание игры</div>
                       </div>
                   </div>
                   <div className={s.gameContainer}>
                       <div className={s.gameIcon}></div>
                       <div className={s.gameDescription}>
                       <NavLink to='/games/sprint'><div className={s.gameName}>Спринт</div></NavLink>                           
                           <div className={s.description}>Описание игры</div>
                       </div>
                   </div>
                   <div className={s.gameContainer}>
                       <div className={s.gameIcon}></div>
                       <div className={s.gameDescription}>
                           <NavLink to='/games/authorGame'><div className={s.gameName}>Авторская игра</div></NavLink>
                           <div className={s.description}>Описание игры</div>
                       </div>
                   </div> */}
               </div>
            </div>
        </div>
    )
}

export default Games;