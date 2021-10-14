import React, { useState } from 'react';

import '../cssfiles/Faq.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function Faq() {

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

    const [service, setService] = useState([
        {
            que: 'Since the work delivery centre is in India, how are we going to manage time zone difference ?',
            ans: 'Well, this is one thing that we cannot change but what we can do is to manage this well. We are available for a meeting till 2pm Eastern Time and also after 9pm Eastern Time. Further, we promise to respond back to all the emails within 24 hours.',
            open: false,
        },
        {
            que: 'What if our business is on a different software or does not use any software at all ?',
            ans: 'We work with most of our clients in Quickbooks but we believe software is a tool to standardise and automate accounting workflow. We have also helped clients in Zoho, Xero, etc. The most important aspect is to know accounting principles well and that remains at the core of everything we do. We are quite flexible with the platform that our clients prefer.',
            open: false,
        },
        {
            que: 'Are you an outsourcing agency ?',
            ans: 'We would not prefer ourselves to solely represent as a way to reduce costs. Our primary goal is to definitely offer reliable and quality services at good rates but we would always prefer our potential clients to hire us based on our services and not solely pricing (which may come as an added advantage). Distance is never a barrier with technology. The only difference between contract with us and a bookkeeping firm in US would be to manage time zone difference which to our surprise has worked well for our clients.',
            open: false,
        },
        {
            que: 'What do we do to keep clients data secure ?',
            ans: 'This is one of the most important part of our job. Our clients trusts us with their work and we are very conscious of that fact and share data in our firm only on need to know basis. We have faced situations whereby a few of our clients have been skeptical initially due to difference in legal jurisdictions but we have always been and will always be taking this as a moral responsibility to maintain the security of client\'s data.',
            open: false,
        },
        {
            que: 'Can you help us with Payroll management ?',
            ans: 'We could help you with Payroll by setting up with other service provider as unfortunately, our firm does not provide payroll related services for now but we will make sure that you are up with it if you need.',
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

    
    const tuggleServiFAQ = index => {
        setService(service.map((servi, i) => {
            if(i === index) {
                servi.open = !servi.open;
            }else{
                servi.open = false;
            }
            return servi;
        }))
    }

    return (
        <div className="faq">
            <div className="faq__tit">FAQ'S</div>
            <div className="faq__titque">Pricing / Payment Related <span className="faq__titque__span">Questions ?</span></div>
            <div>
                {pricing.map((faq, i) => (<div key={i} className="faq__section" onClick={() => tugglePriciFAQ(i)}>
                    <div className="faq__section_que">
                        <p>{faq.que}</p>
                        {faq.open ?  <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    <div className="faq__section_ans" style={faq.open ? {display: 'flex'} : {display: 'none'}}>{faq.ans}</div>
                </div>))}
            </div>
            <div style={{height: '20px'}}></div>
            <div className="faq__titque">Service Related <span className="faq__titque__span">Questions ?</span></div>
            <div>
                {service.map((faq, i) => (<div key={i} className="faq__section" onClick={() => tuggleServiFAQ(i)}>
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

export default Faq;
