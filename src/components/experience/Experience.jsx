import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills We Have</h5>
      <h2>Our Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Unity Game Engine</h3>
          <div className="experience__contentR">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>2D & 3D Game Development</h4>
                <small className='text-light'>For android devices</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Used Firebase</h4>
                <small className='text-light'>For online gameplay</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Used Vuforia SDK</h4>
                <small className='text-light'>For image target functionality</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Used Google Play Game Services</h4>
                <small className='text-light'>For adding achievements to game</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience__backend">
          <h3>Developement Skills</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light'>Language</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Language</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C</h4>
                <small className='text-light'>Language</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Language</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>RDBMS</h4>
                <small className='text-light'>Technology</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Technology</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>GitHub</h4>
                <small className='text-light'>Tool</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Tool</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience