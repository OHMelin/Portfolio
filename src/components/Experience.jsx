import React from 'react';
import DeviconAngular from '../assets/experience/DeviconAngular.svg'
import DeviconCsharp from '../assets/experience/DeviconCsharp.svg'
import DeviconCss3 from '../assets/experience/DeviconCss3.svg'
import DeviconHtml5 from '../assets/experience/DeviconHtml5.svg'
import DeviconJava from '../assets/experience/DeviconJava.svg'
import LogosReact from '../assets/experience/LogosReact.svg'
import DeviconTailwindcss from '../assets/experience/DeviconTailwindcss.svg'
import DeviconSass from '../assets/experience/DeviconSass.svg'
import LogosAdobePhotoshop from '../assets/experience/LogosAdobePhotoshop.svg'
import LogosAdobeXd from '../assets/experience/LogosAdobeXd.svg'

const icons = [
    {
        logo: LogosReact,
        tooltip: 'React',
    },
    {
        logo: DeviconAngular,
        tooltip: 'Angular',
    },
    {
        logo: DeviconTailwindcss,
        tooltip: 'TailwindCSS',
    },
    {
        logo: DeviconSass,
        tooltip: 'Sass',
    },
    {
        logo: DeviconHtml5,
        tooltip: 'HTML',
    },
    {
        logo: DeviconCss3,
        tooltip: 'CSS',
    },
    {
        logo: LogosAdobePhotoshop,
        tooltip: 'Photoshop',
    },
    {
        logo: LogosAdobeXd,
        tooltip: 'AdobeXD',
    },
    {
        logo: DeviconCsharp,
        tooltip: 'C#',
    },
    {
        logo: DeviconJava,
        tooltip: 'Java',
    },
]

const Experience = () => {
    const iconList = icons.map((icon) => {
        return (
            <div className='has-tooltip flex justify-center'>
                <span class='tooltip -mt-12 bg-primary rounded-md p-1 px-2 justify-center'>{icon.tooltip}</span>
                <img className='hover:animate-zooming' src={icon.logo} alt="" width={100} />
            </div>
        )
    })

    return (
        <div className='p-4 bg-secondary'>
            <div className='max-w-[1440px] m-auto'>
                <h2 className='text-center font-bold text-2xl pb-4'>Experience</h2>
                <div className='py-8 flex justify-around flex-wrap gap-4'>
                    {iconList}
                </div>
            </div>
        </div>
    )
}

export default Experience