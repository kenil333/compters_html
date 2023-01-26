import React from 'react';

import '../cssfiles/Sercont.css';
import bookico from '../../assets/images/s1.png';
import softico from '../../assets/images/s2.png';
import finaico from '../../assets/images/s3.png';

function Sercont() {

    const servi = [
        {
            id: '1',
            icon: bookico,
            title: 'Bookkeeping',
            description: 'We do periodic bookkeeping for businesses which would include but is not limited to matching/reconciling bank transactions, cash account, accounts receivables, accounts payable, and preparation of financial statements. It would include all end-to-end tasks to make your books complete and updated.',
        },
        {
            id: '2',
            icon: softico,
            title: 'Training with Bookkeeping Softwares',
            description: 'Many business owners in the very nascent stage of the business do their books on their own and ask us for help for one-time training. This might involve two tasks: 1) training with accounting principles and 2) training with the software. This would be helpful for business owners who have a basic understanding of accounting principles as we could help with training in software.',
        },
        {
            id: '3',
            icon: finaico,
            title: 'Finance Services',
            description: 'This is the part that takes place after books are ready. Many times business owners have no idea what is going in their business especially in the initial phase and that\'s where we could help. We could help you understand different items of financial statements and guide you with different decisions that would help you in the future. It involves different aspects like working on operating margins, return ratios, breakeven point analysis, debt planning, working capital analysis, cost structure analysis, periodic budgeting and variance analysis, etc. amongst others.',
        },
    ];

    return (
        <div className="provide__services">
            {servi.map((serv, i) => (
                <div className="provide__services__container" key={serv.id}>
                    <div style={{ height: '50px' }} />
                    <center><img src={serv.icon} className="provide__services__img" alt='Something is Wrong' /></center>
                    <p className="provide__services__container__head">{serv.title}</p>
                    <p className="provide__services__container__desc">{serv.description}</p>
                    <div style={{ height: '50px' }} />
                </div>
            ))}
        </div>
    )
}

export default Sercont;
