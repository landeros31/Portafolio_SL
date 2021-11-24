import React from 'react'
import style from './Footer.module.css'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <div className={style.containerFooter}>
            <div className={style.logos}>
                   <a href="https://github.com/landeros31" target="_blank" rel="noreferrer" className={style.an}><div className={style.icon}><FontAwesomeIcon icon={faGithub} /></div> </a> 
                    <a href="https://www.linkedin.com/in/sebastian-landeros-b976341a1/" target="_blank" rel="noreferrer" className={style.an}><div className={style.icon}><FontAwesomeIcon icon={faLinkedin} /></div></a>
            </div>
            <div className={style.reserved}>
                <p>© 2021 Landeros31 all right reserved.</p>
            </div>
        </div>
    )
}
