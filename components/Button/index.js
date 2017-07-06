import React from 'react'
import style from './Button.module.scss'

const Button = ({ url, label }) => (
  <a href={url}>{label}</a>
)

export default Button
