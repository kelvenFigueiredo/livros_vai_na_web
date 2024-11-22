import React from 'react'
import { Link } from 'react-router-dom';
import s from './header.module.scss';
import logo1 from './../../assets/logo/logo1.png'
import searchIcon from './../../assets/icons/search.png'

function Header() {

  return (
    <header className={s.header}>
      <section>
        <Link className={s.logoHeader} to="/">
          <img src={logo1} alt="logo" />
          <h1>livros vai na web</h1>
        </Link> 
      </section>
      <nav className={s.navHeader}>
        <ul>
          <li>
            <Link className={s.link} to="/">Inicio</Link>
          </li>
          <li>
            <Link className={s.link} to="/DonatedBooks">Livros Doados</Link>
          </li>
          <li>
            <Link className={s.link} to="/Donate">Quero Doar</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <section className={s.searchBar}>
        <input
          type="search" 
          name=""
          id=""
          placeholder="O que você procura?"
        />
        <button>
          <img 
            src={searchIcon} 
            alt="Icone de lupa" 
          />
        </button>
      </section>
    </header>
  )
}

export default Header