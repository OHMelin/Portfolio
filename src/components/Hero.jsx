import React from 'react';
import Floating from '../assets/floating.png';
import {
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
    FaPhone,
} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='py-32 p-4 max-w-[1440px] m-auto'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1'>
                <div className='flex flex-col'>
                    <h1 className='text-6xl font-bold font-handwriting'>OHMelin</h1>
                    <p className='py-4'>Hi, my name is Oliver. I study Computer science in Denmark. I like to work on my own projects in my spare time, you can read more about those beneath. For fun, I like being around my friends or being active either in the gym or out running.</p>
                </div>
                <div className='flex lg:justify-end h-[100%] py-8'>
                    <img className='animate-floating m-auto lg:ml-0 lg:mr-0 max-h-[200px] max-w-[200px]' src={Floating} alt="Portrait" />
                </div>
            </div>

            <div className='lg:pt-8'>
                <ul>
                    <li className='flex pb-4'><FaLinkedin className='mr-2 mt-1'/><a className='hover:underline' href="https://www.linkedin.com/in/oliver-holst-melin/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
                    <li className='flex pb-4'><FaGithub className='mr-2 mt-1'/><a className='hover:underline' href="https://github.com/ohmelin/" target='_blank' rel='noreferrer'>Github</a></li>
                    <li className='flex pb-4'><a className='flex hover:underline' href="mailto:oliverholstmelin@gmail.com"><FaPaperPlane className='mr-2 mt-1'/>oliverholstmelin@gmail.com</a></li>
                    <li className='flex'><a className='flex hover:underline' href="tel:4551782325"><FaPhone className='mr-2 mt-1'/>+45 51782325</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Hero