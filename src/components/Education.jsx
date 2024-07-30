/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
// import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import {fadeIn} from "../variants";

// Education
const education = [
  {
    name: "CHAITANYA BHARATHI INSTITUTE OF TECHNOLOGY",
    year:
      "2021 - 2025",
    course: "B.E. Computer Science and Engineering",
    prefix_marks: "CGPA",
    marks: "9.21"
  },
  {
    name: "NARAYANA JUNIOR COLLEGE",
    year:
      "2019 - 2021",
    course: "PCM",
    prefix_marks: "Percentage",
    marks: "98.2 %"
  },
  {
    name: "AKSHARA INTERNATIONAL SCHOOL",
    year:
      "2014 - 2019",
    course: "",
    prefix_marks: "Percentage",
    marks: "96.4 %"
  },
];

const Education = () => {
  return (
    <section className="section mt-24" id="education">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16 justify-around">
          {/* text and images */}
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex justify-center flex-col mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6 text-5xl lg:text-6xl">Education</h2>

            <button className="btn w-[300px] hidden lg:block">See my work</button>
          </motion.div>
          {/* education */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          >
            {/* education list */}
            <div className="flex-1">
              {
                education.map((details, index) => {
                  // destructure data
                  const {name, year, course, prefix_marks, marks} = details;
                  return (
                    <div className="border-b border-white/20 mb-[36px] flex pb-[18px]" key={index}>
                      <div className="max-w-[476px] border-l-2 pl-[20px] pr-[30px]">
                        <h4 className="text-[20px] tracking-wider font-tertiary font-semibold">{name}</h4>
                        <p className="font-secondary leading-tight text-justify font-semibold">{course}</p>
                        <p className="font-secondary leading-tight text-justify mb-1">{year}</p>
                        <p className="font-secondary leading-tight text-justify font-bold">{prefix_marks} : <span className="font-tertiary font-bold">{marks}</span></p>
                      </div>
                      {/* <div className="flex  flex-col flex-1 items-end">
                        <a href="#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center"> <BsArrowUpRight/> </a>
                        <a href="#" className="text-gradient text-sm">{link}</a>
                      </div> */}
                    </div>
                  )
                })
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
