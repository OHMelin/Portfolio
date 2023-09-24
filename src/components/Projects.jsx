import React from 'react'
import ACC from '../assets/projects/ACC.png'
import GraveOfAnubis from '../assets/projects/GraveOfAnubis.png'
import StatsViewer from '../assets/projects/StatsViewer.png'
import Valoks from '../assets/projects/Valoks.png'
import TouchGrass from '../assets/projects/TouchGrass.png'

const projects = [
    {
        logo: ACC,
        title: 'AFK Console Client',
        subtitle: 'Electron application',
        desc: 'A free and easy to use AFK manager application. We\'re developing a paid web version.',
        tech: [],
        link: 'https://minecraftafk.com',
    },
    {
        logo: TouchGrass,
        title: 'TouchGrass',
        subtitle: 'Selling artificial grass',
        desc: 'I sell artificial grass with a certificate for "touching grass". Sold to over 10 different countries.',
        tech: [],
        link: 'https://touchgrass.store',
    },
    {
        logo: Valoks,
        title: 'Valoks',
        subtitle: 'Solutions company',
        desc: 'A small company with two friends, where we build stuff like the AFK Console Client.',
        tech: [],
        link: 'https://valoks.com',
    },
    {
        logo: GraveOfAnubis,
        title: 'Grave of Anubis',
        subtitle: 'Unity game',
        desc: 'A small Unity FPS zombie-like game. Play it yourself by clicking the link!',
        tech: [],
        link: 'https://ohmelin.itch.io/grave-of-anubis',
    },
    {
        logo: StatsViewer,
        title: 'StatsViewer',
        subtitle: '.NET statistics application',
        desc: 'A simple application to keep track of our statistics for the AFK Console Client.',
        tech: [],
    },
];

const Projects = () => {
  const projectList = projects.map((project, i) => {
    return (
      <div className={`w-full h-full p-4 rounded-md bg-gradient-to-t bg-opacity-100 border-opacity-50 flex flex-col border
        ${i === 0 ? "bg-[#1c8840] border-[#2ee86e]" : ""}
        ${i === 1 ? "bg-[#54342d] border-[#a37c5f]" : ""}
        ${i === 2 ? "bg-[#2c4a9a] border-[#009fe3]" : ""}
        ${i === 3 ? "bg-[#736f17] border-[#fff734]" : ""}
        ${i === 4 ? "bg-[#4e4e4e] border-[#ababab]" : ""}`}>
        <div className='flex flex-row items-center'>
          <img className="w-[25%] inline-block mr-4" src={project.logo} alt="" />
          <div className=''>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <h4 className="font-bold">{project.subtitle}</h4>
          </div>
        </div>
        <ul className="mt-2 flex gap-1 flex-wrap">
          {project.tech.map((tech) => {
            console.log(tech)
            return <li className="bg-primary bg-opacity-50 rounded-md px-2">{tech}</li>;
          })}
        </ul>
        <p className="my-6">{project.desc}</p>
        <a className="text-center w-full rounded-md bg-primary bg-opacity-50 p-2 hover:bg-middle hover:bg-opacity-50 mt-auto" href={project.link} target='_blank' rel='noreferrer'>
          {
            project.link ? 'Visit Website' : 'Coming Soon'
          }
        </a>
      </div>
    );
  });

  return (
    <div className='py-32 p-4 max-w-[1440px] m-auto'>
        <h2 className='text-2xl font-bold text-center mb-8'>Projects</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4'>{projectList}</div>
    </div>
  )
}

export default Projects