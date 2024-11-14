import React from 'react';

const Skills = () => {
  return (
    <div data-aos="zoom-in"
      id="skills" 
      className="container mx-auto py-12 px-4 bg-cover bg-center" 
      style={{ backgroundImage: "url('/skillbb.png')" }} 
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-black bg-opacity-40 p-8 rounded-lg"> 
        
        <div className="flex justify-center">
          <img 
            src="skill.png"  
            alt="Skills"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>

        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technologies I work with</h2>
          <p className="text-gray-200 mb-4">
            I have worked with a variety of technologies and frameworks in web development. Some of the
            key skills I have gained include:
          </p>
          
          <ul className="list-disc pl-5 text-gray-300">
            <li>React & React Native</li>
            <li>TypeScript & JavaScript</li>
            <li>HTML5 & CSS3</li>
            <li>Node.js & Express</li>
            <li>Tailwind CSS & Bootstrap</li>
            <li>Version Control with Git</li>
            <li>RESTful APIs</li>
            <li>Database Management (MySQL, MongoDB)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
