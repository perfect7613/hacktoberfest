"use client"
import { Typewriter } from 'react-simple-typewriter'

function AboutUs() {
  return (
    <div className='flex justify-center text-yellow-500 dark:text-blue-700 lg:text-[70px] md:text-[40px] text-[24px]'>
        <Typewriter words={['MLSC', 'Microsoft Learn Student Community', 'Learn and Contribute to Open Source']} cursorColor='pink' loop={true} cursor={true} cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
    </div>
  )
}

export default AboutUs