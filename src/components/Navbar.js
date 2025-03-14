import React, { useState } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon, CodeforcesIcon, LeetCodeIcon } from './Icons';
import { motion } from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

// Custom Link for Desktop Navigation
const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      <span>{title}</span>
      <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 dark:bg-light
        group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}`}>
        &nbsp;
      </span>
    </Link>
  );
};

// Custom Link for Mobile Navigation
const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  return (
    <Link href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={toggle}>
      <span>{title}</span>
      <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300`}>
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>

      {/* Mobile Menu Button */}
      <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm  
          ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'}`} />
        <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5  
          ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
        <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm  
          ${isOpen ? '-rotate-45 translate-y-0.5' : 'translate-y-0.5'}`} />
      </button>

      {/* Desktop Navigation */}
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/about" title="About" className='mx-4' />
          <CustomLink href="/projects" title="Projects" className='mx-4' />
        </nav>

        {/* Social Links */}
        <nav className='flex items-center justify-center flex-wrap'>
          <motion.a whileHover={{ y: -2 }} href="https://github.com/skipper-108" className="w-6 mx-3"
            whileTap={{ scale: 0.9 }} target="_blank"><GithubIcon /></motion.a>
          <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/sumit-kumar176/"
            className="w-6 mx-3" whileTap={{ scale: 0.9 }} target="_blank"><LinkedInIcon /></motion.a>
          <motion.a whileHover={{ y: -2 }} href="https://www.leetcode.com/skipper_108"
            className="w-6 mx-3" whileTap={{ scale: 0.9 }} target="_blank"><LeetCodeIcon /></motion.a>
          <motion.a whileHover={{ y: -2 }} href="https://codeforces.com/profile/skipper_108"
            className="w-6 mx-3" whileTap={{ scale: 0.9 }} target="_blank"><CodeforcesIcon /></motion.a>

          {/* Dark/Light Mode Switch */}
          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
            {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between items-center z-30 fixed top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink href="/about" title="About" toggle={handleClick} />
            <CustomMobileLink href="/projects" title="Projects" toggle={handleClick} />
          </nav>

          {/* Mobile Social Links */}
          <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a whileHover={{ y: -2 }} href="https://github.com/skipper-108"
              className="w-6 mx-3 sm:mx-1" whileTap={{ scale: 0.9 }} target="_blank"><GithubIcon /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="https://www.linkedin.com/in/sumit-kumar176/"
              className="w-6 mx-3 sm:mx-1" whileTap={{ scale: 0.9 }} target="_blank"><LinkedInIcon /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="https://www.leetcode.com/skipper_108"
              className="w-6 mx-3 sm:mx-1" whileTap={{ scale: 0.9 }} target="_blank"><LeetCodeIcon /></motion.a>
            <motion.a whileHover={{ y: -2 }} href="https://codeforces.com/profile/skipper_108"
              className="w-6 mx-3 sm:mx-1" whileTap={{ scale: 0.9 }} target="_blank"><CodeforcesIcon /></motion.a>

            <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}>
              {mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />}
            </button>
          </nav>
        </motion.div>
      )}

      {/* Clickable Logo */}
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
