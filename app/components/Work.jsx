import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Projects</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my software development portfolio! Explore a collection of projects showcasing my expertise in software development.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 gap-6'>
            {workData.map((project, index)=>(
                <div key={index} className='bg-white border border-gray-200 rounded-xl p-6 cursor-pointer group hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                    <div className='flex flex-col h-full'>
                        <div className='flex-1 mb-4'>
                            <h2 className='font-semibold text-lg mb-2 text-gray-800 group-hover:text-blue-600 transition-colors'>{project.title}</h2>
                            <p className='text-sm text-gray-600 leading-relaxed'>{project.description}</p>
                        </div>
                        <div className='flex justify-end'>
                            <a href={project.link} className='inline-flex items-center justify-center w-10 h-10 bg-gray-100 border border-gray-300 rounded-full hover:bg-blue-50 hover:border-blue-300 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300'>
                                <Image src={assets.send_icon} alt='visit project' width={16} height={16} className='w-4 h-4 group-hover:brightness-0 group-hover:invert transition-all' />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work