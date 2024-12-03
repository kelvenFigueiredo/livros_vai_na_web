import React from 'react'
import s from './home.module.scss';
import Card from '../../components/Cards/Card';
import community from './../../assets/imgs/community.png';
import reading from './../../assets/imgs/reading.png';
import transform from './../../assets/imgs/transform.png';
import balance from './../../assets/imgs/balance.png';


function Home() {
  return (
    <>
      <section className={s.bannerSection}>
          <p>venha fazer parte da maior rede de doação</p>
      </section>
      <section className={s.cardSection}>
        <p className={s.text}>Por que devo doar?</p>
        <div className={s.cardDiv}>
          <Card imagem={community} imgDescription="community" description="Oferece livro a quem não tem acesso, ajudando a reduzir a exclusão social."/>
          <Card imagem={reading} imgDescription="reading" description="Estimula o hábito da leitura e o aprendizado contínuo."/>
          <Card imagem={transform} imgDescription="transform" description="Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas."/>
          <Card imagem={balance} imgDescription="balance" description="Garante que todos, independentemente da sua condição, tenham oportunidades de aprendizado."/>
        </div>
      </section>
    </>
  )
}

export default Home