import React from 'react';
import Portrait from '../assets/portrait.png';
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
                    <h1 className='text-3xl font-bold'>OHMelin</h1>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores fuga ut ex. Inventore provident optio laborum sequi molestiae ad atque libero, praesentium tempore nostrum accusamus ducimus dolore totam voluptate odit magnam assumenda laboriosam enim. Error voluptate harum maxime ad, aliquam, a expedita quaerat dolorum, inventore quae consequuntur tempora voluptas quod. Asperiores, eos recusandae. Natus dolores distinctio modi enim vel pariatur ipsum quae tempora! Sit odio, sint fuga at obcaecati dolores voluptates porro magni laudantium veritatis exercitationem delectus ratione sapiente et consequatur. Nihil error explicabo blanditiis est corrupti non aliquam repudiandae sint aspernatur quidem impedit porro accusantium quasi, nam sapiente?</p>
                </div>
                <div className='flex lg:justify-end h-[100%] py-8'>
                    <img className='animate-floating m-auto lg:ml-0 lg:mr-0 max-h-[200px] max-w-[200px]' src={Floating} alt="Portrait" />
                </div>
            </div>

            <div className='lg:pt-8'>
                <ul>
                    <li className='flex pb-4'><FaLinkedin className='mr-2 mt-1'/><a href="https://www.linkedin.com/in/oliver-holst-melin/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
                    <li className='flex pb-4'><FaGithub className='mr-2 mt-1'/><a href="https://github.com/OHMelin/" target='_blank' rel='noreferrer'>Github</a></li>
                    <li className='flex pb-4'><FaPaperPlane className='mr-2 mt-1'/>oliverholstmelin@gmail.com</li>
                    <li className='flex'><FaPhone className='mr-2 mt-1'/>+45 51782325</li>
                </ul>
            </div>
        </div>
    )
}

export default Hero