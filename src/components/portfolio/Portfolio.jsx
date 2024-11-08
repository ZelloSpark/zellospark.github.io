import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img/portfolio1.png'
import IMG2 from '../../assets/img/portfolio2.png'

const Portfolio = () => {
  return (
    <section id='projects'>
      <h5>Our Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt='AR Zone: Augmented Reality App' />
          </div>
          <h3>AR Cube: Augmented Reality App</h3>
          <div className="portfolio__item-cta">
          <a href='https://play.google.com/store/apps/details?id=com.ZelloSpark.ARCube' className='btn btn-primary' target='_blank'>Play Store</a>
            <a href='https://blogs.zellospark.com/2023/02/projects-arcube.html' className='btn' target='_blank'>Blog</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt='Blogs' />
          </div>
          <h3>ZelloSpark Blogs</h3>
          <div className="portfolio__item-cta">
            <a href='https://blogs.zellospark.com' className='btn' target='_blank'>Website</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio