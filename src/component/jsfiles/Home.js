import React from 'react';
import { Link } from 'react-router-dom';

import "../cssfiles/Home.css";
import Footer from './Footer';
import Getaccount from './Getaccount';
import Sercont from './Sercont';
import { ReactComponent as AboSvg } from '../../assets/svgs/about.svg';
import { ReactComponent as ServSvg } from '../../assets/svgs/serv.svg';
import OneTesti from './OneTesti';

function Home() {
    return (
        <div>
            <div className="home__first">
                <div className="home__first__content">
                    <div className="home__first__text1"><span style={{color:'#F7D9C4'}}>Accounting</span> is the language of Business</div>
                    <div className="home__first__text2">Let us manage your books so that you can manage your business well. You need not be an expert with Books. Let us handle it.</div>
                    <div className="home__first__but__cont">
                        <div style={{width:'1px'}}></div>
                        <Link to='/contact' style={{ textDecoration: 'none' }}><div className="home__first__but">Get Started</div></Link>
                    </div>
                </div>
                <div className="home__first__empty" />
            </div>
            <div className="home__second">
                <div className='home__second__about'>
                    <p className='home__second__about__head'>About <span style={{color: '#2D5F5C', fontSize:'35px'}}>Compters</span></p>
                    <p className='home__second__about__detail'>We are a Bookkeeping firm who can help you manage a very important of your business. Bookkeeping is the part where various business transactions get recorded and are summarised in the  Profit/Loss and Balance Sheet and it is important for business owners to realise the need for this for making important business decisions in the future apart from meeting timely legal needs. Bookkeeping makes business owners aware of the current financial situation of their business and could help them in planning.<br/><br/>Service delivery, timely execution, and communication are the bedrock of everything that we do at our firm. We will make sure that we leave no stones unturned as far as your bookkeeping work is concerned. We have expertise with different Accounting Softwares like Quickbooks, Zoho, Xero, etc, and have been helping businesses for more than 8 years now. Compters provides Bookkeeping and Accounting services to businesses in the US, Canada, Australia and India and is proud to help small and mid-sized businesses.</p>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '1px', height: '1px'}}></div>
                        <Link to='/about' style={{ textDecoration: 'none' }}><div className='home__second__aboutbut'>About Us</div></Link>
                    </div>
                </div>
                <div className='home__second__aboutimag'>
                    <AboSvg className='home__second__ab__img' />
                </div>
            </div>
            <div className="home__slogon">Focus On Growing Your Business Trust The <span className="home__slogon__span">Accounting</span> To Us</div>
            <div className="home__second" style={{backgroundColor:'#fff'}}>
                <div className='home__second__aboutimag'>
                    <ServSvg className='home__second__ab__img' />
                </div>
                <div className='home__second__about'>
                    <p className='home__second__about__head'>At Your <span style={{color: '#2D5F5C', fontSize:'40px'}}>Service</span></p>
                    <p className='home__second__about__detail'>Compters is a full-service accounting firm that can meet all your diverse and unique accounting needs. Our highly trained professionals will give you the quality service and expertise that you deserve.</p>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <div style={{width: '1px', height: '1px'}}></div>
                        <Link to='/service' style={{ textDecoration: 'none' }}><div className='home__second__aboutbut'>Read Services</div></Link>
                    </div>
                </div>
            </div>
            <div style={{height:'70px'}} />
            <div style={{padding:'0px 05vw'}}><Sercont /></div>
            <div style={{height:'70px'}} />
            <OneTesti />
            <Getaccount />
            <Footer />
        </div>
    )
}

export default Home;
