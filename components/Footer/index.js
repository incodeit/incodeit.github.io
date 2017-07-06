import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import style from './Footer.module.css'

const now = new Date().getFullYear()

const Footer = () => (
  <footer className={style.container}>
    <span className={style.colLeft}>
      <strong>&copy;2007-{now} Incode Snc di Bravo L. e Molinari A.</strong><br/>
      Cod Fisc. e P.Iva 01357300191 Iscr. Reg. Imprese di MN n. 01357300191 
    </span>
    <span className={style.colRight}>
      <Link to={prefixLink('/privacy-policy/')}>Privacy policy</Link>
    </span>
  </footer>
)

export default Footer
