import React from 'react'
import style from './hero.module.scss'

import ButtonLink from './button-link.js'

const Hero = () => (
  <section className={style.hero}>
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>We build <strong>web</strong>, <strong>apps</strong>, and <strong>experiences</strong></h1>
        <ButtonLink url="mailto:info@incode.it" label="Contact us" />
      </div>
    </header>
  </section>
)

export default Hero
