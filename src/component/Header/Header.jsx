import { NavLink } from "react-router-dom";
import "./Header.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="header"
      drag
      dragConstraints={{
        top: 50,
        left: 50,
        right: -50,
        bottom: -50,
      }}
    >
      <ul className="header__list">
        <li className="header__item">
          <NavLink>
            <p> Home </p>
            </NavLink>
        </li>
        <li className="header__item">Project</li>
        <li className="header__item">Resume</li>
        <li className="header__item">About Me</li>
      </ul>
    </motion.div>
  );
};

export default Header;
