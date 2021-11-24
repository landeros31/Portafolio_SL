import React from 'react'
import style from './Header.module.css'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'


import { Link } from "react-scroll";


const Header = () => {


    return (
        <div className={style.Header}>
            <div className={style.name}>
                <h1><Link activeClass="active"
                            to="principal"
                            smooth={true}
                            offset={-150}
                            duration={500}
                            delay={200}
                        >
                         Sebastian Landeros
                        </Link> </h1>
            </div>
            <div className={style.list}>
                <ul className={style.orderlist}>
                   <li><Link activeClass="active"
                            to="about"
                            smooth={true}
                            duration={500}
                            delay={200}
                        >
                         About me
                        </Link> </li>
                        <li><Link activeClass="active"
                            to="projects"
                            smooth={true}
                            duration={500}
                            delay={200}
                        >
                         Projects
                        </Link> </li>
                        <li><Link activeClass="active"
                            to="contact"
                            smooth={true}
                            duration={500}
                            delay={200}
                        >
                         Contact
                        </Link> </li>
                   <a className={style.an} href="https://github.com/landeros31" target="_blank" rel="noreferrer"><li className={style.icon}><FontAwesomeIcon icon={faGithub} /></li></a> 
                   <a className={style.an} href="https://www.linkedin.com/in/sebastian-landeros-b976341a1/" target="_blank" rel="noreferrer"><li className={style.icon}><FontAwesomeIcon icon={faLinkedin} /></li></a> 
                </ul>
            </div>
        </div>
    )
}

export default Header
