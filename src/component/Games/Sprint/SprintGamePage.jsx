import React, { useEffect } from 'react';
import Timer from './Timer';
import Words from './Words';
import style from './SprintGamePage.module.css'

export default function SprintGamePage() {
    return (
        <div className={style.gamePage}>
            <Timer />
            <Words />
        </div>
    );
}
