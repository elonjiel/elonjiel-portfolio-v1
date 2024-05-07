import React from 'react'
import { motion } from "framer-motion"
import profileImage from "../images/profile.jpg"

const container = (delay) => ({
  hidden: {x: -15, opacity: 0},
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
})



function Hero() {
  return (
  <section id="home" className="bg-color-900 border-b border-color-800 py-16 px-5 sm:px-6 md:px-8 lg:px-16 lg:pb-24">
    <div className="max-w-6xl mx-auto md:flex items-center justify-between">
      {/* Left */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <motion.h1 
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-6xl tracking-tight text-color-400 pb-8 lg:mt-24 lg:text-8xl">Elon Jiel
          </motion.h1>
        <motion.p 
          variants={container(0.7)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-color-200 via-color-400 to-color-700 bg-clip-text text-4xl tracking-tight text-transparent">
          Front-End Developer
        </motion.p>
        <motion.p 
           variants={container(0.9)}
           initial="hidden"
           animate="visible"
          className="my-2 py-6 text-color-100">I specialize in frontend development, crafting engaging user interfaces and seamless experiences. My expertise lies in HTML, CSS, and JavaScript, with proficiency in React, as well as other frameworks like Bootstrap and Tailwind CSS. I have a keen eye for design and usability, ensuring that every project I work on is not only visually appealing but also functional and intuitive. With a passion for staying updated with the latest industry trends, I am committed to delivering high-quality frontend solutions that exceed user expectations.
        </motion.p>
      </div>
      {/* Right */}
      <div className="md:w-1/2 flex justify-center">
        <motion.img 
          initial={{x:15, opacity: 0}}
          animate={{x:0, opacity: 1}}
          transition={{duration: 1, delay: 1.1}}

          className="w-full md:w-2/3 rounded-lg shadow-lg" src={profileImage} alt="Elon Jiel" />
      </div>
    </div>
  </section>
  )
}

export default Hero