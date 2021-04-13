import React from 'react';
import s from './AudioCall.module.css'

import GameProcess from "./ GameProcess"
import LevelMenu from '../../UIKit/LevelMenu/LevelMenu'

const AudioCall = ({ levels, ...props }) => {
    const { start, buttonСhoiceLevel } = { ...props }

    return (
        <div className={`wrapper ${s.wrapper}`}>
            {!start ?
                <>
                    <h2 className="levelsTitle">Аудиовызов</h2>
                    <LevelMenu funClickButton={buttonСhoiceLevel} />
                </>
                : <GameProcess {...props} />}
        </div>
    )
}

export default AudioCall;