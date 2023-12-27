'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-cyan fixed top-0 left-0 right-0 z-10 backdrop-blur-md" style={{ backdropFilter: 'blur(10px)', boxSizing: 'border-box', borderBottom: '1px solid', borderImage: 'linear-gradient(to right, #D9D9D900, #ffffff, #D9D9D900)', borderImageSlice: 1 }}>
        <div className="justify-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-end py-3 md:py-5 md:block">
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
              <li className="pb-6 pt-5 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-cyan-900 border-white-900 md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 pt-5 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-white-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#Experiences" onClick={() => setNavbar(!navbar)}>
                  Experiences
                  </Link>
                </li>
                <li className="pb-6 pt-5 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-white-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#Skills" onClick={() => setNavbar(!navbar)}>
                    Skills
                  </Link>
                </li>
                <li className="pb-6 pt-5 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-cyan-600  border-white-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#Projects" onClick={() => setNavbar(!navbar)}>
                    Projects
                  </Link>
                </li>
                <li className="pb-6 pt-5 text-xl text-white py-2 px-6 text-center   md:border-b-0  hover:bg-cyan-600  border-white-900  md:hover:text-cyan-600 md:hover:bg-transparent">
                  <Link href="#Contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;