import React from 'react';
import { Link } from 'react-router-dom';

import '../cssfiles/Blog.css';
import Getaccount from './Getaccount';
import Footer from './Footer';
import b1 from '../../assets/images/b1.png';
import b2 from '../../assets/images/b2.png';
import b3 from '../../assets/images/b3.png';

function Blog() {

    const blogs = [
        {
            id: '1',
            title: 'What is a Ledger ?',
            image: b1,
            description1: 'A ledger is a book/account where all the transactions are recorded in accounting. It contains the effect of different business activities. Collections of many different types of ledger is called general ledger. Each transaction in accounting is recorded in two ledger accounts. There are various types of ledgers: debtors ledger, creditors ledger, expense ledger, etc.',
            description2: 'The first row in the above box are main heading while the second row has explanatory text of what would the fields contain.	This is a typical format of any ledger account. Left side represents debit amount and right side represents credit amount.',
        },
        {
            id: '2',
            title: 'What is Account Receivables?',
            image: b2,
            description1: 'Account Receivable is the money due to the firm/business for sale of of goods or for availing rendering any services. It is the amount that firm has a right to collect from its customers. Account Payables are created only when a firm sells on credit. A business selling all goods/services on cash would not have account receivables in the balance sheet.',
            description2: 'Business owners often sell on credit to grow their business but it is important to maintain healthy of accounts receivables in business relative to total sales. A business should not have excessive account receivable balance relative to sales to avoid any liquidity problems. Firms could also do ageing analysis of its receivables to keep a check if collection period does not go high and maintain healthy collectibility. It is found on the asset side of the balance sheet.',
        },
        {
            id: '3',
            title: 'What is Account Payables?',
            image: b3,
            description1: 'Account Payables is the money that the firm/business owes to its suppliers for purchase of goods or for availing any services. It is the amount that firm has to pay in future and is a liability/debt for the firm albeit short term.  Account Payables are created only when a firm purchases on credit. A business purchasing all goods/services on cash would not have account payables in the balance sheet.',
            description2: 'Business owners often ask for credit from their suppliers.  It is important to maintain healthy of accounts payables in business relative to cash and account receivable balance in the business. It is a legal obligation for the business. If any firm sells on credit it needs to make sure that collections are on time to pay the suppliers or it would face liquidity problems. It is always advisable to match short term assets against short term liabilities and long term assets againts long term liabilities.',
        },
    ];

    return (
        <div>
            <div className="blog__head">Blogs</div>
            <div className="blog__list">
                {blogs.map((blog, i) => (
                    <div key={blog.id}>
                        <Link to={{pathname:"/blogdescription", state:{id: blog.id, title: blog.title, image: blog.image, description1: blog.description1, description2: blog.description2}}} style={{textDecoration:'none'}}>
                            <div className="blog__list__blo">
                                <div className="blog__list__blo__img">
                                    <img src={blog.image} className="blog__list__blo__img__tag" alt='Something is wrong' />
                                </div>
                                <div className="blog__list__blo__tit">{blog.title}</div>
                            </div>
                        </Link>
                    </div>
                ))}
                
            </div>
            <Getaccount />
            <Footer />
        </div>
    )
}

export default Blog;
