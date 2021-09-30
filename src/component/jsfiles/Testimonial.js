import React from 'react';

import '../cssfiles/Testimonial.css';
import picalex from '../../assets/images/picalex.png';
import pichari from '../../assets/images/pichariram.png';
import Footer from './Footer';
import Getaccount from './Getaccount';
import C1story from './C1story';
import C2story from './C2story';

function Testimonial() {
    const clients = 
        [
            {
                id: 1,
                name: 'Alex Powell',
                position: 'Store Owner in San Antonio, Texas.',
                image: picalex,
                review: 'I hired Dhaval and his team for bookkeeping services for my electric bike shop. He is very easy to work with. We had a few months worth of transactions that needed to be reconciled, Dhaval figured it out right away and brought my books up to date within a few days. If you need a bookkeeper that is reliable, is communicative and responds quickly, hire Dhaval and his team. They will take care of your books so you can focus on what matters, which is running your business. I highly recommend Dhaval and his team !',
                open: false,
            },
            {
                id: 2,
                name: 'HariRam K',
                position: 'Owner of a Manufacturing business of flavored foxnuts.',
                image: pichari,
                review: 'I hired Dhaval to restructure and rearrange our company\'s accounting workflow. He did it very brilliantly, by making a hassle-free accounting system. Dhaval is extremely skilled with Accounting principles and I’ve enjoyed working with him all along. I recommend him to all businesses looking for accounting professionals. His work thoroughly reflects the utmost dedication, integrity, and knowledge.',
                open: false,
            },
        ];


    return (
        <div>
            <div className="testimonial__head">Testimonials</div>
            <div style={{height:'50px', backgroundColor:'#f9f9f9'}} />
            {clients.map((cli, i) => (
                <div  key={cli.id}>
                <div className="testinomial__container">
                    <div className="testinomial__container__client">
                        <div className="testinomial__container__client__img">
                            <center>
                                <img src={cli.image} className="testinomial__container__client__img__image" alt='Something is wrong' />
                            </center>
                            <p className="testinomial__container__client__img__name">{cli.name}</p>
                            <p className="testinomial__container__client__img__posi">{cli.position}</p>
                        </div>
                        <div className="testinomial__container__client__review">
                            <p className="testinomial__container__client__review__text"><span style={{fontSize: '30px'}}>"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cli.review}</p>
                        </div>
                    </div>
                </div>   
                {cli.name === 'Alex Powell' ? <C1story /> : <C2story />}
                <div style={{height:'50px', backgroundColor:'#f9f9f9'}} />
                </ div>
            ))}
            <div style={{height:'50px', backgroundColor:'#f9f9f9'}} />
            <Getaccount />
            <Footer />
        </div>
    )
}

export default Testimonial;
