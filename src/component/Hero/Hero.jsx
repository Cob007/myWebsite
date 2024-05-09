import "./Hero.scss";
import { motion } from "framer-motion";

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


const Hero = () => {
  return (
    <div className="hero">

      <div className="hero__wrapper">
        <h1>
            Micheal
        </h1>
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
