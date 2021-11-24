import React from 'react'
import style from './Developcard.module.css'


export const Developcard = (el) => {
    return (
        <div className={style.containercard}>
           <div className={style.contimg}>  
                <img src={el.img} alt={el.title} />
            </div>
                <h3 className={style.titleskill}>{el.title}</h3>
                <p className={style.paragraphskill}>{el.desc}</p>
        </div>
    )
}
