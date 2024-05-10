import { motion } from "framer-motion";
import { aboutSliderVariants } from "../../constant/Constant";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <p>here it is the about me sections=</p>

      <motion.div
        className="about__sliding"
        variants={aboutSliderVariants}
        initial="initial"
        animate="animate"
      >
        About
      </motion.div>
    </div>
  );
};

export default About;
