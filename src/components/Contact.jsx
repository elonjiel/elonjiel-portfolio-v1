import React from 'react'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import { BsFileText } from 'react-icons/bs';


import { motion } from "framer-motion"

function Contact() {
  return (
    <section id="contact" className="bg-color-900 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
        <motion.h2
         whileInView={{ opacity: 1, y: 0}}
         initial={{ opacity: 0, y: -25}}
         transition={{ duration: 1 }} 
         className="text-3xl font-semibold text-color-500 mb-8">Get in Touch
        </motion.h2>
        <div className="flex flex-col items-center justify-center">
            <motion.div
             whileInView={{ opacity: 1, x: 0}}
             initial={{ opacity: 0, x: -15}}
             transition={{ duration: 1 }} 
             className="rounded-lg p-2">
            <p className="text-color-300">Guiguinto, Bulacan, Philippines</p>
            </motion.div>
            <motion.div
             whileInView={{ opacity: 1, x: 0}}
             initial={{ opacity: 0, x: 15}}
             transition={{ duration: 1 }} 
             className="rounded-lg p-2">
            <p className="text-color-300">+63 945 506 6373</p>
            </motion.div>
            <motion.div
             whileInView={{ opacity: 1, x: 0}}
             initial={{ opacity: 0, x: -15}}
             transition={{ duration: 1 }} 
             className=" rounded-lg p-2">
            <a href="mailto:elonjiel@gmail.com" className="text-color-300 hover:underline">elonjiel@gmail.com</a>
            </motion.div>
        </div>
        </div>
        <motion.div
         whileInView={{ opacity: 1, y: 0}}
         initial={{ opacity: 0, y: 25}}
         transition={{ duration: 1 }} 
         className="flex items-center justify-center gap-6 pt-8">
            <a href="mailto:elonjiel@gmail.com" className="text-blue-500 hover:underline">
              <AiOutlineMail size={32} />
            </a>
            <a href="https://www.linkedin.com/in/elon-jiel-tumbokon-334952188" target="_blank" className="text-blue-500 hover:underline">
              <AiFillLinkedin size={32} />
            </a>
            <a href="https://github.com/elonjiel" target="_blank" className="text-blue-500 hover:underline">
              <AiFillGithub size={32} />
            </a>
            <a href="https://www.dropbox.com/scl/fi/22136uha1hbiyewt61677/Elon-Jiel-Tumbokon-CV.pdf?rlkey=bo3uqjxca6bllcpqilyqrchc2&st=qy0xudqo&dl=0" target="_blank" className="text-blue-500 hover:underline">
              <BsFileText size={32} />
            </a>
          </motion.div>
    </section>
  )
}

export default Contact