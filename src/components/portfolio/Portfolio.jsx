import React from 'react';
import './portfolio.css';
import IMG2 from '../../assets/work2.jpg';
import IMG3 from '../../assets/work3.jpg';
import IMG4 from '../../assets/work4.jpg';
import IMG5 from '../../assets/work5.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio section">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Browse my previous Work</span>

        <div className="container portfolio_container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=''/>
            </div>
            <h3>Project 1</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn__primary' target='_blank' rel="noreferrer">Live Demon</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=''/>
            </div>
            <h3>Project 2</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn__primary' target='_blank' rel="noreferrer">Live Demon</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt=''/>
            </div>
            <h3>Project 3</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn__primary' target='_blank' rel="noreferrer">Live Demon</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt=''/>
            </div>
            <h3>Project 4</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn__primary' target='_blank' rel="noreferrer">Live Demon</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt=''/>
            </div>
            <h3>Project 5</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn__primary' target='_blank' rel="noreferrer">Live Demon</a></div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt=''/>
            </div>
            <h3>Project 6</h3>
            <div className="portfolio__item-cta">
              <a href="http://github.com/MokomCollinsAwah" className='btn'>GitHub</a>
              <a href="https://dribble.com/Alien_pixels" className='btn btn__primary' target='_blank' rel="noreferrer">Live Demon</a></div>
        </article>        
      </div>
    </section>
  )
}

export default Portfolio