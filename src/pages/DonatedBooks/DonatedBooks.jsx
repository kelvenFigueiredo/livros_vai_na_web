import React from 'react'
import s from './donateBooks.module.scss';
import BookCard from '../../components/Cards/BookCards/BookCard';
import Book from './../../assets/imgs/book.png';

const DonatedBooks = () => {
  return (
    <>
      <section className={s.container}>
        <div className={s.headerContent}>
          <h1>livros doados</h1>
        </div>
        <div className={s.content}>
          <BookCard imagem={Book} imgDescription= "Imagem de livro " Text="O protagonista Susanne Andrade Ficção" />
        </div>
      </section>
    </>
  )
}

export default DonatedBooks