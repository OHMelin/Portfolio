import React from 'react';
import Portrait from '../assets/portrait.png';
import {
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
    FaPhone,
} from 'react-icons/fa'

const Hero = () => {
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold'>OHMelin</h1>
                    <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima cumque, excepturi alias perspiciatis, inventore eos animi sed perferendis ut explicabo iure corporis, ipsum repellendus aut delectus beatae esse mollitia? Dignissimos consequatur maiores numquam eos placeat magni laudantium ducimus cupiditate dicta, necessitatibus tenetur, officia voluptatibus dolorem sunt, cumque dolore exercitationem modi iure! Officia possimus ipsam excepturi magnam tenetur itaque, mollitia aut quia odio quod atque quo deserunt blanditiis deleniti perspiciatis beatae nobis culpa vitae, recusandae maiores quae! Veritatis corporis a quibusdam. Sunt esse qui repellat pariatur doloribus similique tenetur. Voluptatem quae obcaecati incidunt. Nobis cupiditate a exercitationem. Expedita maiores quia reiciendis ad esse quod? Error cupiditate voluptate qui nemo autem, ducimus ex rerum omnis natus at iusto ullam ea! Ab dolores aut molestiae dolorum eum nulla, autem ratione ea laudantium dolorem explicabo error magni ullam repellendus veniam impedit iusto ipsum asperiores omnis repudiandae recusandae tenetur excepturi delectus. Mollitia neque obcaecati alias. Incidunt porro id accusantium sit illo saepe est tempore quaerat, officia error odio animi totam molestias accusamus mollitia impedit natus excepturi deserunt, ipsam dolorem suscipit adipisci, eaque fuga. Deserunt distinctio accusantium assumenda repudiandae suscipit, ullam iure molestias quod ducimus. Quam a harum necessitatibus accusantium sed quidem qui ullam optio quaerat illum veritatis maxime officiis deserunt molestias consequatur vitae amet sequi praesentium tenetur minus quasi, ea quos esse. Facere et ipsum beatae assumenda praesentium nostrum, maxime asperiores porro corrupti voluptas corporis dolore neque quod quae consequatur provident facilis aliquid earum accusantium laboriosam quas nobis pariatur repudiandae. Suscipit maiores nihil laborum exercitationem.</p>
                </div>
                <div className='flex justify-end h-[100%]'>
                    <img className='mb-auto mt-auto max-h-[200px] max-w-[200px]' src={Portrait} alt="Portrait" />
                </div>
            </div>

            <div className='pt-8'>
                <ul>
                    <li className='flex pb-4'><FaGithub className='mr-2 mt-1'/><a href="https://github.com/OHMelin/" target='_blank' rel='noreferrer'>Github</a></li>
                    <li className='flex pb-4'><FaLinkedin className='mr-2 mt-1'/><a href="https://www.linkedin.com/in/oliver-holst-melin/" target='_blank' rel='noreferrer'>LinkedIn</a></li>
                    <li className='flex pb-4'><FaPaperPlane className='mr-2 mt-1'/>oliverholstmelin@gmail.com</li>
                    <li className='flex'><FaPhone className='mr-2 mt-1'/>+45 51782325</li>
                </ul>
            </div>
        </div>
    )
}

export default Hero