import { assets } from '@/assets/assets'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const Navbar = ({isDarkMode, toggleDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();
    
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (scrollY > 50){
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' width={1200} height={800} className='w-full' />
    </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={assets.logo} alt='' width={112} height={40} className='w-28 cursor-pointer mr-14'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm"} `}>
                <li><a className='font-Ovo' href='#top'>Home</a></li>
                <li><a className='font-Ovo' href='#about'>About Me</a></li>
                <li><a className='font-Ovo' href='#services'>Work Experience</a></li>
                <li><a className='font-Ovo' href='#work'>Projects</a></li>
                <li><a className='font-Ovo' href='#contact'>Contact Me</a></li>
            </ul>

            <div className='flex items-center gap-4'>

                

                <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt='' width={12} height={12} className='w-3'/></a>

                <button className='block md:hidden ml-3' onClick={openMenu}>
                    <Image src={assets.menu_black} alt='' width={24} height={24} className='w-6' />
                </button>
            </div>

            {/* -- ----- Mobile Menu ----- -- */}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={assets.close_black} alt='' width={20} height={20} className='w-5 cursor-pointer' />
                </div>

                <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About Me</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#services'>Work Experiences</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#work'>Projects</a></li>
                <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact Me</a></li>
            </ul>

        </nav>
    </>
  )
}

export default Navbar