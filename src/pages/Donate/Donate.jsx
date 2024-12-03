import React from 'react'
import s from './donate.module.scss'
import Book from './../../assets/imgs/Vector.png';

const Donate = () => {
  return (
    <>
      <section className={s.container}>
        <div className={s.formContainer}>
          <div className={s.titleForm}>
            <img src={Book} alt="Imagem de livro" />
            <p>Informações do Livro</p>
          </div>
          <form action="">
            <div>
              <label id='title' htmlFor="">Título</label>
              <input id="title" name="title" type="text" />
            </div>
            <div>
              <label id="category" htmlFor="">Categoria</label>
              <input id="category" name='category' type="text" />
            </div>
            <div>
              <label id='autor' htmlFor="">Autor</label>
              <input id='autor' name='autor' type="text" />
            </div>
            <div>
              <label id='imagem' htmlFor="">Imagem</label>
              <input id='imagem' name='imagem' type="text" />
            </div>
            <button>Doar</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Donate