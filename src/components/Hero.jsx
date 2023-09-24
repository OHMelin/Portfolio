import React from 'react';
import Meditate from '../assets/meditate.png'
import {
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='py-32 p-4 max-w-[1440px] m-auto'>
            <div className='grid lg:grid-cols-2 md:grid-cols-1'>
                <div className='flex flex-col'>
                    <h1 className='text-6xl font-bold font-handwriting'>Oliver Melin</h1>
                    <p className='pt-4'>Howdy! I'm Oliver, a dedicated Computer Science student based in Denmark. I find joy in working on my personal projects in my spare time. Scroll down to read about these exciting ventures. In my free time, I thrive with friends and physical activities, whether it's hitting the gym or going for a run.</p>
                    <p className='py-4'>My primary focus and passion lie in web development. I'm striving to evolve into a proficient full-stack developer, blending creativity and programming.</p>
                </div>
                <div className='flex lg:justify-end h-[100%] py-8'>
                    <img className='animate-floating m-auto lg:ml-0 lg:mr-0 max-h-[400px] max-w-[400px]' src={Meditate} alt="Portrait" />
                </div>
            </div>

            <div className='lg:pt-8'>
                <ul>
                    <li className='flex pb-4'><FaLinkedin className='mr-2 mt-1'/><a className='hover:underline' href="https://www.linkedin.com/in/oliver-holst-melin/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
                    <li className='flex pb-4'><FaGithub className='mr-2 mt-1'/><a className='hover:underline' href="https://github.com/ohmelin/" target='_blank' rel='noreferrer'>Github</a></li>
                    <li className='flex'><a className='flex hover:underline' href="mailto:oliverholstmelin@gmail.com"><FaPaperPlane className='mr-2 mt-1'/>oliverholstmelin@gmail.com</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Hero