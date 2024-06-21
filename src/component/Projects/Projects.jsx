import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Projects.scss";
import Card from "../Card/Card";
import { sliderVariants } from "../../constant/Constant";

const data = [
  {
    id: 1,
    title: "React Commerce",
  },
  {
    id: 2,
    title: "React Commerce",
  },
  {
    id: 3,
    title: "React Commerce",
  },
];

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolio__wrapper">
        <h1 className="">Project & Featured Works</h1>
        <motion.div style={{ scaleX }} className="portfolio__progressbar"></motion.div>

      </div>
        {data.map((project, i) => (
            <Card  item={project} key={i}/>
        ))}
        <motion.div
        className="hero__sliding"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Currently Under Construction
      </motion.div>
    </div>
  );
};

export default Projects;
