import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import HeaderMobileSocials from './HeaderMobileSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <h1>ZelloSpark</h1>
        <h2 className="text-sub">The belief in that shine within all of us :)</h2>
        <HeaderMobileSocials/>
        <CTA/>
        <HeaderSocials/>
        

        <a href="#about" className='scroll__down'><h3>Scroll {'>'}{'>'}</h3></a>
      </div>
    </header>
  )
}

export default Header