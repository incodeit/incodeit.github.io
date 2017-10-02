import React from 'react'
import Link from "gatsby-link"
//import { prefixLink } from 'gatsby-helpers'

import style from './footer.module.scss'

const now = new Date().getFullYear()

const Footer = () => (
  <footer className={style.container}>
    <span className={style.left}>
      <strong>&copy;2007-{now} Incode Snc di Bravo L. e Molinari A.</strong><br/>
      Cod Fisc. e P.Iva 01357300191 Iscr. Reg. Imprese di MN n. 01357300191
    </span>
    <span className={style.right}>
      <Link to={'/privacy-policy/'}>Privacy policy</Link>
    </span>
  </footer>
)

export default Footer
