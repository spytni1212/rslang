import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerWrapper}>
                <span className={s.text}>2021</span>
                <a href='https://rs.school/js/'><div className={s.rsschool} style={{backgroundImage: 'url(/img/rs_school_js.svg)'}}></div></a>
                <span className={s.text}>developers:</span>
                <div className={s.githubContainer}>
                    <a href='https://github.com/spytni1212'><span className={s.text}>Artem, &nbsp; </span></a>
                    <a href='https://github.com/katerinafedotova'><span className={s.text}>Ekaterina,&nbsp; </span></a>
                    <a href='https://github.com/ratomsky'><span className={s.text}>Maxim,&nbsp; </span></a>
                    <a href='https://github.com/VladMeleshko'><span className={s.text}>Vlad&nbsp;</span></a>
                </div>

            </div>
        </div>
    )
}

export default Footer;