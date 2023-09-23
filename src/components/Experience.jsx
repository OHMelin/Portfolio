import React from 'react';
import DeviconAngular from '../assets/experience/DeviconAngular.svg'
import DeviconCsharp from '../assets/experience/DeviconCsharp.svg'
import DeviconCss3 from '../assets/experience/DeviconCss3.svg'
import DeviconHtml5 from '../assets/experience/DeviconHtml5.svg'
import DeviconJava from '../assets/experience/DeviconJava.svg'
import LogosReact from '../assets/experience/LogosReact.svg'
import DeviconTailwindcss from '../assets/experience/DeviconTailwindcss.svg'
import DeviconSass from '../assets/experience/DeviconSass.svg'

const Experience = () => {
    return (
        <div className='p-4 bg-secondary'>
            <div className='max-w-[1440px] m-auto'>
                <h2 className='text-center font-bold text-2xl pb-4'>Experience</h2>
                <div className='py-4 flex justify-around flex-wrap'>
                    <img src={LogosReact} alt="" width={100} />
                    <img src={DeviconAngular} alt="" width={100} />
                    <img src={DeviconTailwindcss} alt="" width={100} />
                    <img src={DeviconSass} alt="" width={100} />
                    <img src={DeviconHtml5} alt="" width={100} />
                    <img src={DeviconCss3} alt="" width={100} />
                    <img src={DeviconCsharp} alt="" width={100} />
                    <img src={DeviconJava} alt="" width={100} />
                </div>
            </div>
        </div>
    )
}

export default Experience