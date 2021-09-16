import React from 'react';

import Getaccount from './Getaccount';
import Footer from './Footer';
import '../cssfiles/About.css';
import abouima from '../../assets/images/4.png';
import pic from '../../assets/images/pic.png';
import PricingFAQ from './PricingFAQ';
import OneTesti from './OneTesti';

function About() {

    const members = [
        {
            id:'1',
            name:'Dhaval Kakadiya',
            position:'Lead Consultant',
            description:'Dhaval is a graduate in Accounting and a Chartered Accountant from India (equivalent to US CPA). He has passed all exams of Chartered Financial Analyst (CFA). He has been helping businesses with Accounting and Finance Services for more than 8 years now. He has worked earlier with the Equity Research team of Morgan Stanley but the zeal and drive for entrepreneurship and an urge to help small and mid-size businesses brought him back to Bookkeeping and Finance services. He is delighted when his work creates an impact on businesses and helps business owners make important business decisions.',
            image: pic,
        },
        {
            id:'2',
            name:'Aniket Patel',
            position:'Account Manager',
            description:'Aniket Patel is a graduate in Accounting and Finance. Aniket loves playing with numbers and understanding how different transactions would form part of financial statements. He has been helping businesses with Bookkeeping for more than 5 years now. He has actively worked with business owners from different sectors like construction, retail stores, hospitality, textiles, and various manufacturing firms. He loves being the best at what he does.',
            image: pic,
        },
        {
            id:'3',
            name:'Dhwani Shah',
            position:'Account Manager',
            description:'Dhwani is a graduate in Accounting and has done master in Business Management. She is an Accounting- Auditing Professional with more than 5 Years of Experience in the Retail Business, Manufacturing Units as well as Infrastructure Development Business. She has an amazing eye for different aspects of business ranging from laws to audit which has helped her in understanding and fulfilling different business needs.',
            image: pic,
        },
    ];

    return (
        <div>
            <div className="about__head">About Us</div>
            <div className="about__textandimage">
                <div className="about__textandimage__text">
                    <p className="about__textandimage__text__head">About <span style={{color: '#2D5F5C', fontSize:'40px'}}>Compters</span></p>
                    <p className="about__textandimage__text__conte">We are a Bookkeeping firm who can help you manage a very important of your business. Bookkeeping is the part where various business transactions get recorded and are summarised in the  Profit/Loss and Balance Sheet and it is important for business owners to realise the need for this for making important business decisions in the future apart from meeting timely legal needs. Bookkeeping makes business owners aware of the current financial situation of their business and could help them in planning.</p>
                    <p className="about__textandimage__text__conte">Service delivery, timely execution, and communication are the bedrock of everything that we do at our firm. We will make sure that we leave no stones unturned as far as your bookkeeping work is concerned. We have expertise with different Accounting Softwares like Quickbooks, Zoho, Xero, etc, and have been helping businesses for more than 8 years now. Compters provides Bookkeeping and Accounting services to businesses in the US, Canada, Australia and India and is proud to help small and mid-sized businesses.</p>
                </div>
                <div className="about__textandimage__image">
                    <img className="about__textandimage__image__tag" src={abouima} alt='Something is wrong' />
                </div>
            </div>
            <div className="about__language">Accounting is the language of Business</div>
            <div className="about__team">
                <p className="about__textandimage__text__head">Meet the <span style={{color: '#2D5F5C', fontSize:'40px'}}>Team</span></p>
                {members.map((oneman, i) => (
                    <div className="about__team__member" key={oneman.id}>
                        <div className="about__team__member__imaname">
                            <center> <img className="about__team__member__imaname__image" src={oneman.image} alt='Something is wrong' /></center>
                            <p className="about__team__member__imaname__name">{oneman.name}</p>
                            <p className="about__team__member__imaname__posi">{oneman.position}</p>
                        </div>
                        <div className="about__team__member__content">{oneman.description}</div>
                    </div>
                ))}
            </div>
            <PricingFAQ />
            <div style={{height:'50px', backgroundColor:'#fff'}} />
            <OneTesti />
            <Getaccount />
            <Footer />
        </div>
    )
}

export default About;
