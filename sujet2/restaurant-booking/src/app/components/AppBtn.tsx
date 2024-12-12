import React from "react";
import '../design/appBtn.css';

export default function AppBtn({name}: {name:string}){
    const handleScrollTo = (section: string) => {
        const targetElement = document.getElementById(section);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <a className="app-btn scrollto d-none d-lg-flex"
        onClick={() => handleScrollTo('book-a-table')}
        >
            {name}
        </a>
    );
}
