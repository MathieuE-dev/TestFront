'use client'

import React, {useState, useEffect} from 'react';
import '../design/header.css';
import AppBtn from './AppBtn';
import Navbar from './Navbar';

export default function Header(){
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll',()=> {
            setScroll(window.scrollY);
        });
        return() => {
            window.removeEventListener('scroll',() =>{
                setScroll(window.scrollY);
            });
        };
    },[scroll]);
    return (
        <header id ='header' className={`d-flex align-items-center fixed-top ${
            scroll > 100 ? 'header-scrolled' : undefined
        }`}
        >
            <div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
                <h1 className='logo me-auto me-lg-0'>
                    <a href="#"> Restaurant</a>
                </h1>
                <Navbar />
                <AppBtn name = 'book a table'  />
            </div>
        </header>
    )
}