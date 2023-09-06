import React from 'react';
import './portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio">
        <p className="portfolio__header">Browse my previous Work</p>
        <h1 className="portfolio__title">Projects</h1>

        <div className="portfolio__container">
            <div className="portfolio__about-container">
                <div className="portfolio__container-details portfolio__color-container">
                    <div className="portfolio__img-container">
                        <img src="../../assets/work1.jpg" alt="" className='portfolio__img'/>
                    </div>
                    <h2 className="portfolio__subtitle portfolio__title">MokomShop</h2>
                    <div className="portfolio__button">
                        <button className="btn portfolio-btn"
                        onClick="location.href='https://github.com/"
                        >
                            GitHub
                        </button>
                        <button className="btn portfolio-btn"
                        onClick="location.href='https://github.com/"
                        >
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="portfolio__container-details portfolio__color-container">
                    <div className="portfolio__img-container">
                        <img src="../../assets/work2.jpg.jpg" alt="" className='portfolio__img'/>
                    </div>
                    <h2 className="portfolio__subtitle portfolio__title">Cyber</h2>
                    <div className="portfolio__button">
                        <button className="btn  portfolio-btn"
                        onClick="location.href='https://github.com/"
                        >
                            GitHub
                        </button>
                        <button className="btn  portfolio-btn"
                        onClick="location.href='https://github.com/"
                        >
                            Live Demo
                        </button>
                    </div>
                </div>
                <div className="portfolio__container-details portfolio__color-container">
                    <div className="portfolio__img-container">
                        <img src="../../assets/work3.jpg" alt="" className='portfolio__img'/>
                    </div>
                    <h2 className="portfolio__subtitle portfolio__title">GymTech</h2>
                    <div className="portfolio__button-container">
                        <button className="btn  portfolio-btn"
                        onClick="location.href='https://github.com/"
                        >
                            GitHub
                        </button>
                        <button className="btn portfolio-btn"
                        onClick="location.href='https://github.com/"
                        >
                            Live Demo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio