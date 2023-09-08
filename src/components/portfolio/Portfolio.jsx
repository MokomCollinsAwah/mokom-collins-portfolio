import React from 'react';
import './portfolio.css';
import IMG2 from '../../assets/work2.jpg';
import IMG3 from '../../assets/work3.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio section" id='portfolio'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Browse my previous Work</span>

        <div className="container portfolio_container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=''/>
            </div>
            <h3 className='portfolio__project-title'>Project 1</h3>
            <p className='portfolio__project-description'>
            A car rental website is an online platform that allows users to rent cars for personal or business use. 
            The website provides an interface for searching, comparing, and reserving cars.
            </p>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank' rel="noreferrer">Live Demo</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=''/>
            </div>
            <h3 className='portfolio__project-title'>Project 2</h3>
            <p className='portfolio__project-description'>
            A car rental website is an online platform that allows users to rent cars for personal or business use. 
            The website provides an interface for searching, comparing, and reserving cars.
            </p>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank' rel="noreferrer">Live Demo</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt=''/>
            </div>
            <h3 className='portfolio__project-title'>Project 3</h3>
            <p className='portfolio__project-description'>
            A car rental website is an online platform that allows users to rent cars for personal or business use. 
            The website provides an interface for searching, comparing, and reserving cars.
            </p>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn' target='_blank' rel="noreferrer">Live Demo</a></div>
        </article>     
      </div>
    </section>
  )
}

export default Portfolio