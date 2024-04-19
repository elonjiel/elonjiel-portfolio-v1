import React from 'react'
import { AiFillLinkedin, AiOutlineMail, AiFillGithub } from 'react-icons/ai';
import { BsFileText } from 'react-icons/bs';

function Contact() {
  return (
    <div className="bg-color-900 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-color-500 mb-8">Get in Touch</h2>
        <div className="flex flex-col items-center justify-center">
            <div className="rounded-lg p-2">
            <p className="text-color-300">Guiguinto, Bulacan, Philippines</p>
            </div>
            <div className="rounded-lg p-2">
            <p className="text-color-300">+63 945 506 6373</p>
            </div>
            <div className=" rounded-lg p-2">
            <a href="mailto:elonjiel@gmail.com" className="text-color-300 hover:underline">elonjiel@gmail.com</a>
            </div>
        </div>
        </div>
        <div className="flex items-center justify-center gap-6 pt-8">
            <a href="mailto:elonjiel@gmail.com" className="text-blue-500 hover:underline">
              <AiOutlineMail size={32} />
            </a>
            <a href="https://www.linkedin.com/" className="text-blue-500 hover:underline">
              <AiFillLinkedin size={32} />
            </a>
            <a href="https://github.com/" className="text-blue-500 hover:underline">
              <AiFillGithub size={32} />
            </a>
            <a href="/resume.pdf" className="text-blue-500 hover:underline">
              <BsFileText size={32} />
            </a>
          </div>
    </div>
  )
}

export default Contact