import React from 'react'

function Hero() {
  return (
  <section className="bg-color-900 border-b border-color-800 py-16 px-5 sm:px-6 lg:px-16 lg:pb-24">
    <div className="max-w-6xl mx-auto md:flex items-center justify-between">
      {/* Left */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-6xl tracking-tight text-color-400 pb-8 lg:mt-24 lg:text-8xl">Elon Jiel</h1>
        <span className="bg-gradient-to-r from-color-200 via-color-400 to-color-700 bg-clip-text text-4xl tracking-tight text-transparent">Frontend Developer</span>
        <p className="my-2 py-6 text-color-100">I specialize in frontend development, crafting engaging user interfaces and seamless experiences. My expertise lies in HTML, CSS, and JavaScript, with proficiency in framework like React. I have a keen eye for design and usability, ensuring that every project I work on is not only visually appealing but also functional and intuitive. With a passion for staying updated with the latest industry trends, I am committed to delivering high-quality frontend solutions that exceed user expectations.</p>
      </div>
      {/* Right */}
      <div className="md:w-1/2 flex justify-center">
        <img className="w-full md:w-2/3 rounded-lg shadow-lg" src="src\images\profile.jpg" alt="Hero Image" />
      </div>
    </div>
  </section>
  )
}

export default Hero