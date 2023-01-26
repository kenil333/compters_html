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
                <p className="blog__body__des">{props.description1}</p>
                <center><img src={props.image} alt='Something is wrong' className="blog__body__image" /></center>
                <p className="blog__body__des">{props.description2}</p>
                {props.description3 != null ? <p className="blog__body__des">{props.description3}</p> : <div />}
                {props.description4 != null ? <p className="blog__body__des">{props.description4}</p> : <div />}
                {props.description5 != null ? <p className="blog__body__des">{props.description5}</p> : <div />}
                {props.description6 != null ? <p className="blog__body__des">{props.description6}</p> : <div />}
                {props.description7 != null ? <p className="blog__body__des">{props.description7}</p> : <div />}
                {props.description8 != null ? <p className="blog__body__des">{props.description8}</p> : <div />}
                {props.description9 != null ? <p className="blog__body__des">{props.description9}</p> : <div />}
                {props.description10 != null ? <p className="blog__body__des">{props.description10}</p> : <div />}
                {props.description11 != null ? <p className="blog__body__des">{props.description11}</p> : <div />}
                {props.description12 != null ? <p className="blog__body__des">{props.description12}</p> : <div />}
                {props.exmple ? <div>
                    <p className="blog__exm">Example :</p>
                    <p className="blog__exm__tit">{props.exmtit}</p>
                    <p className="blog__body__des">{props.exmdes}</p>
                </div> : <div />}
            </div>
            <Getaccount />
            <Footer />
        </div>
    )
}

export default BlogDes;
