import React from 'react'
//import Logo from '-!svg-react-loader!./incode-logo.svg'
import { Link } from 'react-router'
import style from './header.module.scss'

const Header = () => (
  <header className={style.mainHeader}>
    {/* <Link to={prefixLink('/')}>
      <Logo />
    </Link> */}
  </header>
)

export default Header
