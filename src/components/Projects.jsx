import React from 'react'
import { motion } from "framer-motion"
import flavorfusionImage from "../images/flavorfusion.png"
import ghubImage from "../images/ghub.png"
import portfolioImage from "../images/portfolio.png"
import budgetImage from "../images/budget.png"
import motivgenImage from "../images/motivgen.png"


function Projects() {
  return (
    <section id= "projects" className="bg-color-900 border-b border-color-800 py-10 px-4 sm:px-6 lg:px-12 lg:pb-12">
        <div className="max-w-5xl mx-auto ">
            <motion.h2 
             whileInView={{ opacity: 1, y: 0}}
             initial={{ opacity: 0, y: -25}}
             transition={{ duration: 1 }}
             className="text-3xl font-semibold text-color-500 mb-10 text-center">Projects
            </motion.h2>
            {/* Project 1  */}
            <div className="grid md:grid-cols-2 md:grid-cols-reverse-2 gap-10 md:gap-28 items-center mt-2 mb-10">
                <motion.img
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: -15}}
                 transition={{ duration: 1 }} 
                 className="border-2 border-color-500 rounded-2xl p-3" src={flavorfusionImage} alt="FlavorFusion Image" />
                <motion.div 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: 15}}
                 transition={{ duration: 1 }}
                 className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-color-500">FlavorFusion</h3>
                <p className="text-sm py-2 md:py-6 leading-6 text-color-50">
                    A Food Recipe Website powered by the Edamam API. Effortlessly browse through a wide range of recipes based on ingredients, cuisine types, cooking methods, and more.
                </p>
                <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">REACT</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">TAILWIND</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">EDAMAM API</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">NETLIFY</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <a href="https://flavorfusion-elonjiel.netlify.app" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">Live Link</a>
                    <a href="https://github.com/elonjiel/proj-food" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">View Code</a>
                </div>
                </motion.div>
            </div>
            {/* Project 2  */}
            <div className="grid md:grid-cols-2 md:grid-cols-reverse-2 gap-10 md:gap-28 items-center mt-2 mb-10">
                <motion.img
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: -15}}
                 transition={{ duration: 1 }} 
                 className="border-2 border-color-500 rounded-2xl p-3" src={ghubImage} alt="G.Hub Image" />
                <motion.div 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: 15}}
                 transition={{ duration: 1 }} className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-color-500">G.Hub</h3>
                <p className="text-sm py-2 md:py-6 leading-6 text-color-50">
                    An interactive Game Store Website developed using React. Dive into a world of gaming and explore your favorite titles. Easily search, like, and add games to your cart with just a few clicks.
                </p>
                <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">REACT</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">CSS3</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">BOOTSTRAP</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">SWIPERJS</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">REACT TOAST</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">NETLIFY</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <a href="https://ghub-elonjiel.netlify.app" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">Live Link</a>
                    <a href="https://github.com/elonjiel/proj-game" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">View Code</a>
                </div>
                </motion.div>
            </div>
            {/* Project 3  */}
            <div className="grid md:grid-cols-2 md:grid-cols-reverse-2 gap-10 md:gap-28 items-center mt-2 mb-10">
                <motion.img
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: -15}}
                 transition={{ duration: 1 }} 
                 className="border-2 border-color-500 rounded-2xl p-3" src={portfolioImage} alt="Portfolio Image" />
                <motion.div 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: 15}}
                 transition={{ duration: 1 }} className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-color-500">Portfolio v1</h3>
                <p className="text-sm py-2 md:py-6 leading-6 text-color-50">
                    My First Portfolio that reflects my passion for clean design, seamless functionality, and attention to detail in web development. Incorporated Framer Motion animations for seamless transitions and engaging effects, elevating the user experience. 
                </p>
                <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">REACT</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">TAILWIND</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">FRAMER MOTION</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">NETLIFY</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <a href="https://elonjiel.netlify.app" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">Live Link</a>
                    <a href="https://github.com/elonjiel/elonjiel-portfolio-v1" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">View Code</a>
                </div>
                </motion.div>
            </div>
            {/* Project 4  */}
            <div className="grid md:grid-cols-2 md:grid-cols-reverse-2 gap-10 md:gap-28 items-center mt-2 mb-10">
                <motion.img
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: -15}}
                 transition={{ duration: 1 }} 
                 className="border-2 border-color-500 rounded-2xl p-3" src={budgetImage} alt="Budget Planner Image" />
                <motion.div 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: 15}}
                 transition={{ duration: 1 }} className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-color-500">Budget Planner</h3>
                <p className="text-sm py-2 md:py-6 leading-6 text-color-50">
                    A Budget Planner App perfect for effortlessly tracking expenses. Easily add or remove expenses and keep track of your remaining budget and total spending.
                </p>
                <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">REACT</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">BOOTSTRAP</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">NETLIFY</span>

                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <a href="https://budgetapp-elonjiel.netlify.app" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">Live Link</a>
                    <a href="https://github.com/elonjiel/proj-budget" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">View Code</a>
                </div>
                </motion.div>
            </div>
            {/* Project 5 */}
            <div className="grid md:grid-cols-2 md:grid-cols-reverse-2 gap-10 md:gap-28 items-center mt-2 mb-10">
                <motion.img
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: -15}}
                 transition={{ duration: 1 }} 
                 className="border-2 border-color-500 rounded-2xl p-3" src={motivgenImage} alt="MotivGen Image" />
                <motion.div 
                 whileInView={{ opacity: 1, x: 0}}
                 initial={{ opacity: 0, x: 15}}
                 transition={{ duration: 1 }} className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-color-500">MotivGen</h3>
                <p className="text-sm py-2 md:py-6 leading-6 text-color-50">
                   A Motivational Quote Generator powered by the Quotable.io API. Generate inspiring quotes at the touch of a button. MotivGen also has text-to-speech functionality and a convenient copy-to-clipboard feature.
                </p>
                <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">HTML5</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">CSS3</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">JAVASCRIPT</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">QUOTABLE.IO API</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">TEXT-TO-SPEECH</span>
                    <span className="mr-2 rounded-xl bg-slate-800 px-2 py-1 text-sm text-color-100">NETLIFY</span>

                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <a href="https://motivgen-elonjiel.netlify.app" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">Live Link</a>
                    <a href="https://github.com/elonjiel/proj-motivgen" target="_blank" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">View Code</a>
                </div>
                </motion.div>
            </div>
            
            
        </div>
    </section>
  )
}

export default Projects