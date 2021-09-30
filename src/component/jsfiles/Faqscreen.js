import React from 'react';

import Faq from './Faq';
import "./../cssfiles/Faq.css";
import Footer from './Footer';
import Getaccount from './Getaccount';
import OneTesti from './OneTesti';

function Faqscreen() {
    return (
        <div>
            <div className="faqscreen__head">FAQ's</div>
            <Faq />
            <div style={{height: '50px', backgroundColor: '#fff'}} />
            <OneTesti />
            <Getaccount />
            <Footer />
        </div>
    )
}

export default Faqscreen;
