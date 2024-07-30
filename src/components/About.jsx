/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

import {Link} from "react-scroll"

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <div>
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}

            className="flex h-[150px] lg:w-[640px] h-[640px] mix-blend-lighten bg-top justify-center items-center text-accent text-6xl">ABOUT ME</motion.div>
          </div>
          {/* text */}
          <motion.div 
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          >
            <div className="flex-1">

              <p className="mb-6 font-lg text-justify">
                Passionate Student currently pursuing Computer Science Engineering at
                Chaitanya Bharathi Institute of Technology, proficient in web
                development and machine learning. Self-directed and a fast learner,
                with problem-solving abilities and ability to quickly adapt to new
                technologies. My career objective is to leverage my technical
                 skills and innovative mindset to contribute to challenging real-world projects. I am committed to
                  continuous learning and growth and am enthusiastic about roles where I can collaborate with a 
                  team to tackle interesting and real-life problems using my skills.
              </p>
            </div>
            {/* stats */}
            <div className="flex flex-row justify-around">
            {/* <div className="flex gap-x-6 lg:gap-x-10 justify-center align-center">

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={15} duration={3} /> 
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Languages and  <br />
                  Technologies used.
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  <CountUp start={0} end={13} duration={3} />
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div> */}
            
              <div className="flex gap-x-8 items-center">
                

                <Link
                  to="contact"
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer"
                >
                  <button className="btn btn-xl p-4">Contact me</button>
                </Link>


              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
