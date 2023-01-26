import React, { useState } from 'react';

import '../cssfiles/Faq.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

function ServiceFAQ() {

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
            ans: 'We can definitely help you with Payroll by setting up with service providers like Gusto, Quickbooks, etc. We will make sure your Payroll is handled well.',
            open: false,
        },
    ]);

    const tuggleServiFAQ = index => {
        setService(service.map((servi, i) => {
            if (i === index) {
                servi.open = !servi.open;
            } else {
                servi.open = false;
            }
            return servi;
        }))
    }

    return (
        <div className="faq">
            <div className="faq__tit">FAQ'S</div>
            <div className="faq__titque">Service Related <span className="faq__titque__span">Questions ?</span></div>
            <div>
                {service.map((faq, i) => (<div key={i} className="faq__section" onClick={() => tuggleServiFAQ(i)}>
                    <div className="faq__section_que">
                        <p>{faq.que}</p>
                        {faq.open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </div>
                    <div className="faq__section_ans" style={faq.open ? { display: 'flex' } : { display: 'none' }}>{faq.ans}</div>
                </div>))}
            </div>
        </div>
    )
}

export default ServiceFAQ;
