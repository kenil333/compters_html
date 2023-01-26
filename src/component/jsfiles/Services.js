import React from 'react';

import '../cssfiles/Services.css';
import Sercont from './Sercont';
import ServiceFAQ from './ServiceFAQ';
import Footer from './Footer';
import Getaccount from './Getaccount';
import OneTesti from './OneTesti';
import ServiFlowChart from './ServiFlowChart';
import WhyCompters from './WhyCompters';

function Services() {
    return (
        <div>
            <div className="service__head">Services</div>
            <div className="service__provide">
                <p className="service__provide__head">What we <span style={{ color: '#2D5F5C', fontSize: '35px' }}>Provide</span></p>
                <p className="service__provide__mess">Let us manage your books so that you can manage your business well. You need not be an expert with Books. Let us handle it.</p>
                <div style={{ height: '50px' }} />
                <Sercont />
                <div style={{ height: '50px' }}></div>
            </div>
            <div className="services__diff__container">
                <div className="service__diff">
                    <p className="service__diff__head">Virtual Bookkeeping <span style={{ color: '#2D5F5C', fontSize: '35px' }}>vs</span> In House Accountant</p>
                    <p className="service__diff__point__mess"><span style={{ fontSize: '28px', fontWeight: '700', color: '#2D5F5C' }}>1. </span>Our Bookkeeping services would cost less than half of what you would pay to an in house accountant.</p>
                    <p className="service__diff__point__mess"><span style={{ fontSize: '28px', fontWeight: '700', color: '#2D5F5C' }}>2. </span>Our finance services has helped our clients a lot in taking future business decisions, and has been a very important extension of our Bookkeeping services.</p>
                    <p className="service__diff__point__mess"><span style={{ fontSize: '28px', fontWeight: '700', color: '#2D5F5C' }}>3. </span>Our experience of working with different businesses in different regions has immensely helped us in our work as we keep on fine tuning  processes with experience of best international practices.</p>
                    <p className="service__diff__point__mess"><span style={{ fontSize: '28px', fontWeight: '700', color: '#2D5F5C' }}>4. </span>Our team of extremely competent people will provide you reliable services and will reduce your dependecny on one in house accountant.</p>
                </div>
                <div className="service__diff__emty" />
            </div>
            <div className="service__provide">
                <p className="service__provide__head">Why <span style={{ color: '#2D5F5C', fontSize: '35px' }}>Compters</span> ?</p>
                <div style={{ height: '50px' }} />
                <WhyCompters />
                <div style={{ height: '50px' }}></div>
            </div>
            <ServiFlowChart />
            <ServiceFAQ />
            <div style={{ height: '50px', backgroundColor: '#fff' }} />
            <OneTesti />
            <Getaccount />
            <Footer />
        </div>
    )
}

export default Services;