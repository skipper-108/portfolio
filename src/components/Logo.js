import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  // const [isHovered, setIsHovered] = useState(false);

  // return (
  //   <div 
  //     className='relative flex items-center justify-center mt-2' 
  //     onMouseEnter={() => setIsHovered(true)} 
  //     onMouseLeave={() => setIsHovered(false)}
  //   >
  //     {/* Tooltip */}
  //     {isHovered && (
  //       <motion.span
  //         className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md shadow-lg dark:bg-white dark:text-black"
  //         initial={{ opacity: 0, y: 5 }}
  //         animate={{ opacity: 1, y: 100 }}
  //         exit={{ opacity: 0, y: -5 }}
  //         transition={{ duration: 0.3 }}
  //       >
  //         Developed By CodeWithDhruv
  //       </motion.span>
  //     )}

  //     {/* Logo */}
  //     <MotionLink 
  //       href="https://dhananjayarne.vercel.app/"
  //       target='_blank'
  //       className='w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full
  //       text-2xl font-bold border border-solid border-transparent dark:border-light'
  //       whileHover={{
  //         backgroundColor: [
  //           "#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", 
  //           "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"
  //         ],
  //         transition: { duration: 1, repeat: Infinity }
  //       }}
  //     >
  //       CD
  //     </MotionLink>
  //   </div>
  // );
}

export default Logo;
