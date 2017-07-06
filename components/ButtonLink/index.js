import React from 'react'
import style from './ButtonLink.module.css'

const Button = ({ url, label }) => (
  <a className={style.buttonLink} href={url}>{label}</a>
)

export default Button
