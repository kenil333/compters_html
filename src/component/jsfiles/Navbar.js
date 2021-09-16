import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import SpeedRoundedIcon from '@material-ui/icons/SpeedRounded';
import BookRoundedIcon from '@material-ui/icons/BookRounded';
import ContactlessRoundedIcon from '@material-ui/icons/ContactlessRounded';
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import '../cssfiles/Navbar.css';
import logoima from '../../assets/images/logo.png';


function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    const showsidebar = () => setSidebar(!sidebar);

    return (
        <>
        <div className="navbar">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <img className='navbar__logo' src={logoima} alt={'Reload the Page Something is wrong'} />
            </Link> 
            <div className="navbar__iteams">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <p className='navbar__option'>Home</p>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                    <p className='navbar__option'>About</p>
                </Link>
                <Link to='/service' style={{ textDecoration: 'none' }}>
                    <p className='navbar__option'>Services</p>
                </Link>
                <Link to='/testimonial' style={{ textDecoration: 'none' }}>
                    <p className='navbar__option'>Testimonials</p>
                </Link>
                <Link to='/blog' style={{ textDecoration: 'none' }}>
                    <p className='navbar__option'>Blog</p>
                </Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                    <p className='navbar__option'>Contact</p>
                </Link>
            </div>
            <div className="navabar__meny">
                {sidebar ? <CloseRoundedIcon onClick={() => showsidebar()}/> :  <MenuRoundedIcon onClick={() => showsidebar()}/>}
            </div>
        </div>
        <div className='drawer' style={sidebar ? {left: '0px'} : {left: '-100%'}}>
            <div style={{height: '30px'}}></div>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <div className='drawer__option' onClick={() => showsidebar()}>
                    <div style={{width: '20px'}}></div>
                    <HomeRoundedIcon className='drawer__icon' />
                    <p className='drawer__text'>Home</p>
                </div>
            </Link>
            <div style={{height: '10px'}}></div>
            <Link to='/about' style={{ textDecoration: 'none' }}>
                <div className='drawer__option' onClick={() => showsidebar()}>
                    <div style={{width: '20px'}}></div>
                    <InfoRoundedIcon className='drawer__icon' />
                    <p className='drawer__text'>About</p>
                </div>
            </Link>
            <div style={{height: '10px'}}></div>
            <Link to='/service' style={{ textDecoration: 'none' }}>
                <div className='drawer__option' onClick={() => showsidebar()}>
                    <div style={{width: '20px'}}></div>
                    <SpeedRoundedIcon className='drawer__icon' />
                    <p className='drawer__text'>Services</p>
                </div>
            </Link>
            <div style={{height: '10px'}}></div>
            <Link to='/testimonial' style={{ textDecoration: 'none' }}>
                <div className='drawer__option' onClick={() => showsidebar()}>
                    <div style={{width: '20px'}}></div>
                    <AssignmentRoundedIcon className='drawer__icon' />
                    <p className='drawer__text'>Testimonials</p>
                </div>
            </Link>
            <div style={{height: '10px'}}></div>
            <Link to='/blog' style={{ textDecoration: 'none' }}>
                <div className='drawer__option' onClick={() => showsidebar()}>
                    <div style={{width: '20px'}}></div>
                    <BookRoundedIcon className='drawer__icon' />
                    <p className='drawer__text'>Blog</p>
                </div>
            </Link>
            <div style={{height: '10px'}}></div>
            <Link to='/contact' style={{ textDecoration: 'none' }}>
                <div className='drawer__option' onClick={() => showsidebar()}>
                    <div style={{width: '20px'}}></div>
                    <ContactlessRoundedIcon className='drawer__icon' />
                    <p className='drawer__text'>Contact</p>
                </div>
            </Link>
            <div style={{height: '10px'}}></div>
        </div>
        
        <div className="background__image"/>
        </>
    )
}

export default Navbar;

