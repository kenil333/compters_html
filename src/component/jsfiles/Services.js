import React from 'react';

import '../cssfiles/Services.css';
import Sercont from './Sercont';
import ServiceFAQ from './ServiceFAQ';
import Footer from './Footer';
import Getaccount from './Getaccount';
import OneTesti from './OneTesti';
import h1 from '../../assets/images/h1.png';
import h2 from '../../assets/images/h2.png';
import h3 from '../../assets/images/h3.png';
import h4 from '../../assets/images/h4.png';
import h5 from '../../assets/images/h5.png';
import arr from '../../assets/images/arr.png';

function Services() {
    return (
        <div>
            <div className="service__head">Services</div>
            <div className="service__provide">
                <p className="service__provide__head">What we <span style={{color:'#2D5F5C', fontSize: '40px'}}>Provide</span></p>
                <p className="service__provide__mess">Let us manage your books so that you can manage your business well. You need not be an expert with Books. Let us handle it.</p>
                    <div style={{height: '50px'}}/>
                <Sercont />
                <div style={{height:'50px'}}></div>   
            </div>
            <div className="services__diff__container">
                <div className="service__diff">
                    <p className="service__diff__head">Virtual Bookkeeping <span style={{color:'#2D5F5C', fontSize: '40px'}}>vs</span> In House Accountant</p>
                    <p className="service__diff__point__mess"><span style={{fontSize:'30px', fontWeight:'700', color:'#022140'}}>1. </span>Our Bookkeeping services would cost less than half of what you would pay to an in house accountant.</p>
                    <p className="service__diff__point__mess"><span style={{fontSize:'30px', fontWeight:'700', color:'#022140'}}>2. </span>Our finance services has helped our clients a lot in taking future business decisions, and has been a very important extension of our Bookkeeping services.</p>
                    <p className="service__diff__point__mess"><span style={{fontSize:'30px', fontWeight:'700', color:'#022140'}}>3. </span>Our experience of working with different businesses in different regions has immensely helped us in our work as we keep on fine tuning  processes with experience of best international practices.</p>
                    <p className="service__diff__point__mess"><span style={{fontSize:'30px', fontWeight:'700', color:'#022140'}}>4. </span>Our team of extremely competent people will provide you reliable services and will reduce your dependecny on one in house accountant.</p>
                </div>
                <div className="service__diff__emty" />
            </div>
            <div className="service__flowchart">
                <p className="service__flowchart__tit">How we look at our services ?</p>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'1px'}} />
                    <div className="service__flowchart__container">
                        <img src={h1} className="service__flowchart__container__img" alt="Something is Wrong" />
                        <div className="service__flowchart__container__con">
                            <p className="service__flowchart__container__tit">Business Transection</p>
                        </div>
                    </div>
                    <div style={{width:'1px'}} />
                </div>
                <center><img src={arr} className="service__down__arrow" alt="Something is Wrong" /></center>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'1px'}} />
                    <div className="service__flowchart__container">
                        <img src={h2} className="service__flowchart__container__img" alt="Something is Wrong" />
                        <div className="service__flowchart__container__con">
                            <p className="service__flowchart__container__tit">Bookkeeping</p>
                            <p>Recording transactions and posting/ categorization  to various accounts.</p>
                        </div>
                    </div>
                    <div style={{width:'1px'}} />
                </div>
                <center><img src={arr} className="service__down__arrow" alt="Something is Wrong" /></center>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'1px'}} />
                    <div className="service__flowchart__container">
                        <img src={h3} className="service__flowchart__container__img" alt="Something is Wrong" />
                        <div className="service__flowchart__container__con">
                            <p className="service__flowchart__container__tit">Preparation of Financial Accounts</p>
                        </div>
                    </div>
                    <div style={{width:'1px'}} />
                </div>
                <center><img src={arr} className="service__down__arrow" alt="Something is Wrong" /></center>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'1px'}} />
                    <div className="service__flowchart__container">
                        <img src={h4} className="service__flowchart__container__img" alt="Something is Wrong" />
                        <div className="service__flowchart__container__con">
                            <p className="service__flowchart__container__tit">Accounting</p>
                            <p>Finalising various accounts, make adjusting entries, provide relevant insights.</p>
                        </div>                        
                    </div>
                    <div style={{width:'1px'}} />
                </div>
                <center><img src={arr} className="service__down__arrow" alt="Something is Wrong" /></center>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{width:'1px'}} />
                    <div className="service__flowchart__container">
                        <img src={h5} className="service__flowchart__container__img" alt="Something is Wrong" />
                        <div className="service__flowchart__container__con">
                            <p className="service__flowchart__container__tit">Preparation of Financial Statements</p>
                            <p>CPA & Finance Services.</p>
                        </div>
                    </div>
                    <div style={{width:'1px'}} />
                </div>
            </div>            
            <ServiceFAQ />
            <div style={{height:'50px', backgroundColor:'#fff'}} />
            <OneTesti />
            <Getaccount />
            <Footer />
        </div>
    )
}

export default Services;