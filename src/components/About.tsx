import React from 'react';

const About = () => {
  return (
    <div  data-aos="fade-right"id="about" className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
        <div className="flex justify-center">
          <img 
            src="about.png"  
            alt="About Me"
            className="rounded-lg shadow-lg w-full max-w-sm"
          />
        </div>

        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-500 mb-4">
            Hello! I'm Nida Khan, a passionate software developer with a love for creating meaningful
            applications. With experience in React, TypeScript, and various other web technologies, I enjoy
            building responsive and user-friendly websites. In my free time, I like exploring new tech
            trends, learning new programming languages, and contributing to open-source projects.
          </p>
          <p className="text-gray-500">
            I strive to build applications that not only meet user needs but also have clean, maintainable code.
            My focus is on continuous learning and improving my skills to stay updated with the latest industry trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
