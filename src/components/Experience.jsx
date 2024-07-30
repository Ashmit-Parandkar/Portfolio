/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
// import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import {fadeIn} from "../variants";

// Experience
const experience = [
  {
    name: "ACIC-CBIT",
    year:
      "NOV 2023 - DEC 2023",
    course: "IOT DEVELOPER (RURAL INTERN)",
    prefix_marks: "Engaged in on-site visits to nearby rural areas to understand and identify specific irrigation issues faced by farmers. Integrated the IoT device with the Blynk Application using libraries. Integrated automated features into the IoT device to sense water levels and control the irrigation motor, providing a hands-free and efficient solution for farmers",
  },
  {
    name: "MOTION CUT",
    year:
      "OCT 2023 - NOV 2023",
    course: "WEB DEVELOPER INTERN",
    prefix_marks: "Contributed to the development of SpiceFiesta website by developing a fully functional contact form page, home page and services page. Otimized backend with API integration, ensuring efficient form submission, and facilitating direct communication between customers and business. Implementing responsive design and effective animations for an enhanced user experience.",
  },
];

const Experience = () => {
  return (
    <section className="section mt-24" id="experience">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16 justify-around">
          {/* text and images */}
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className="flex justify-center flex-col mix-blend-lighten mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6 text-5xl lg:text-6xl">Experience</h2>

            <button className="btn w-[300px] hidden lg:block">See my work</button>
          </motion.div>
          {/* experience */}
          <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          >
            {/* experience list */}
            <div className="flex-1">
              {
                experience.map((details, index) => {
                  // destructure data
                  const {name, year, course, prefix_marks} = details;
                  return (
                    <div className="border-b border-white/20 mb-[36px] flex pb-[18px]" key={index}>
                      <div className="max-w-[476px] border-l-2 pl-[20px] pr-[30px]">
                        <h4 className="text-[20px] tracking-wider font-tertiary font-semibold">{name}</h4>
                        <p className="font-secondary leading-tight text-justify font-semibold">{course}</p>
                        <p className="font-secondary leading-tight text-justify mb-1">{year}</p>
                        <p className="font-secondary leading-tight text-justify">{prefix_marks} </p>
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

export default Experience;
