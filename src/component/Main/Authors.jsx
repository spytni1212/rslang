import React from 'react';
import s from './Authors.module.css';

const Authors = () => {
    const info = {
        dev1: {
            name: 'Артём',
            photo: './img/Artem.jpg',
            position: 'Teamlead',
            contribution: '- Координация и мотивация команды;  - Разработка электронного учебника со словарем;  - Разработка регистрации на сайте.',
            gitHubLink: 'https://github.com/spytni1212'
        },
        dev2: {
            name: 'Екатерина',
            photo: './img/Ekaterina.jpg',
            position: 'Developer',
            contribution: '- Разработка игры Savanna;  - Стилизация проекта.',
            gitHubLink: 'https://github.com/katerinafedotova'
        },
        dev3: {
            name: 'Максим',
            photo: './img/Max.jpg',
            position: 'Developer',
            contribution: '- Разработка игры AudioCall;  - Разработка игры Своя игра.',
            gitHubLink: 'https://github.com/ratomsky'
        },
        dev4: {
            name: 'Владислав',
            photo: './img/Vlad.jpg',
            position: 'Developer',
            contribution: '- Разработка игры Sprint;  - Реализация раздела "О команде".',
            gitHubLink: 'https://github.com/VladMeleshko'
        }
    }

    return (
        <div className={s.aboutUs}>
            <h2 className={s.aboutUsTitle}>О КОМАНДЕ</h2>
            <div className={s.aboutUsContainer}>
                {[0, 1, 2, 3].map(i => {
                    const personalContribution = info[`dev${[i + 1]}`].contribution.split('  ');
                    return (<div key={i} className={s.personContainer}>
                        <div className={s.photo}>
                            <img className={s.photoImage} src={info[`dev${[i + 1]}`].photo} alt={`${info[`dev${[i + 1]}`].name}`}/>
                        </div>
                        <div className={s.personalInfo}>
                            <a className={s.developerName} href={info[`dev${[i + 1]}`].gitHubLink}>{info[`dev${[i + 1]}`].name}</a>
                            <p className={s.developerPosition}>{info[`dev${[i + 1]}`].position}</p>
                            <ul className={s.developerContribution}>
                                {personalContribution.map((contribution, index) => <li key={index} className={s.contribution}>{contribution}</li>)}
                            </ul>
                        </div>
                    </div>)})}
            </div>
        </div>
    )
}

export default Authors;