import React from 'react';
import { useLocation } from 'react-router-dom';

import '../cssfiles/BlogDes.css';
import Getaccount from './Getaccount';
import Footer from './Footer';

function BlogDes() {
    const location = useLocation();
    const props = location.state;
    return (
        <div>
            <div className="blog__head">{props.title}</div>
            <div className="blog__body">
                <p className="blog__body__tit">{props.title}</p>
                <p className="blog__body__des">{props.description1}</p>
                <center><img src={props.image} alt='Something is wrong' className="blog__body__image" /></center>
                <p className="blog__body__des">{props.description2}</p>
            </div>
            <Getaccount />
            <Footer />
        </div>
    )
}

export default BlogDes;
