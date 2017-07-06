import React from 'react'
import style from './Hero.module.scss'

import Button from '../Button'

const Hero = () => (
  <section className={style.hero}>
    <header className={style.header}>
      <h1 className={style.title}>We build <strong>web</strong>, <strong>app</strong>, and <strong>experiences</strong></h1>
      <Button url="http://www.google.com" label="Contact us" />
    </header>
  </section>
)

export default Hero
