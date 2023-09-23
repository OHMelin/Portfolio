import React from 'react'
import LogosReact from '../assets/experience/LogosReact.svg'
import DeviconTailwindcss from '../assets/experience/DeviconTailwindcss.svg'
import MaterialSymbolsFavoriteRounded from '../assets/experience/MaterialSymbolsFavoriteRounded.svg'

const Footer = () => {
  return (
    <div className='pt-32 p-4'>
        <p className='text-center grayscale'>
          Made with 
          <img className='inline-block ml-2' src={MaterialSymbolsFavoriteRounded} alt="" width={20} />,
          <img className='inline-block mx-2' src={LogosReact} alt="" width={20} />
          & 
          <img className='inline-block mx-2' src={DeviconTailwindcss} alt="" width={20} />
          by OHMelin</p>
    </div>
  )
}

export default Footer