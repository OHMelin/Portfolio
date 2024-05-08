import React from 'react';
import Meditate from '../assets/poses/meditate.png'

function PageNotFound() {
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-4'>
      <img className='animate-floating rounded-lg' src={Meditate} alt="" width={100} />
      <p>404: Thisn't Pagen't Doesn't Existn't</p>
    </div>
  );
}

export default PageNotFound;
