import React from 'react'
import style from "./Principal.module.css"
import Typewriter from "typewriter-effect"
import sebastian from '../../../Assets/sebastian.png'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

const Principal = () => {
    return (
        <section id="principal">

        <div className={style.principal}>
            <div className={style.nameb}><h1 className={style.names}>Sebastian Landeros</h1></div>  
          <div className={style.containerphoto}>
               <img className={style.photo} src={sebastian} alt="sebastian Landeros" /> 
            </div>
            <div className={style.containertext}>
                <div className={style.professional} >
                <Typewriter
                options={{autoStart:true,
                loop:true,
                delay:40,
                strings:[
                    "Mechatronic Engineer",
                    "FullStack Developer",
                ],
                }}/>
                </div>
                <p>Welcome to my portfolio, you will find some of the projects that I have developed, I like to create dynamic websites and be in constant learning to improve my skills as a developer.</p>
                <div className={style.containerbuton}>
                   <a href="https://drive.google.com/file/d/1TvS9ocS9dCr25FBy83_B4I_eWQPmDpas/view?usp=sharing" target="_blank" rel="noreferrer" className={style.an} ><button className={style.button1}>CV/Resume</button></a> 
                   <a href="https://github.com/landeros31" target="_blank" rel="noreferrer" className={style.an}><button className={style.button2}><FontAwesomeIcon icon={faGithub} />Profile Github</button></a> 
                </div>
            </div>

        </div>
        </section>
    )
}
export default Principal
