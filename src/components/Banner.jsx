/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// images
import Image from "../assets/avatar.jpg";
// import icons
// import { FaGithub, FaDribbble } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto mt-[-3vh]">
        <div className="flex flex-col-reverse gap-y-8 sm: items-center lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] text-gradient leading-[0.8] lg:text-[72px] brightness-125 font-secondary uppercase"
            >
              Ashmit <span> Parandkar</span>
            </motion.h1>
            <motion.div
             variants={fadeIn("up", 0.4)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
             className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Web Developer",
                  2000,
                  "Machine Learning Enthusiast",
                  2000,
                  "IoT Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p 
             variants={fadeIn("up", 0.5)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="mb-8 max-w-lg mx-auto lg:mx-0">
              I am a Full Stack Web Developer and Machine Learning Enthusiast.
            </motion.p>
            <motion.div 
             variants={fadeIn("up", 0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </motion.div>
            {/* social links */}
            <motion.div 
             variants={fadeIn("up", 0.7)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
            className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a href="#">
                {/* <FaGithub /> */}
              </a>
              <a href="#">
                {/* <FaDribbble /> */}
              </a>
            </motion.div>
          </div>
          {/* images */}
          <motion.div 
           variants={fadeIn("down", 0.5)}
           initial="hidden"
           whileInView={"show"}
           style={{boxShadow:'rgb(68, 163, 227) 6px 6px 24px 2px'}}
          className="border-2 rounded-full max-w-[200px] max-h-[200px] w-[200px] h-[200px] flex items-center justify-center overflow-hidden lg:max-w-[300px] lg:max-h-[300px] lg:w-[300px] lg:h-[300px]">
            <img src={Image} className="w-[100%] pt-[46px] lg:pt-[70px]" alt="MY PHOTO"/>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
};

export default Banner;
