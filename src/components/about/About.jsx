import React from 'react'
import './about.css'
import US from '../../assets/img/zsbw.png'
import {FaAward} from 'react-icons/fa'
import {FaGooglePlay} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__us">
          <div className="about__us-image">
            <img src={US} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years</small>
            </article>

            <article className='about__card'>
              <FaGooglePlay className='about__icon'/>
              <h5>Published</h5>
              <small>2 Applications</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
            
          </div>

          <p>
            ZelloSpark is a creative company which has been started with a mission to light up the whole Universe with positivity, contentment and awesomeness. We believe that all of us have that inner glow and can decide to spread it by expressing ourselves in our own unique ways.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About