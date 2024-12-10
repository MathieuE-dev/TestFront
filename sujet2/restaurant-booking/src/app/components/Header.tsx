'use client'

import React, {useState, useEffect} from 'react';
import '../design/header.css';

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
            scroll > 100 ? 'header-scrolled' :undefined
        }`}
        > </header>
    )
}