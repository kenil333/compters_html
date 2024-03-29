import React from 'react';
import { Link } from 'react-router-dom';

import '../cssfiles/Getaccount.css';
import { ReactComponent as GetstSvg } from '../../assets/svgs/getstar.svg';

function Getaccount() {
    return (
        <div className="getaccount">
            <div className="getaccount__content">
                <p className="getaccount__content__head">Get your Virtual <span style={{ color: '#2D5F5C', fontSize: '35px' }}>Compters</span> Accountant</p>
                <p className="getaccount__content__mess">Are you looking to change or hire an accountant? We are expert’s accountants for business owners who do not miss opportunities. Get a free consultation here.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ width: '1px', height: '1px' }}></div>
                    <Link to='/contact' style={{ textDecoration: 'none' }}><div className='getaccount__content__but'>Get Started</div></Link>
                </div>
            </div>
            <div className='getaccount__image'>
                <GetstSvg className='getaccount__image__ima' />
            </div>
        </div>
    )
}

export default Getaccount;
