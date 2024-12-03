import React from 'react'
import s from './bookCard.module.scss';

const BookCard = (props) => {
  return (
    <div className={s.content}>
        <img src={props.imagem} alt={props.imgDescription} />
        <p>{props.Text}</p>
    </div>
  )
}

export default BookCard