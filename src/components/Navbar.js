import { ArrowRightIcon} from '@heroicons/react/solid';
import React from 'react';
import '../App.css';

const url = 'http://facebook.com';

export default function Navbar() {
    return(
        <header className='bg-gray-800 md:sticky top-0 z-10'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <img className='logo-img' alt='personal-logo' src='./snap.jpg'/>
                <h5 className='title-font font-medium text-white mb-4 md:mb-0'>
                    <a href='/' className='ml-3 mr-3 text-xl'> Vincent Kipruto </a>
                </h5>

                <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center'>
                <a href='#projects' className='mr-5  hover:text-white'>Projects</a>
                <a href='#skills' className='mr-5 hover:text-white'>Skills</a>
                <a href='#testimonials' className='mr-5 hover:text-white'>Testimonials</a>
                </nav>

                <a href={`${url}`} target='_blank' rel="noreferrer" className='inline-flex items-center bg-green-500 border-0 py-2 px-6 text-white focus:outline-none hover:bg-green-700 rounded text-base nt-4 md:mt-0'>
                    Linkedin
                    <ArrowRightIcon className='w-4 h-4 ml-1'/>
                    </a>
            </div>
        </header>
    );
}