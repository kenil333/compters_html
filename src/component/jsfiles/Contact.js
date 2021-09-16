import React from 'react';

import '../cssfiles/Contact.css';
// import contima from '../../assets/images/3.png'
import Footer from './Footer';
import Calendar from './Calendar';
import { ReactComponent as GetSvg } from '../../assets/svgs/toch.svg';

function Contact() {

    const timess = [
        {
            id: '1',
            time: '7:00'
        },
        {
            id: '2',
            time: '8:00'
        },
        {
            id: '3',
            time: '9:00'
        },
        {
            id: '4',
            time: '10:00'
        },
    ];

    return (
        <div>
            <div className="contact__head">Contact Us</div>
            <div className="contact__dataform">
                <div className="contact__dataform__data">
                    <div className="contact__dataform__data__address">
                        <p className="contact__dataform__data__address__tit">Get in touch with <span style={{color: '#2D5F5C', fontSize:'38px'}}>Compters</span></p>
                        <p className="contact__dataform__data__address__indicator">Office:</p>
                        <p className="contact__dataform__data__address__val">103/B - Shayamal Building, Nr. Mangadh Chowk, Varachha, Surat, India - 395006.</p>
                        <div style={{height:'15px'}} />
                        <p className="contact__dataform__data__address__indicator">Email:</p>
                        <p className="contact__dataform__data__address__val">office@comptersbookkeeping.com</p>
                        <div style={{height:'15px'}} />
                        <p className="contact__dataform__data__address__indicator">Phone:</p>
                        <p className="contact__dataform__data__address__val">Us: +1 846-082-668</p>
                        <p className="contact__dataform__data__address__val">Inida: +91 84608-23668</p>
                        <div style={{height:'15px'}} />
                    </div>
                    <div className="contact__dataform__data__img">
                        <GetSvg className="contact__dataform__data__img__ima" />
                        {/* <img className="contact__dataform__data__img__ima" src={contima} alt='Something is wrong' /> */}
                    </div>
                </div>
                <div className="contact__dataform__form">
                    <div className="contact__dataform__form__container">
                        <input type='text' placeholder='Full Name' className="input__class" />
                        <input type='text' placeholder='Enter Your Email' className="input__class" />
                        <input type='text' placeholder='Phone Number' className="input__class" />
                        <textarea placeholder='Message' rows='4' className="textare__class" />
                        
                    </div>
                    <div className="contact__dataform__form__timeslot">
                        <p className="contact__dataform__form__timeslot__tit">Select Time</p>
                        <div className="contact__dataform__form__timeslot__container">
                            {timess.map((timi, i) => (
                                <div className="contact__dataform__form__timeslot__container__slot" key={timi.id}>{timi.time}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="contact__sloat__calander"><Calendar /></div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'1px'}} />
                    <div className="contact__dataform__form__container__but">Send</div>
                    <div style={{width:'1px'}} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
