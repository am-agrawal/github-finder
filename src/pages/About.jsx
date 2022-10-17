import React from 'react'

function About() {
  return (
    <>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
    
      <p className="text-lg text-gray-400">
        Version <span className="text-primary">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Developed By:
        <a className="text-primary hover:text-black" href="https://twitter.com/amagrawal_20" target="_blank" rel="noreferrer">
          {" Aman Agrawal"}
        </a>
      </p>
    </>
  )
}

export default About
