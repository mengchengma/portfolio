import React from 'react'
import Image from 'next/image'
import { infoList, toolsData, assets } from '@/assets/assets'
import '../globals.css';


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo mb-8'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center justify-center'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' width={320} height={400} className='w-full rounded-3xl' />
            </div>
            <div className='flex-1 lg:ml-10 flex flex-col items-center'>
                <p className='mb-10 max-w-2xl font-Ovo text-center'>
                    I am a software developer and computer science student pursuing my degree at New York Institute of Technology. 
                    My expected graduation is December 2025. I have experience as a Software Developer Co-op at InterSoft Associates, 
                    where I engineered internal tools and optimized SQL procedures. I am currently seeking internship or full-time 
                    opportunities after graduation.</p>

                <ul className='grid gird-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                        hover:bg-blue-100
                        hover:-translate-y-1 duration-500
                        hover:shadow-black' key={index}>
                            <Image src={icon} alt={title} width={28} height={28} className='w-7 mt-3' />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>

                
            </div>
        </div>
    </div>
  )
}

export default About