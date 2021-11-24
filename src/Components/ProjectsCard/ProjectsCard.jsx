import React from 'react'
import style from './ProjectsCard.module.css'

export const ProjectsCard = (el) => {
    return (
        <div className={style.containert}>
            <h3 className={style.titleprojects}>{el.title}</h3>
            <div className={style.containerImgProjects}>
                <img src={el.img} alt={el.title} className={style.img} />
            </div>
            <h5 className={style.tech}>{el.tech}</h5>
            <p className={style.descriptionProjects}>{el.description} </p>
            <div className={style.containerButtonP}>
            <a className={style.an}  href={el.deploy} target="_blank" rel="noreferrer">  <button className={style.buttonv}>Visualize</button> </a>
            <a className={style.an}  href={el.github} target="_blank" rel="noreferrer" > <button className={style.buttong}>Github</button> </a>

            </div>
            

            
        </div>
    )
}
