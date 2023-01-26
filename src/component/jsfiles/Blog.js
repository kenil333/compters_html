import React from 'react';
import { Link } from 'react-router-dom';

import '../cssfiles/Blog.css';
import Getaccount from './Getaccount';
import Footer from './Footer';
import b1 from '../../assets/images/b1.png';
import b2 from '../../assets/images/b2.png';
import b3 from '../../assets/images/b3.png';
import b11 from '../../assets/images/ledger.png';
import b21 from '../../assets/images/recivable.png';
import b31 from '../../assets/images/paybale.png';
import b4 from '../../assets/images/b4.png';

function Blog() {

    const blogs = [
        {
            id: '1',
            title: 'What is a Ledger ?',
            image: b1,
            inimage: b11,
            description1: 'A ledger is a book/account where all the transactions are recorded in accounting. It contains the effect of different business activities. Collections of many different types of ledger is called general ledger. Each transaction in accounting is recorded in two ledger accounts. There are various types of ledgers: debtors ledger, creditors ledger, expense ledger, etc.',
            description2: 'The first row in the above box are main heading while the second row has explanatory text of what would the fields contain.	This is a typical format of any ledger account. Left side represents debit amount and right side represents credit amount.',
            exmple: true,
            exmtit: 'John made a material purchase of $15,000 for his business in cash.',
            exmdes: 'This transaction gets recorded in two ledgers: purchase/material ledger and cash ledger. Cash balance reduces and it gets recorded on credit side (right side) of cash ledger. Purchase/Materials increases in a business and it gets recorded on debit side of Purchase/Materials ledger.',
        },
        {
            id: '2',
            title: 'What is Account Receivables ?',
            image: b2,
            inimage: b21,
            description1: 'Account Receivable is the money due to the firm/business for sale of of goods or for availing rendering any services. It is the amount that firm has a right to collect from its customers. Account Payables are created only when a firm sells on credit. A business selling all goods/services on cash would not have account receivables in the balance sheet.',
            description2: 'Business owners often sell on credit to grow their business but it is important to maintain healthy of accounts receivables in business relative to total sales. A business should not have excessive account receivable balance relative to sales to avoid any liquidity problems. Firms could also do ageing analysis of its receivables to keep a check if collection period does not go high and maintain healthy collectibility. It is found on the asset side of the balance sheet.',
            exmple: false,
        },
        {
            id: '3',
            title: 'What is Account Payables ?',
            image: b3,
            inimage: b31,
            description1: 'Account Payables is the money that the firm/business owes to its suppliers for purchase of goods or for availing any services. It is the amount that firm has to pay in future and is a liability/debt for the firm albeit short term.  Account Payables are created only when a firm purchases on credit. A business purchasing all goods/services on cash would not have account payables in the balance sheet.',
            description2: 'Business owners often ask for credit from their suppliers.  It is important to maintain healthy of accounts payables in business relative to cash and account receivable balance in the business. It is a legal obligation for the business. If any firm sells on credit it needs to make sure that collections are on time to pay the suppliers or it would face liquidity problems. It is always advisable to match short term assets against short term liabilities and long term assets againts long term liabilities.',
            description3: 'If business does not pay its suppliers on times, it could face several problems such as delay in receipt of goods, face legal action, etc.',
            exmple: false,
        },
        {
            id: '4',
            title: 'Common Accounting Terms',
            image: b4,
            inimage: b4,
            // description1: 'Balance sheet (BS) definition: A financial report that summarizes a company\'s assets (what it owns), liabilities (what it owes) and owner or shareholder equity, at a given time.\nCapital (CAP) definition: A financial asset or the value of a financial asset, such as cash or goods. Working capital is calculated by taking your current assets subtracted from current liabilities—basically the money or assets an organization can put to work.\nCash flow (CF) definition: The revenue or expense expected to be generated through business activities (sales, manufacturing, etc.) over a period of time.\nCost of goods sold (COGS) definition: The direct expenses related to producing the goods sold by a business. The formula for calculating this will depend on what is being produced, but as an example this may include the cost of the raw materials (parts) and the amount of employee labor used in production.\nCredit (CR) definition: An accounting entry that may either decrease assets or increase liabilities and equity on the company\'s balance sheet, depending on the transaction. When using the double-entry accounting method there will be two recorded entries for every transaction: A credit and a debit.',
            // description2: 'Debit (DR) definition: An accounting entry where there is either an increase in assets or a decrease in liabilities on a company\'s balance sheet.\nGeneral ledger (GL) definition: A complete record of the financial transactions over the life of a company.\nLiabilities (current and long-term) definition: A company\'s debts or financial obligations incurred during business operations. Current liabilities (CL) are those debts that are payable within a year, such as a debt to suppliers. Long-term liabilities (LTL) are typically payable over a period of time greater than one year. An example of a long-term liability would be a multi-year mortgage for office space.\nNet income (NI) definition: A company\'s total earnings, also called net profit. Net income is calculated by subtracting total expenses from total revenues.\nProfit and loss statement (P&L) definition: A financial statement that is used to summarize a company’s performance and financial position by reviewing revenues, costs and expenses during a specific period of time, such as quarterly or annually.\nVariable Cost: These are costs that change with the volume of sales and are the opposite of Fixed Costs. Variable costs increase with more sales because they are an expense that is incurred in order to deliver the sale. For example, if a company produces a product and sells more of that product, they will require more raw materials in order to meet the increase in demand.\nFixed Cost: A Fixed Cost is one that does not change with the volume of sales. For example, rent and salaries won\'t change if a company sells more. The opposite of a Fixed Cost is a Variable Cost.',
            description1: 'Balance sheet (BS) definition: A financial report that summarizes a company\'s assets (what it owns), liabilities (what it owes) and owner or shareholder equity, at a given time.',
            description2: 'Capital (CAP) definition: A financial asset or the value of a financial asset, such as cash or goods. Working capital is calculated by taking your current assets subtracted from current liabilities—basically the money or assets an organization can put to work.',
            description3: 'Cash flow (CF) definition: The revenue or expense expected to be generated through business activities (sales, manufacturing, etc.) over a period of time.',
            description4: 'Cost of goods sold (COGS) definition: The direct expenses related to producing the goods sold by a business. The formula for calculating this will depend on what is being produced, but as an example this may include the cost of the raw materials (parts) and the amount of employee labor used in production.',
            description5: 'Credit (CR) definition: An accounting entry that may either decrease assets or increase liabilities and equity on the company\'s balance sheet, depending on the transaction. When using the double-entry accounting method there will be two recorded entries for every transaction: A credit and a debit.',
            description6: 'Debit (DR) definition: An accounting entry where there is either an increase in assets or a decrease in liabilities on a company\'s balance sheet.',
            description7: 'General ledger (GL) definition: A complete record of the financial transactions over the life of a company.',
            description8: 'Liabilities (current and long-term) definition: A company\'s debts or financial obligations incurred during business operations. Current liabilities (CL) are those debts that are payable within a year, such as a debt to suppliers. Long-term liabilities (LTL) are typically payable over a period of time greater than one year. An example of a long-term liability would be a multi-year mortgage for office space.',
            description9: 'Net income (NI) definition: A company\'s total earnings, also called net profit. Net income is calculated by subtracting total expenses from total revenues.',
            description10: 'Profit and loss statement (P&L) definition: A financial statement that is used to summarize a company\'s performance and financial position by reviewing revenues, costs and expenses during a specific period of time, such as quarterly or annually.',
            description11: 'Variable Cost: These are costs that change with the volume of sales and are the opposite of Fixed Costs. Variable costs increase with more sales because they are an expense that is incurred in order to deliver the sale. For example, if a company produces a product and sells more of that product, they will require more raw materials in order to meet the increase in demand.',
            description12: 'Fixed Cost: A Fixed Cost is one that does not change with the volume of sales. For example, rent and salaries won\'t change if a company sells more. The opposite of a Fixed Cost is a Variable Cost.',
            exmple: false,
        },
    ];

    return (
        <div>
            <div className="blog__head">Blogs</div>
            <div className="blog__letsfun">
                <div className="blog__list">
                    {blogs.map((blog, i) => (
                        <div key={blog.id}>
                            <Link to={{ pathname: "/blogdescription", state: { id: blog.id, title: blog.title, image: blog.inimage, description1: blog.description1, description2: blog.description2, description3: blog.description3, description4: blog.description4, description5: blog.description5, description6: blog.description6, description7: blog.description7, description8: blog.description8, description9: blog.description9, description10: blog.description10, description11: blog.description11, description12: blog.description12, exmple: blog.exmple, exmtit: blog.exmtit, exmdes: blog.exmdes } }} style={{ textDecoration: 'none' }}>
                                <div className="blog__list__blo">
                                    <img src={blog.image} className="blog__list__blo__img__tag" alt='Something is wrong' />
                                    <div className="blog__list__blo__tit">{blog.title}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Getaccount />
            <Footer />
        </div>
    )
}

export default Blog;
