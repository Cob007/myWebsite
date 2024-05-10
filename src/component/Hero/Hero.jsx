import { useRef } from "react";
import "./Hero.scss";
import { motion, useInView } from "framer-motion";
import { sliderVariants, textVariants } from "../../constant/Constant";

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
          <motion.h2 className="hero__h2" variants={textVariants}>
            MICHEAL ADENIYI
          </motion.h2>
          <h1 className="hero__h1" variants={textVariants}>
            <motion.b whileHover={{ color: "rebeccapurple" }}>
              {" "}
              Fullstack & Android{" "}
            </motion.b>{" "}
            <br />
            Developer
          </h1>
          <motion.div variants={textVariants}>
            <motion.button className="hero__buttons" variants={textVariants}>
              See the Latest Works
            </motion.button>
            <motion.button className="hero__buttons" variants={textVariants}>
              Contact Me
            </motion.button>
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
