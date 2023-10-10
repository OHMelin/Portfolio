import React from 'react'
import LogosReact from '../assets/experience/LogosReact.svg'
import DeviconTailwindcss from '../assets/experience/DeviconTailwindcss.svg'
import MaterialSymbolsFavoriteRounded from '../assets/experience/MaterialSymbolsFavoriteRounded.svg'
import SimpleIconsMui from '../assets/experience/SimpleIconsMui.svg'

const Footer = () => {
  return (
    <div className='pt-32 p-4 flex justify-center'>
      <a className='grayscale has-tooltip w-fit flex justify-center' href='https://github.com/OHMelin/Portfolio' target='_blank' rel='noreferrer'>
        <span class='tooltip -mt-10 bg-secondary rounded-md p-1 px-2 justify-center'>Click to visit repository</span>
        Made with 
        <img className='inline-block ml-2' src={MaterialSymbolsFavoriteRounded} alt="" width={20} />,
        <img className='inline-block mx-2' src={LogosReact} alt="" width={20} />,
        <img className='inline-block mx-2' src={SimpleIconsMui} alt="" width={20} />
        & 
        <img className='inline-block mx-2' src={DeviconTailwindcss} alt="" width={20} />
        by OHMelin
      </a>
    </div>
  )
}

export default Footer