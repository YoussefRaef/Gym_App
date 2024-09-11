import React from 'react';
import Button from './Button';

export default function Hero() {
  return (
    <div className='p-4 min-h-screen flex flex-col gap-10 items-center justify-center
    text-center max-w-[800px] w-full mx-auto'>
        <div className='flex flex-col gap-4'>

      <p>Its Time to Get</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
        Muscle<span className='text-blue-400'>Gym</span>
      </h1>
        </div>
      <p className='text-sm md:text-base font-light'>
        I hereby acknowledge that I have <span className='text-blue-400 font-medium'>read</span>, <span className='text-blue-400 font-medium'>understood</span>, and <span className='text-blue-400 font-medium'>fully accept</span> the terms and conditions governing the use of this service. By proceeding, I agree to be bound by all the rules, policies, and guidelines as outlined, and I commit to comply with the stated obligations and responsibilities.
      </p>
      <Button func={()=>
        window.location.href='#generate'
      } text={"Accept and Begin"} ></Button>
    </div>
  );
}
