import React from 'react';
import { Link } from 'react-router-dom';

import '../cssfiles/Testimonial.css';
import pic1 from '../../assets/images/pic.png'

function OneTesti() {
    return (
        <div className="testinomial__container" style={{paddingTop: '80px', paddingBottom: '80px'}}>
            <p className="testi__home__tit">Testimonials</p>
            <p className="testi__home__subtit">Read client consulting reviews for our company.</p>
            <div className="testinomial__container__client">
                <div className="testinomial__container__client__img">
                    <center>
                        <img src={pic1} className="testinomial__container__client__img__image" alt='Something is wrong' />
                    </center>
                    <p className="testinomial__container__client__img__name">Payal K</p>
                    <p className="testinomial__container__client__img__posi">Store Owner in San Antonio, Texas.</p>
                </div>
                <div className="testinomial__container__client__review">
                    <Link to="/testimonial" style={{textDecoration:"none"}}><p className="testinomial__container__client__review__text"><span style={{fontSize: '30px'}}>"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I hired Dhaval and his team for bookkeeping services for my electric bike shop. He is very easy to work with. We had a few months worth of transactions that needed to be reconciled, Dhaval figured it out right away and brought my books up to date within a few days. If you need a bookkeeper that is reliable, is communicative and responds quickly, hire Dhaval and his team. They will take care of your books so you can focus on what matters, which is running your business. I highly recommend Dhaval and his team !</p></Link>
                </div>
            </div>
        </div> 
    )
}

export default OneTesti;
