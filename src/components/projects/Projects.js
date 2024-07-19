// import React from 'react'
// import Title from '../layouts/Title'
// import { projectOne, projectTwo, projectThree } from "../../assets/index";
// import ProjectsCard from './ProjectsCard';

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="w-full py-20 border-b-[1px] border-b-black"
//     >
//       <div className="flex justify-center items-center text-center">
//         <Title
//           title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
//           des="My Projects"
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
//         <ProjectsCard
//           title="Gym Website"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectOne}
//         />
//         <ProjectsCard
//           title="E-commerce Website"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectTwo}
//           githubLink="https://https://github.com/HEYCODERSFROMMUMBAI"
//           websiteLink="https://minimart-nqne.onrender.com/"
//         />
//         <ProjectsCard
//           title="Modern Bank website"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectThree}
//         />
//         <ProjectsCard
//           title="SOCIAL MEDIA CLONE"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectThree}
//         />
//         <ProjectsCard
//           title="E-commerce Website"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectOne}
//         />
//         <ProjectsCard
//           title="Chatting App"
//           des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//               Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
//           src={projectTwo}
//         />
//       </div>
//     </section>
//   );
// }

// export default Projects

import React from 'react';
import Title from '../layouts/Title';
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import bank from '../../assets/bank.jpeg'
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gym Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
          githubLink="https://github.com/HEYCODERSFROMMUMBAI"
          websiteLink="https://gymwebsite-nbvi.onrender.com/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
          githubLink="https://github.com/HEYCODERSFROMMUMBAI"
          websiteLink="https://minimart-96rn.onrender.com/"
        />
        <ProjectsCard
          title="Modern Bank website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={bank}
          githubLink="https://github.com/HEYCODERSFROMMUMBAI"
          websiteLink="https://modernbank-uqb1.onrender.com/"
        />
        {/* Add more ProjectsCard components as needed */}
      </div>
    </section>
  );
}

export default Projects;
