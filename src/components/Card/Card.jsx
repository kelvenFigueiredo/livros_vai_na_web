import React from 'react'
import s from './card.module.scss'

const Card = (props) => {
  return (
    <div className={s.container}>
        <img src={props.imagem} alt={imgDescription} />
        <p>{props.description}</p>
    </div>
  )
}

export default Card