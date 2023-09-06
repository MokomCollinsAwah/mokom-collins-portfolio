import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer__title">Collins</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://github.com/MokomCollinsAwah" className="footer__social-icon" target='_blank' rel='noreferrer'>
            <i className="uil uil-github"></i>
        </a>
        <a href="www.linkedin.com/in/mokomcollinsawah" className="footer__social-icon" target='_blank' rel='noreferrer'>
            <i className="uil uil-linkedin"></i>
        </a>
        <a href="www.instagram.com/awahcollinsm" className="footer__social-icon" target='_blank' rel='noreferrer'>
            <i className="uil uil-instagram"></i>
        </a>
        <a href="www.facebook.com/awahprincecollins" className="footer__social-icon" target='_blank' rel='noreferrer'>
            <i className="uil uil-facebook"></i>
        </a>
        <a href="www.twitter.com/awahcollinsm" className="footer__social-icon" target='_blank' rel='noreferrer'>
            <i className="uil uil-twitter"></i>
        </a>
            </div>s

        <span className="footer__copy">&#169; Mokom Collins. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer