import React from 'react';
import { NavLink } from "react-router-dom";
import s from './Games.module.css'

const Games = () => {
    return (
        <div>
            <div className={`wrapper ${s.wrapper}`}>
               <h2>ПОИГРАЕМ?</h2>
               <div className={s.gamesContainer}>
                   <div className={s.gameContainer}>
                       <div className={s.gameIcon}></div>
                       <div className={s.gameDescription}>
                           <NavLink to='/games/savanna'><div className={s.gameName}>Саванна</div></NavLink>
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
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Games;