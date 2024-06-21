import { useRef } from "react";
import "./Card.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Card = (props) => {
  const { items } = props;

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={items?.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{items?.title}</h2>
            <p>{items?.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Card;
