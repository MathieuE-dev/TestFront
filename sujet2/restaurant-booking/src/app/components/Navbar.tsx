import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { navs } from '../data/data';
import '../design/Navbar.css';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [navList, setNavList] = useState(navs);
  const [scroll, setScroll] = useState(0);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleNavActive = () => {
    let position = scroll + 200;
    setNavList(
      navList.map(nav => {
        nav.active = false;
        const targetSection: HTMLElement = document.querySelector(
          '#' + nav.target
        )!;

        if (
          targetSection &&
          position >= targetSection.offsetTop &&
          position <= targetSection.offsetTop + targetSection.offsetHeight
        ) {
          nav.active = true;
        }
        return nav;
      })
    );
  };

  const handleScrollTo = (section: string) => {
    const header: HTMLElement = document.querySelector('#header')!;
    const offset = header.offsetHeight;
    const targetEl: HTMLElement = document.querySelector('#' + section)!;
    if (pathname === '/') {
      const elementPosition = targetEl.offsetTop;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    } else {
      router.push(`/#${section}`);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  useEffect(() => {
    handleNavActive();
  }, [scroll]);

  return (
    <nav
      id="navbar"
      className={`navbar order-last order-lg-0 ${
        open ? 'navbar-mobile' : undefined
      }`}
    >
      <ul>
        {navList.map(nav => (
          <li key={nav.id}>
            <a
              className={`nav-link scrollto ${
                nav.active ? 'active' : undefined
              }`}
              onClick={() => handleScrollTo(nav.target)}
            >
              {nav.name === 'Home' ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </a>
          </li>
        ))}
      </ul>
      <i
        className="bi bi-list mobile-nav-toggle"
        onClick={handleToggleMenu}
      ></i>
    </nav>
  );
}