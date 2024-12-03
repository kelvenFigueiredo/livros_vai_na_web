import React from 'react'
import s from './motivationCard.module.scss'

const Card = (props) => {
  return (
    <div className={s.container}>
        <img src={props.imagem} alt={props.imgDescription} />
        <p>{props.description}</p>
    </div>
  )
}

export default Card