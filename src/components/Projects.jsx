import React from 'react'

function Projects() {
  return (
    <section className="bg-color-900 border-b border-color-800 py-12 px-4 sm:px-6 lg:px-12 lg:pb-12 flex justify-center">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-color-500 mb-10 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="rounded-2xl shadow-color-800 shadow-sm py-2 px-2 hover:scale-110">
                <div className="h-48 md:h-full overflow-hidden">
                <img className="w-full h-full object-cover rounded-2xl" src="src\images\flavorfusion1.png" alt="Project 1" />
                </div>
            </div>
            <div className="bg-color-900 rounded-2xl">
                <div className="p-4 md:p-8 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-color-500">FlavorFusion</h3>
                    <p className="text-sm py-2 md:py-8 leading-7 text-color-50 ">A Food Recipe Website powered by the Edamam API. Effortlessly browse through a wide range of recipes based on ingredients, cuisine types, cooking methods, and more. </p>
                    <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2">
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">HTML</span>
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">CSS</span>
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">REACT</span>
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">TAILWIND</span>
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">API</span>
                    </div> 
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                        <a href="#" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">Live Link</a>
                        <a href="#" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">View Code</a>
                    </div>
                </div>
            </div>
            {/* Project 2 */}
            <div className="rounded-2xl shadow-color-800 shadow-sm py-2 px-2 hover:scale-110">
                <div className="h-48 md:h-full overflow-hidden">
                <img className="w-full h-full object-cover rounded-2xl" src="src\images\flavorfusion1.png" alt="Project 1" />
                </div>
            </div>
            <div className="bg-color-900 rounded-2xl">
                <div className="p-4 md:p-8 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-color-500">FlavorFusion</h3>
                    <p className="text-sm py-2 md:py-8 leading-7 text-color-50 ">A Food Recipe Website powered by the Edamam API. Effortlessly browse through a wide range of recipes based on ingredients, cuisine types, cooking methods, and more. </p>
                    <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2">
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">HTML</span>
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">CSS</span>
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">REACT</span>
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">TAILWIND</span>
                        <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">API</span>
                    </div> 
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                        <a href="#" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">Live Link</a>
                        <a href="#" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">View Code</a>
                    </div>
                </div>
            </div>
            {/* Add more projects as needed */}
            </div>
        </div>
    </section>
  )
}

export default Projects