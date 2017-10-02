import React from 'react'
import style from './button-link.module.scss'

const Button = ({ url, label }) => (
  <a className={style.buttonLink} href={url}>{label}</a>
)

export default Button
