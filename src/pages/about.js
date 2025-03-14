import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/layout'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Head from 'next/head';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';

import Education from '@/components/Education';
import TransitionEffect from '@/components/transitionEffect';


const AnimatedNumber = ({value}) =>{

  const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000});
const isInView = useInView(ref, {once : true});

useEffect(() => {
if(isInView){
  motionValue.set(value);


  
}


}, [isInView, value, motionValue]);



useEffect(() => {

  springValue.on("change" , (latest)=>{
    if(ref.current && latest.toFixed(0)<= value){
      ref.current.innerHTML = Math.ceil(latest);  
    }
}, [springValue, value])})



  return <span ref={ref}>

  </span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About me" />
      </Head>

      <TransitionEffect />

      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16 flex flex-col items-center justify-center'>
          <AnimatedText text="Passion Fuels Purpose" className='mb-16 text-center lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />

          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 items-center'>
            
            {/* Profile Image on the Left */}
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 
              dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 flex justify-center items-center md:order-1'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image 
                src={profilePic} 
                alt="CodeWithSumit" 
                className='w-full h-auto rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Biography Section on the Right */}
            <div className='col-span-5 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8 md:order-2'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                Hi, I’m Sumit Kumar, a passionate software developer and competitive programmer with a strong foundation in Data Structures, Algorithms, and Web Development. 
                I am currently pursuing a Bachelor of Technology in Electronics and Communication Engineering at IIIT Bhagalpur.
              </p>

              <p className='my-4 font-medium'>
                I have hands-on experience in full-stack web development, working with React.js, Express.js, Node.js, MongoDB, and SQL. 
                My expertise also extends to Tailwind CSS, ensuring sleek and efficient UI designs. 
                Additionally, I am actively working on Machine Learning, exploring data-driven solutions and model optimization to solve real-world problems.
              </p>

              <p className='font-medium'>
                My technical expertise spans C++, Python, JavaScript, SQL, and the MEAN & MERN stacks, making me proficient in building scalable and efficient applications across various industries.
              </p>
            </div>

          </div>

          {/* Skills & Education Sections */}
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About