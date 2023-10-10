import React from 'react'
import {
    FaRunning,
    FaBookReader,
    FaCode,
    FaDumbbell,
    FaMusic,
    FaGlassCheers,
} from 'react-icons/fa'

const icons = [
    {
        logo: FaRunning,
        tooltip: 'Running',
    },
    {
        logo: FaBookReader,
        tooltip: 'Reading',
    },
    {
        logo: FaCode,
        tooltip: 'Programming',
    },
    {
        logo: FaDumbbell,
        tooltip: 'Working out',
    },
    {
        logo: FaMusic,
        tooltip: 'Listening to music',
    },
    {
        logo: FaGlassCheers,
        tooltip: 'Fun with friends',
    },
]

const Sparetime = () => {
    const iconList = icons.map((iconnn) => {
        const SpecificIcon = iconnn.logo;

        return (
            <div className='has-tooltip flex justify-center'>
                <span class='tooltip -mt-12 bg-primary rounded-md p-1 px-2 justify-center'>{iconnn.tooltip}</span>
                <SpecificIcon className='hover:animate-zooming' size={50}  />
            </div>
        )
    })

    return (
      <div className='p-4 bg-secondary'>
          <div className='max-w-[1440px] m-auto'>
              <h2 className='text-center font-bold text-2xl pb-4'>Sparetime</h2>
              <div className='py-8 flex justify-around flex-wrap gap-4'>
                {iconList}
              </div>
          </div>
      </div>
    )
}

export default Sparetime