import React from 'react'
import ACC from '../assets/projects/ACC.png'
import GraveOfAnubis from '../assets/projects/GraveOfAnubis.png'
import LudoCraft from '../assets/projects/LudoCraft.png'
import SkullWars from '../assets/projects/SkullWars.png'
import StatsViewer from '../assets/projects/StatsViewer.png'
import Duffy from '../assets/projects/Duffy.png'
import Valoks from '../assets/projects/Valoks.png'
import TouchGrass from '../assets/projects/TouchGrass.png'

const projects = [
    {
        logo: ACC,
        title: 'AFK Console Client',
        subtitle: 'Electron application',
        desc: 'On a lot of competitive Minecraft servers AFK\'ing is almost necessary to compete. You need to be online at all times to activate chunks and keep your passive farms making you money. That\'s where our client comes into play. While most computers usually struggle keeping 3-4 instances of Minecraft running, our client can AFK with up to 300 concurrent accounts whilst keeping a lower power usage.',
        tech: ['1', '2', '3'],
    },
    {
        logo: GraveOfAnubis,
        title: 'Grave of Anubis',
        subtitle: 'Unity game',
        desc: 'The game was made for a school project by myself and three others. The team consisted of two programmers and two designers. We had about 6 weeks to finish the game and write a 150.000 characters long assignment. ​Sound effects, assets, scripts and everything else you come across has been made from scratch. The game was uploaded to Itch where it\'s free to download and play. Click "Download" to try it yourself.',
        tech: ['1', '2', '3'],
    },
    //{
    //    logo: LudoCraft,
    //    title: 'LudoCraft',
    //    subtitle: 'Boardgame',
    //    desc: 'The idea behind this boardgame was thought out by a few friends and myself at school. We worked on it for a small school-project and finished the main board. Since then I designed the box, rule books, logo and finished everything up. It\'s now a polished game. You can read the rules beneath and print it all out to try it yourself.',
    //    tech: ['1', '2', '3'],
    //},
    //{
    //    logo: SkullWars,
    //    title: 'SkullWars',
    //    subtitle: 'Minecraft server',
    //    desc: 'SkullWars was a Minecraft Factions server focused around competitive Factions. The goal of the server was to innovate and hopefully save the game mode from dying out. Unfortunately we took too long developing the server and didn\'t have enough marketing budget to get the server thriving. The project has been a learningful experience to say the least. I\'ve learnt a ton of different skills which I can use in any project. At the peak of SkullWars I had 47 volunteers under me. Over 2,000 unique players have logged onto the server and we\'ve had more than 200 concurrent players.',
    //    tech: ['1', '2', '3'],
    //},
    {
        logo: StatsViewer,
        title: 'StatsViewer',
        subtitle: '.NET statistics application',
        desc: 'This application was made using C# & .NET through Visual Studio. The application was made to keep track of our statistics for our Minecraft AFK Console Client. We needed a quick and easy way to view server connections and more useful information. The project involved working with WebSockets.',
        tech: ['1', '2', '3'],
    },
    //{
    //    logo: Duffy,
    //    title: 'Duffy',
    //    subtitle: 'Beer branding',
    //    desc: 'I designed a logo for a fictional beer brand for a school assignment which turned out great. I designed everything in Photoshop, but visualized the packaging using Adobe Dimension for my 3D render.',
    //    tech: ['1', '2', '3'],
    //},
    {
        logo: Valoks,
        title: 'Valoks',
        subtitle: 'Solutions company',
        desc: 'The company was made as a front for me and my teams development projects. At Valoks we create our own solutions for the market, but we\'re also available to build something for you.',
        tech: ['1', '2', '3'],
    },
    {
        logo: TouchGrass,
        title: 'TouchGrass',
        subtitle: 'Selling artificial grass',
        desc: 'The store is based on a meme. "Touch grass" is often said between gamers, when they\'re too good, or just haven\'t been doing anything else than sitting in front of their computer all day. Through my store you can purchase a 15x15cm patch of fake grass which is sent together with a certificate for touching said grass. There\'s free shipping and you get to type a personalized message for the recipient. ',
        tech: ['1', '2', '3'],
    },
];

const Projects = () => {
  const projectList = projects.map((project, i) => {
    return (
      <div className={`w-full h-full p-4 rounded-md bg-gradient-to-t bg-opacity-25 border-opacity-50 border
        ${i === 0 ? "bg-[#1c8840] border-[#2ee86e]" : ""}
        ${i === 1 ? "bg-[#736f17] border-[#fff734]" : ""}
        ${i === 2 ? "bg-[#4e4e4e] border-[#ababab]" : ""}
        ${i === 3 ? "bg-[#2c4a9a] border-[#009fe3]" : ""}
        ${i === 4 ? "bg-[#54342d] border-[#a37c5f]" : ""}`}>
        {
            /*
        ${i === 0 ? "from-[#1c8840] to-[#2ee86e]" : ""}
        ${i === 1 ? "from-[#736f17] to-[#fff734]" : ""}
        ${i === 2 ? "from-[#4e4e4e] to-[#ababab]" : ""}
        ${i === 3 ? "from-[#2c4a9a] to-[#009fe3]" : ""}
        ${i === 4 ? "from-[#54342d] to-[#a37c5f]" : ""}

        ${i === 2 ? "from-[#763316] to-[#ff783e]" : ""} 
        ${i === 3 ? "from-[#7e217b] to-[#d447eb]" : ""} 
        ${i === 5 ? "from-[#6a2420] to-[#d24940]" : ""} 
            */
        }
        <img className="w-[25%] inline-block mr-2" src={project.logo} alt="" />
        <div className="inline-block align-middle">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <h4 className="font-bold">{project.subtitle}</h4>
        </div>
        <ul className="mt-2 flex gap-1 flex-wrap">
          {project.tech.map((tech) => {
            return <li className="bg-primary bg-opacity-50 rounded-md px-2">{tech}</li>;
          })}
        </ul>
        <p className="my-6">{project.desc}</p>
        <button className="w-full rounded-md bg-primary bg-opacity-50 p-2">More Details</button>
      </div>
    );
  });

  console.log(projectList.map(e => e.props))

  return (
    <div className='py-32 p-4 max-w-[1440px] m-auto'>
        <h2 className='text-2xl font-bold text-center mb-8'>Projects</h2>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center gap-4'>{projectList}</div>
    </div>
  )
}

export default Projects