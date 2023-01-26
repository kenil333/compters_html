import React from 'react';

import '../cssfiles/Services.css';
import h1 from '../../assets/images/h1.png';
import h2 from '../../assets/images/h2.png';
import h3 from '../../assets/images/h3.png';
import h4 from '../../assets/images/h4.png';
import h5 from '../../assets/images/h5.png';
import h6 from '../../assets/images/h6.png';
import h7 from '../../assets/images/h7.png';
import arr from '../../assets/images/arr.png';
import chal from '../../assets/images/chal.png';

function ServiFlowChart() {
    return (
        <div className="service__flowchart">
            <p className="service__flowchart__tit">How we look at our services ?</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '1px' }} />
                <div className="service__flowchart__container">
                    <img src={h1} className="service__flowchart__container__img" alt="Something is Wrong" />
                    <div className="service__flowchart__container__con">
                        <p className="service__flowchart__container__tit">Business Transaction</p>
                    </div>
                </div>
                <div style={{ width: '1px' }} />
            </div>
            <center><img src={arr} className="service__down__arrow" alt="Something is Wrong" /></center>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '1px' }} />
                <div className="service__flowchart__container">
                    <img src={h2} className="service__flowchart__container__img" alt="Something is Wrong" />
                    <div className="service__flowchart__container__con">
                        <p className="service__flowchart__container__tit">Bookkeeping</p>
                        <p>Recording transactions and posting/ categorization  to various accounts.</p>
                    </div>
                </div>
                <div style={{ width: '1px' }} />
            </div>
            <center><img src={arr} className="service__down__arrow" alt="Something is Wrong" /></center>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '1px' }} />
                <div className="service__flowchart__container">
                    <img src={h3} className="service__flowchart__container__img" alt="Something is Wrong" />
                    <div className="service__flowchart__container__con">
                        <p className="service__flowchart__container__tit">Preparation of Financial Accounts</p>
                    </div>
                </div>
                <div style={{ width: '1px' }} />
            </div>
            <center><img src={arr} className="service__down__arrow" alt="Something is Wrong" /></center>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '1px' }} />
                <div className="service__flowchart__container">
                    <img src={h4} className="service__flowchart__container__img" alt="Something is Wrong" />
                    <div className="service__flowchart__container__con">
                        <p className="service__flowchart__container__tit">Accounting</p>
                        <p>Finalising various accounts, make adjusting entries, provide relevant insights.</p>
                    </div>
                </div>
                <div style={{ width: '1px' }} />
            </div>
            <center><img src={arr} className="service__down__arrow" alt="Something is Wrong" /></center>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '1px' }} />
                <div className="service__flowchart__container">
                    <img src={h5} className="service__flowchart__container__img" alt="Something is Wrong" />
                    <div className="service__flowchart__container__con">
                        <p className="service__flowchart__container__tit">Preparation of Financial Statements</p>
                        <p>CPA & Finance Services.</p>
                    </div>
                </div>
                <div style={{ width: '1px' }} />
            </div>
            <center><img src={chal} className="service__down__arrow__chal" alt="Something is Wrong" /></center>
            <div className="serice__flo__cf__div">
                <div className="serice__flo__cf__div__cont">
                    <div style={{ width: '1px' }} />
                    <div className="service__flowchart__container">
                        <img src={h6} className="service__flowchart__container__img" alt="Something is Wrong" />
                        <div>
                            <p className="service__flowchart__container__tit">CPA</p>
                            <p>Preparation for Taxes.</p>
                        </div>
                    </div>
                </div>
                <div className="serice__flo__cf__div__cont">
                    <div className="service__flowchart__container" style={{ alignItems: "flex-start" }}>
                        <img src={h7} className="service__flowchart__container__img" alt="Something is Wrong" />
                        <div className="service__flowchart__container__con__ano">
                            <p className="service__flowchart__container__tit">Finance Services</p>
                            <p style={{ textAlign: 'justify', fontSize: '14px', marginBottom: '5px' }}>1. How is my cost structure? Fixed, variable, semi- variable costs, etc.</p>
                            <p style={{ textAlign: 'justify', fontSize: '14px', marginBottom: '5px' }}>2. When will the business achieve break even? Potential scale benefits?</p>
                            <p style={{ textAlign: 'justify', fontSize: '14px', marginBottom: '5px' }}>3. How much debt should I take relative to total capital given underlying profitability?</p>
                            <p style={{ textAlign: 'justify', fontSize: '14px', marginBottom: '5px' }}>4. Is my working capital cycle sustainable? How are my Accounts receivable and Accounts payable performing?</p>
                            <p style={{ textAlign: 'justify', fontSize: '14px', marginBottom: '5px' }}>5. How much cash should I keep in business given historical needs?</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="flow__impo__mess">* We would help you make your financials ready for CPA and your CPA would have to take on from here. This is the part where we would not be able to help you for now.</p>
        </div>
    )
}

export default ServiFlowChart;
