import { useRef } from "react";
import "./Hero.scss";
import { motion, useInView } from "framer-motion";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };


const Hero = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="hero">
      <div className="hero__wrapper">

      <motion.div
          className="hero__textcontainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="hero__h2" variants={textVariants}>MICHEAL ADENIYI</motion.h2>
          <motion.h1 className="hero__h1" variants={textVariants}>
            Fullstack & Android <br/>Developer
          </motion.h1>
          <motion.div variants={textVariants} >
            <motion.button className="hero__buttons" variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button className="hero__buttons" variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
        
      </div>
      <motion.div
        className="hero__sliding"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        MichealCob Personal Website
      </motion.div>
    </div>
  );
};

export default Hero;
