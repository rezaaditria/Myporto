'use client'
import style from "@/Components/Navbar/Navbar.module.css";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [showMenu, setShowMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setShowMenu(false); 
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


  return (
    <>
      <div className={`${style.container} ${showMenu ? style.responsive : ''}`}>
    
        <div className={style.list}>
          <Link href="/">About</Link>
          <Link href="/Experiences">Experiences</Link>
          <Link href="/Skills">Skills</Link>
          <Link href="/Projects">Projects</Link>
          <Link href="/Contact">Contact</Link>
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
              ? 'sm:hidden absolute top-0 left-[20%] right-0 bottom-0 flex justify-center items-center h-screen text-white bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[120%] right-0 bottom-0 flex justify-center items-center h-screen text-white bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            {(!showAboutMenu || showMenu) && (
              <>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-white-500'>
                  <Link href="/">About</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-white-500'>
                  <Link href="/Experiences">Experiences</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-white-500'>
                  <Link href="/Skills">Skills</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-white-500'>
                  <Link href="/Projects">Projects</Link>
                </li>
                <li onClick={handleNav} className='p-4 text-2xl hover:text-white-500'>
                  <Link href="/Contact">Contact</Link>
                </li>
              </>
            )}
         
          </ul>
        </div>
      </div>
    </>
  );
}
