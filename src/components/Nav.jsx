import React from "react";

// import icons
import { RiHome4Fill } from "react-icons/ri";
import { BsFillPersonFill ,BsDatabaseFillGear, BsChatSquare } from "react-icons/bs";
import { FaGraduationCap, FaCode, FaAward, FaMessage } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";

// import links
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-3 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-[50vw] bg-black/20 h-[72px] backdrop-blur-2xl rounded-full mx-auto flex justify-between items-center px-5">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <RiHome4Fill />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsFillPersonFill />
          </Link>
          <Link
            to="education"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaGraduationCap />
          </Link>
          <Link
            to="experience"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaBriefcase />
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaCode />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <BsDatabaseFillGear />
          </Link>
          <Link
            to="achievements"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaAward />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
          >
            <FaMessage />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
