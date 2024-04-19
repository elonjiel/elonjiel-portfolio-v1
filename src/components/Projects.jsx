import React from 'react'

function Projects() {
  return (
    <section className="bg-color-900 border-b border-color-800 py-10 px-4 sm:px-6 lg:px-12 lg:pb-12">
        <div className="max-w-5xl mx-auto ">
            <h2 className="text-3xl font-semibold text-color-500 mb-10 text-center">Projects</h2>
            <div className="grid md:grid-cols-2 md:grid-cols-reverse-2 gap-10 md:gap-28 items-center mt-2 mb-10">
                <img className="border-2 border-color-500 rounded-2xl p-3 hover:scale-110"src="src\images\flavorfusion.png" alt="FlavorFusion Image" />
                <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-color-500">FlavorFusion</h3>
                <p className="text-sm py-2 md:py-6 leading-7 text-color-50">
                    A Food Recipe Website powered by the Edamam API. Effortlessly browse through a wide range of recipes based on ingredients, cuisine types, cooking methods, and more.
                </p>
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
            <div className="grid md:grid-cols-2 md:grid-cols-reverse-2 gap-10 md:gap-28 items-center mt-2 mb-10">
                <img className="border-2 border-color-500 rounded-2xl p-3 hover:scale-110"src="src\images\ghub.png" alt="FlavorFusion Image" />
                <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-color-500">G.Hub</h3>
                <p className="text-sm py-2 md:py-6 leading-7 text-color-50">
                    An interactive Game Store Website powered by React. Dive into a world of gaming and explore your favorite titles. Easily search, like, and add games to your cart with just a few clicks.
                </p>
                <div className="mb-5 flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">HTML</span>
                    <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">CSS</span>
                    <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">REACT</span>
                    <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">BOOTSTRAP</span>
                    <span className="mr-2 rounded-xl bg-neutral-900 px-2 py-1 text-sm text-color-100">API</span>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                    <a href="#" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">Live Link</a>
                    <a href="#" className="inline-block text-blue-500 text-sm font-medium py-2 px-4 rounded-xl border border-color-800 hover:scale-110 hover:underline uppercase">View Code</a>
                </div>
                </div>
            </div>
            
            
        </div>
    </section>
  )
}

export default Projects