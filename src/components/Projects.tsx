import React from 'react';
import Heading from './Heading';
import Card from './Card'; 

const data = [
  {
    id: 0,
    title: "website 1",
    desc: "A React & TypeScript based app for managing and organizing",
    img: "/project1.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "website 2",
    desc: "A React & TypeScript based app for managing and organizing",
    img: "/WEB3.jpg",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "website 3",
    desc: "A React & TypeScript based app for managing and organizing",
    img: "/pro 3.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "website 4",
    desc: "A React & TypeScript based app for managing and organizing",
    img: "/pro.4.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "website 5",
    desc: "A React & TypeScript based app for managing and organizing",
    img: "/pro5.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
  {
    id: 5,
    title: "website 6",
    desc: "A React & TypeScript based app for managing and organizing",
    img: "/project1.png",
    tags: ["React", "Node", "CSS", "TypeScript"],
  },
 
  // Additional project entries as needed
];

const Projects = () => {
  return (
    <div 
      id='projects' 
      className='container pt-32 bg-cover bg-center' 
    >
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

   