import React from 'react'
import style from './Projects.module.css'
import ProjectsC from '../../../Data/ProjectsC'
import { ProjectsCard } from '../../ProjectsCard/ProjectsCard'

export const Projects = () => {

    return (
        <section id="projects">
        <div className={style.containerVP}>
            <h2 className={style.titleProject}>Projects</h2>
            <div className={style.projects}>
                {
                    ProjectsC.map(el => <ProjectsCard key={el.id} title={el.title} img={el.img} description={el.description} tech={el.techStack} github={el.github} deploy={el.deploy}  />)
                }
            </div>
        </div>
        </section>
    )
}
