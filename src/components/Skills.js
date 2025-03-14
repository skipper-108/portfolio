import React from 'react'
import {motion} from 'framer-motion';

const Skill = ({name, x, y}) => {
    return (
        <motion.div
        className=' flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 
        shadow-dark cursor-pointer absolute py-3 px-6
        
        dark:text-dark dark:bg-light

        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent  xs:text-dark xs:dark:text-light xs:font-bold
lg:p-6 md:p-4 xs:text-xs xs:p-2 

        '
        style={{x, y}}
        initial ={{x: 0, y:0}}
        whileInView={{x: x, y: y}}  
        transition={{duration: 1.5}}
        viewport={{once:true}}
 
        >
        {name}
        </motion.div>
    )
}


const Skills = () => {
  return (
<>

<h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32  '> Skills</h2>
<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark

lg:h-[80vh] sm:h-[60vh] 
lg:bg-circularLightLg lg:dark:bg-circularDarkLg
md:bg-circularLightMd md:dark:bg-circularDarkMd
sm:bg-circularLightSm sm:dark:bg-circularDarkSm
'>


<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer
 dark:text-dark dark:bg-light  md:p-4
' whileHover={{scale:1.1}} whileTap={{scale:1.05}}>
Dev
</motion.div>


<Skill name="c++" x="-25vw" y="2vw" />
<Skill name="Data Structure"  x="0vw" y="12vw" />
<Skill name="JavaScript" x="-20vw" y="-15vw" />
<Skill name="React.js" x="15vw" y="-12vw" />
<Skill name="SQL" x="32vw" y="-5vw" />
<Skill name="Competitive Programming " x="0vw" y="-20vw" />
<Skill name="ML" x="-25vw" y="18vw" />
<Skill name="VLSI" x="18vw" y="18vw" />


</div>
</>
  )
}

export default Skills