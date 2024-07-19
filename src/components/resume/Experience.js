// import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 md:py-12 font-titleFont flex flex-col md:flex-row md:gap-20"
    >
      <div className="mb-10 md:mb-0">
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[2px]">2023 - Current</p>
          <h2 className="text-xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full md:w-auto md:min-w-[400px] max-w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col md:gap-10">
          <ResumeCard
            title="Web Developer"
            subTitle="LeoGaurd - (2023 - 2024)"
            result="Mumbai"
            des="Experienced MERN stack developer with 1 year of hands-on expertise in MongoDB, Express.js, React.js, and Node.js, adept at building scalable web applications and APIs with a focus on performance and user experience."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 md:gap-4">
          <p className="text-xs md:text-sm text-designColor tracking-[2px]">2001 - 2020</p>
          <h2 className="text-xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full md:w-auto md:min-w-[400px] max-w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col md:gap-10">
          <ResumeCard
            title="Instructor"
            subTitle="career infotech (2022 - 2023)"
            result="Mumbai"
            des="Instructor at coding classes, guiding students in programming fundamentals and advanced techniques to foster technical skills and creativity."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
