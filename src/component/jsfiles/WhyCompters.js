import React from 'react';

import '../cssfiles/Sercont.css';
import bill from '../../assets/images/bill.png';
import verified from '../../assets/images/verified.png';
import timetable from '../../assets/images/timetable.png';
import ownership from '../../assets/images/ownership.png';
import outstanding from '../../assets/images/outstanding.png';

function WhyCompters() {

    const servi = [
        {
            id: '1',
            icon: bill,
            title: 'Resonable and fair charge for Bookkeeping',
            description: 'Since our delivery center is in India, we have enormous edge in providing services at lower price relative to other firms with same level of quality in services. We work remotely which gives us an fair advantage in becoming more efficient and cost effective.',
        },
        {
            id: '2',
            icon: verified,
            title: 'Qualified professionals',
            description: 'Our team of professionals possesses qualified accountants and some of them have even passed CFA exams giving them an excellent skills of Accounting and Finance.',
        },
        {
            id: '3',
            icon: timetable,
            title: 'Timely response',
            description: 'We do understand the urgency of any requests coming from our client. We promise to provide initial response to all our client requests within 12 hours and wherever possible resolve them within 24 hours of getting the request.',
        },
        {
            id: '4',
            icon: ownership,
            title: 'Ownership of work',
            description: 'Our team possesses a natural instinct in owning work that we do and we make sure we fulfill all work of our client in a similar manner. This attitude has helped us enormously in providing quality services to our clients.',
        },
        {
            id: '5',
            icon: outstanding,
            title: 'Sense of excellence',
            description: 'We aspire to excel in all aspects of our work no matter how menial the work would be. This keeps us on our toes always and aspires us to do better each day.',
        },
    ];

    return (
        <div className="provide__services">
            {servi.map((serv, i) => (
                <div className="provide__services__container" key={serv.id}>
                    <div style={{ height: '50px' }} />
                    <center><img src={serv.icon} className="provide__services__img" alt='Something is Wrong' /></center>
                    <p className="provide__services__container__head">{serv.title}</p>
                    <p className="provide__services__container__desc">{serv.description}</p>
                    <div style={{ height: '50px' }} />
                </div>
            ))}
        </div>
    )
}

export default WhyCompters;
