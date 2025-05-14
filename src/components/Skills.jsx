import React from 'react'
import {
    SiFigma,
    SiAdobepremierepro,
    SiAdobeillustrator,
    SiDavinciresolve,
    SiCinema4D,
    SiAdobeaftereffects,
    SiAdobephotoshop
  } from "react-icons/si";


function Skills() {
    // Skills data
  const skills = [
    {
      name: "After effects",
      icon: (
        <SiAdobeaftereffects className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      name: "Premiere",
      icon: (
        <SiAdobepremierepro className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      name: "Photoshop",
      icon: (
        <SiAdobephotoshop className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      name: "Illustrator",
      icon: (
        <SiAdobeillustrator className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      name: "DaVinci Resolve",
      icon: (
        <SiDavinciresolve className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      name: "Figma",
      icon: <SiFigma className="text-4xl text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "Cinema 4D",
      icon: (
        <SiCinema4D className="text-4xl text-blue-600 dark:text-blue-400" />
      ),
    },
  ];
  return (
    <section id="skills" className="py-12">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">היכולות שלי</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 text-center"
          >
            {skill.icon}
            <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  )
}

export default Skills