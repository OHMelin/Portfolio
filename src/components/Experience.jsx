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
import DeviconBootstrap from '../assets/experience/DeviconBootstrap.svg'

const Experience = () => {
    return (
        <div className='p-4 bg-secondary'>
            <div className='max-w-[1440px] m-auto'>
                <h2 className='text-center font-bold text-2xl pb-4'>Experience</h2>
                <div className='py-4 flex justify-around flex-wrap gap-4'>
                    <img className='hover:animate-zooming' src={LogosReact} alt="" width={100} />
                    <img className='hover:animate-zooming' src={DeviconAngular} alt="" width={100} />
                    <img className='hover:animate-zooming' src={DeviconBootstrap} alt="" width={100} />
                    <img className='hover:animate-zooming' src={DeviconTailwindcss} alt="" width={100} />
                    <img className='hover:animate-zooming' src={DeviconSass} alt="" width={100} />
                    <img className='hover:animate-zooming' src={DeviconHtml5} alt="" width={100} />
                    <img className='hover:animate-zooming' src={DeviconCss3} alt="" width={100} />
                    <img className='hover:animate-zooming' src={LogosAdobePhotoshop} alt="" width={100} />
                    <img className='hover:animate-zooming' src={LogosAdobeXd} alt="" width={100} />
                    <img className='hover:animate-zooming' src={DeviconCsharp} alt="" width={100} />
                    <img className='hover:animate-zooming' src={DeviconJava} alt="" width={100} />
                </div>
            </div>
        </div>
    )
}

export default Experience