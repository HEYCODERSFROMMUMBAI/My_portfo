import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2008 - 202023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="University of Mumbai (2020 - 2023)"
            result="7.74/10 '"
            des="Graduate of Mumbai University with a solid foundation in development, equipped with practical skills and a commitment to continuous learning and professional growth."
          />
          <ResumeCard
            title="Abhinav vidilaya"
            subTitle="Jr clg (2018 - 2020)"
            result="A grade"
            des=" Science graduate from Mumbai University, equipped with a strong academic background  in Information technology, eager to apply knowledge and pursue further education"
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="RBT vidilaya (2008 - 2018)"
            result="A grade"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Developer"
            subTitle="LeoGaurd pvt.ltd - (2023 - Present)"
            result="Mumbai"
            des="Experienced MERN stack developer with 1 year of hands-on expertise in MongoDB, Express.js, React.js, and Node.js, adept at building scalable web applications and APIs with a focus on performance and user experience."
          />

        </div>
      </div>
    </motion.div>
  );
}

export default Education