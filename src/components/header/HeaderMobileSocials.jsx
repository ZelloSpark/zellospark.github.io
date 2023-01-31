import React from 'react'
import {RiInstagramFill} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs'
import {FaTwitterSquare} from 'react-icons/fa'
import {RiYoutubeFill} from 'react-icons/ri'
import {RiGooglePlayFill} from 'react-icons/ri'

const HeaderMobileSocials = () => {
  return (
    <div className='header__mobile-socials'>
        <a href="https://play.google.com/store/apps/dev?id=7980553928365144075" target="_blank"><RiGooglePlayFill/></a>
        <a href="https://www.youtube.com/channel/UC-l0OquPWN7yg-Lc-Hl4liw" target="_blank"><RiYoutubeFill/></a>
        <a href="https://github.com/ZelloSpark" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com/ZelloSpark" target="_blank"><RiInstagramFill/></a>
        <a href="https://twitter.com/ZelloSpark" target="_blank"><FaTwitterSquare/></a>
    </div>
  )
}

export default HeaderMobileSocials