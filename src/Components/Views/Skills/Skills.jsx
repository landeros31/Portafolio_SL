import React from 'react'
import style from './Skills.module.css'
import react from '../../../Assets/react-logo.png'
import mongo from '../../../Assets/mongodb.png'
import express from '../../../Assets/express.png'
import node from '../../../Assets/node.png'
import java from '../../../Assets/java.jpg'
import python from '../../../Assets/python.png'
import js from '../../../Assets/js.png'
import angular from '../../../Assets/angular.png'
import mysql from '../../../Assets/mysql.jpg'





export const Skills = () => {
    return (
        <div className={style.containerskills}>
            <h2 className={style.titleskills}>Skills</h2>  
            <div className={style.contentAll}>
                <div className={style.contentCarrousel}>
                    
                    <figure><img src={node} alt="node" /></figure>
                    <figure><img src={react} alt="react" /></figure>
                    <figure><img src={express} alt="express" /></figure>
                    <figure><img src={mongo} alt="mongodb" /></figure>
                    <figure><img src={java} alt="java" /></figure>
                    <figure><img src={python} alt="python" /></figure>
                    <figure><img src={angular} alt="angular" /></figure>
                    <figure><img src={js} alt="javascript" /></figure>
                    <figure><img src={mysql} alt="mysql" /></figure>
                </div>
            </div>
        </div>
    )
}
