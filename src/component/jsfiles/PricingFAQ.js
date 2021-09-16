import React, { useState } from 'react';

import '../cssfiles/Faq.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function PricingFAQ() {

    const [pricing, setPricing] = useState([
        {
            que: 'How much does the Bookkeeping costs you ?',
            ans: 'We generally prefer to charge a flat monthly fee for all our assignments so that we are not too much time conscious and are more result oriented. Just to give a sense, our fees ranges from 0.5%-2% of annual revenues of the business, depending on various factors such as number of Bank account/credit cards, monthly transactions, etc.. We are open to discuss any other arrangement.',
            open: false,
        },
        {
            que: 'How much does the Finance services costs you ?',
            ans: 'Unfortunately, we do not have a simple answer. Some of our client just needed a consultation of the P/L and Balance sheet numbers while we have prepared various financial models for some of our clients to give them a simple but extremely important view of their business. We would be happy to explain this part of services in detail.',
            open: false,
        },
        {
            que: 'How will you make international payments ?',
            ans: 'We are extremely convenient with the mode of payment that our clients prefer. Our clients pay us thru Wire transfer, Paypal, Wise, Western Union. Anything goes. We would be happy to help you with the one-time setup.',
            open: false,
        },
        {
            que: 'When are my payments due for the services ?',
            ans: 'For regular assignments, we generally send out quarterly invoices and prefer payment accordingly. If you want to have any other arrangement, we are open to discuss. For one time projects, we expect our payments within 14 days of completion of the project.',
            open: false,
        },
        {
            que: 'Are there any one time setup fees ?',
            ans: 'If your books are up to date, we do not charge any one time setup fees. But if they are messy when we start we will charge one time fees to clean up your books.',
            open: false,
        },
    ]);

    const tugglePriciFAQ = index => {
        setPricing(pricing.map((prici, i) => {
            if(i === index) {
                prici.open = !prici.open;
            }else{
                prici.open = false;
            }
            return prici;
        }))
    }

    return (
        <div className="faq">
            <div className="faq__tit">FAQ'S</div>
            <div className="faq__titque">Pricing / Payment Related <span style={{color:'#2D5F5C', fontSize: '40px'}}>Questions ?</span></div>
            <div>
                {pricing.map((faq, i) => (<div key={i} className="faq__section" onClick={() => tugglePriciFAQ(i)}>
                    <div className="faq__section_que">
                        <p>{faq.que}</p>
                        {faq.open ?  <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    <div className="faq__section_ans" style={faq.open ? {display: 'flex'} : {display: 'none'}}>{faq.ans}</div>
                </div>))}
            </div>
        </div>
    )
}

export default PricingFAQ;
