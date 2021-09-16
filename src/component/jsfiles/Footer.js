import React from 'react';
import { Link } from 'react-router-dom';

import '../cssfiles/Footer.css';
import logoima from '../../assets/images/logo.png';

function Footer() {
    return (
        <div className="footer">
            <img className='footer__logo' src={logoima} alt={'Reload the Page Something is wrong'} />
            <div className="footer__contact">
                <p className="footer__heading">Contact</p>
                <p className="footer__option__indi">P : <span className="footer__option__indispan">+1 8460823668</span></p>
                <p className="footer__option__indi">P : <span className="footer__option__indispan">+91 8460823668</span></p>
                <p className="footer__option__indi">Email : <span className="footer__option__indispan">office@comptersbookkeeping.com</span></p>
                <div style={{height: '20px'}}></div>
                <p className="footer__heading">Location</p>
                <p className="footer__option">103/B - Shayamal Building, Nr. Mangadh Chowk,</p>
                <p className="footer__option">Varachha, Surat, India - 395006.</p>
                <div style={{height: '20px'}}></div>
            </div>
            <div className="footer__contact">
                <p className="footer__heading">Navigation</p>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <p className='footer__option'>Home</p>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <p className='footer__option'>About</p>
                </Link>
                <Link to='/service' style={{ textDecoration: 'none' }}>
                    <p className='footer__option'>Services</p>
                </Link>
                <Link to='/testimonial' style={{ textDecoration: 'none' }}>
                    <p className='footer__option'>Testimonials</p>
                </Link>
                <Link to='/blog' style={{ textDecoration: 'none' }}>
                    <p className='footer__option'>Blog</p>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <p className='footer__option'>Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer;
