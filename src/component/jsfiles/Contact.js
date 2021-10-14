import React, {useState} from 'react';
import emailjs from 'emailjs-com';

import '../cssfiles/Contact.css';
import Footer from './Footer';
import Calendar from './Calendar';
import { ReactComponent as GetSvg } from '../../assets/svgs/toch.svg';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

function Contact() {

    const [slides, setSidebar] = useState(false);
    const [slidedate, setSidDate] = useState("Please Choose the Date !");
    const [selSlo, setSelSlo] = useState("Not");
    const [selName, setSelName] = useState("");
    const [selEmail, setSelEmail] = useState("");
    const [selPhone, setSelPhone] = useState("");
    const [handero, setHandero] = useState("");

    const showsidebar = () => setSidebar(!slides);

    const setselslot = (slo) => setSelSlo(slo);

    const sssk = (date) => {
        setSidDate(date);
        showsidebar();
    }

    const sendclick = () => {
        if(slidedate === "Please Choose the Date !" || selSlo === "Not" || selName === "" || selEmail === "" || selPhone === "") {
            setHandero("error");
            console.log("All Feilds are required !");
        }else {
            var paraforemail = {
                from_name: selName,
                booked_date: slidedate,
                booked_time: selSlo,
                from_email: selEmail,
                from_phone: selPhone,
            };
            emailjs.send("service_w4dcsq7", "template_tkgn517", paraforemail, "user_JCRA3a8tY6SroG9Y6Omxc").then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                console.log("We Will Contact You !");
                setHandero("Success");
                setSelName("");
                setSelEmail("");
                setSelPhone("");
                setSelSlo("Not");
            }, function(error) {
                console.log('FAILED...', error);
            });
        }
    }

    const timeslot = [
        {
            id: '1',
            title: '10:00 am'
        },
        {
            id: '2',
            title: '11:00 am'
        },
    ];

    return (
        <div>
            <div className="contact__head">Contact Us</div>
            <div className="contact__dataform">
                <div className="contact__dataform__data">
                    <div className="contact__dataform__data__address">
                        <p className="contact__dataform__data__address__tit">Get in touch with <span style={{color: '#2D5F5C', fontSize:'38px'}}>Compters</span></p>
                        <p className="contact__dataform__data__address__indicator">Office:</p>
                        <p className="contact__dataform__data__address__val">103/B - Shayamal Building, Nr. Mangadh Chowk, Varachha, Surat, India - 395006.</p>
                        <div style={{height:'15px'}} />
                        <p className="contact__dataform__data__address__indicator">Email:</p>
                        <p className="contact__dataform__data__address__val">office@comptersbookkeeping.com</p>
                        <div style={{height:'15px'}} />
                        <p className="contact__dataform__data__address__indicator">Phone:</p>
                        <p className="contact__dataform__data__address__val">US: +1-212-203-0468</p>
                        <p className="contact__dataform__data__address__val">IN: +91-63546-04102</p>
                        <div style={{height:'15px'}} />
                    </div>
                    <div className="contact__dataform__data__img">
                        <GetSvg className="contact__dataform__data__img__ima" />
                    </div>
                </div>
                <p className="contact__bookacall__tit">Book a Call</p>
                <div className="contact__sloat__calander"><Calendar oncfunc={sssk} /></div>
                <div className="assoonasposible">We would email you back as soon as posible to confirm your appointment request and update you with further details.</div>
            </div>
            <div className="contact__us__sides" style={slides ? {right: '0px'} : {right: '-100%'}}>
                <div onClick={() => showsidebar()}><CancelRoundedIcon className="contact__us__sides__close" /></div>
                <p className="contact__us__sides__date">{slidedate}</p>
                <div>
                    {timeslot.map((sloti, i) => (
                        <div className="contact__us__sides__timeslot" key={sloti.id} style={selSlo === (sloti.title) ? {backgroundColor:'#265078', color:'#fff'} : {backgroundColor:'#fff', color:'#265078'}} onClick={() => setselslot(sloti.title)}>{sloti.title}</div>
                    ))}
                </div>
                <div className="contact__us__slide__mar"><input type="text" className="contact__us__slide__input" placeholder="Name" onChange={event => setSelName(event.target.value)} /></div>
                <div className="contact__us__slide__mar"><input type="email" className="contact__us__slide__input" placeholder="Email-Id" onChange={event => setSelEmail(event.target.value)} /></div>
                <div className="contact__us__slide__mar"><input type="text" className="contact__us__slide__input" placeholder="Phone-Number" onChange={event => setSelPhone(event.target.value)} /></div>  
                <div style={{display: 'flex', justifyContent:'space-between'}}>
                    <div style={{width: '1px'}}/>
                    <div className="contact__us__sides__but" onClick={() => sendclick()}>Send</div>
                    <div style={{width: '1px'}}/>
                </div>
                <p className="errorhandlesuccess" style={handero === "error" ? {color:"red"} : {color:'green'}}>{handero === "error" ? "All Feilds are Required." : handero === "Success" ? "We Will Contact You as soon as Posible." : ""}</p>             
            </div>
            <Footer />
        </div>
    )
}

export default Contact;
