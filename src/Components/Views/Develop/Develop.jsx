import React from 'react'
import Cards from '../../../Data/cards'
import { Developcard } from '../../Developcard/Developcard'
import style from './Develop.module.css'


export const Develop = () => {
    return (
        <section id="about">
        <div className={style.container} >
            {
             Cards.map(el=> <Developcard img={el.img} title={el.title} desc={el.description} key={el.id} /> )
            }
        </div>
        </section>
    )
}
