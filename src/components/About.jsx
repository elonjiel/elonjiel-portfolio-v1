import React from 'react'
import { RxGithubLogo } from "react-icons/rx";
import { FaBootstrap, FaFigma, FaReact, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";










function About() {
  return (
    <section className="bg-color-900 py-16 px-5 sm:px-6 lg:px-16 xl:px-32 lg:pb-16">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
      {/*Left*/}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-4 lg:pr-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-color-500 mb-8">About Me</h2>
          <p className="text-lg text-color-100">
            As a Mechatronics Engineering graduate, I'm eager to transition my career toward frontend development, where I can merge my technical skills with creativity. I find immense satisfaction in crafting user-friendly interfaces and bringing designs to life through code. When I'm not coding, you'll find me exploring nature, unwinding on beaches, camping under the stars, and of course, enjoying a cup of coffee—it's the fuel for my coding adventures!
          </p>
        </div>
      </div>
      {/*Right*/}
      <div className="w-full lg:w-1/2 lg:ml-4 lg:pl-4">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-color-500 mb-8">Tech Stack</h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border-4 border-color-300 p-4">
                    <FaHtml5 className="text-5xl text-orange-600" />
                </div>
                    <p className="text-sm text-color-100 mt-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border-4 border-color-300 p-4">
                    <FaCss3Alt className="text-5xl text-blue-500" />
                </div>
                    <p className="text-sm text-color-100 mt-2">CSS3</p>
                </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border-4 border-color-300 p-4">
                    <IoLogoJavascript className="text-5xl text-yellow-400" />
                </div>
                    <p className="text-sm text-color-100 mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border-4 border-color-300 p-4">
                    <FaReact className="text-5xl text-cyan-400" />
                </div>
                    <p className="text-sm text-color-100 mt-2">ReactJS</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border-4 border-color-300 p-4">
                    <RxGithubLogo className="text-5xl text-white" />
                </div>
                    <p className="text-sm text-color-100 mt-2">GitHub</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border-4 border-color-300 p-4">
                    <SiTailwindcss className="text-5xl text-cyan-400" />
                </div>
                    <p className="text-sm text-color-100 mt-2">Tailwind</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border-4 border-color-300 p-4">
                    <FaBootstrap className="text-5xl text-purple-600" />
                </div>
                    <p className="text-sm text-color-100 mt-2">Bootstrap</p>
            </div>
            <div className="flex flex-col items-center text-center">
                <div className="rounded-2xl border-4 border-color-300 p-4">
                    <FaFigma className="text-5xl text-red-400" />
                </div>
                    <p className="text-sm text-color-100 mt-2">Figma</p>
            </div>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default About