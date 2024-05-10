import { motion } from "framer-motion";
import { aboutSliderVariants, textVariants } from "../../constant/Constant";
import "./About.scss";
const About = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <motion.div
          className="about__textcontainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="about__h2" variants={textVariants}>
            About
          </motion.h2>
          <motion.p whileHover={{color:'rebeccapurple'}} className="about__p">
            With over 4 years of experience as a software engineer, I have honed
            my skills in solving problems in the mobile app space. My expertise
            lies in developing innovative solutions that enhance user
            experiences and drive business growth. Recently, I graduated from
            Brainstation, where I acquired comprehensive knowledge and skills in
            full-stack engineering. <br/><br/>As a full-stack engineer, I am fully
            equipped to tackle any challenge head-on. My proficiency spans
            front-end development, back-end integration, database management,
            and seamless deployment. I thrive in collaborative environments,
            working closely with cross-functional teams to deliver high-quality,
            scalable, and user-friendly applications. With a passion for
            continuous learning and staying ahead of the curve, <br/><br/>I actively
            explore emerging technologies and industry trends. I am driven by a
            desire to push boundaries and create cutting-edge solutions that
            redefine the technological landscape. Whether it's developing a
            robust mobile app, building a secure and efficient web application,
            or integrating complex systems, I am ready to leverage my expertise
            and problem-solving abilities to achieve outstanding results. I am
            excited to contribute my skills and knowledge to innovative projects
            that make a meaningful impact.
          </motion.p>
        </motion.div>
      </div>
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
