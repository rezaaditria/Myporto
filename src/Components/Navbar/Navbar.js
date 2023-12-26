'use client'
import style from "@/Components/Navbar/Navbar.module.css";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import React, { useState, useEffect } from 'react';


export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [showMenu, setShowMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setShowMenu(false);
    setShowAboutMenu(false);
};

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
    return () => {
        window.removeEventListener('scroll', changeColor);
      };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowAboutMenu(false); // Menutup menu "Tentang" ketika menu hamburger diklik
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleAboutClick = () => {
    setShowAboutMenu(!showAboutMenu);
  };

  return (
    <>
      <div className={`${style.container} ${showMenu ? style.responsive : ''}`}>
    
        <div className={style.list}>
          <a className={style.active}><Link href="#">About</Link></a>
          <a><Link href="#Experiences">Experiences</Link></a>
          <a> <Link href="#Skills">Skills</Link></a>
          <a><Link href="#Projects">Projects</Link></a>
          <a><Link href="#Contact">Contact</Link></a>
        </div>

        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

       
         {/* Mobile Menu */}
         <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-[20%] right-0 bottom-0 flex justify-center items-center h-screen text-white text-center ease-in duration-300 '
             : 'sm:hidden absolute top-0 left-[120%] right-0 bottom-0 flex justify-center items-center h-screen text-white text-center ease-in duration-300 blur-background'
          }
        >
          <ul>
            {(!showAboutMenu || showMenu) && (
              <>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="#">About</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="#Experiences">Experiences</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="#Skills">Skills</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="#Projects">Projects</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-gray-500'>
                  <Link href="#Contact">Contact</Link>
                </li>
              </>
            )}
           
            
         
          </ul>
        </div>
      </div>
    </>
  );
}
