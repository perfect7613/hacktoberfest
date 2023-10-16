"use client"

import { LinkedinIcon } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <div className="flex justify-between p-10">
      <motion.div initial={{x: -500, opacity: 0, scale: 0.5}} animate={{x:0, opacity:1, scale:1}} transition={{duration: 1.5}} className='flex items-center gap-5'>
        <LinkedinIcon/>
        <LinkedinIcon/>
        <LinkedinIcon/>
      </motion.div>
      <ModeToggle/>
    </div>
  )
}

export default Navbar