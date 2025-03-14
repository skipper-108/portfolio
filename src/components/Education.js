import React, { useRef } from 'react'
import { useScroll, motion }   from 'framer-motion'   ;
import LiIcon from './LiIcon';

const Details = ({type, time, place, info}) => {
    const ref  = useRef(null);  

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-cener justify-between
        md:w-[80%]
    '>
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{y:50}}
        whileInView={{y:0.5 , type:"spring", stiffness: 100}}
        
        >
            <h3 className='capitalize font-bold text-2xl'>
                {type}</h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
               {time} | {place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '> Education

        </h2>

        <div ref={ref} className='w-[75%] mx-auot relative
           lg:w-[90%] md:w-full
        '>

            <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            
            
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>
            <ul className='w-full flex flex-col items-center justify-between ml-4 
                 xs:ml-2 
            '>
          
          <Details
    type="Senior Secondary"
    time="2019-2021"
    place="Holy Cross Public School, Muzaffarpur, Bihar, India"
    info="Maths and Science"
/>

<Details

type="Bachelors in Electronics and Communication Engineering"
time="2022-2026"
place="IIIT Bhagalpur, Bihar, India"
info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, Machine Learning and VLSI"
   
/>



              
            </ul>
        </div>
    </div>
  )
}

export default Education