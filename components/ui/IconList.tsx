'use client'

import { motion } from "framer-motion"

type Props = {
    icon : React.ReactNode,
    index : number
}

const variants = {
    hidden: {
        opacity: 0,
        y :20,
      
    },
    visible: {
        opacity: 1,
        y: 0,
       
        
    }
}


  
const IconList = ({icon , index} : Props) => {
  return (
    <motion.li variants={variants} initial="hidden" animate="visible" transition={{
        delay: index * 0.1,
        duration : 0.5,
        ease: 'easeInOut'
    }} viewport={{ amount : 0 }}  className="text-7xl" key={index}>
   {icon}
  </motion.li>
  )
}

export default IconList
