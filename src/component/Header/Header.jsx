import { NavLink } from "react-router-dom";
import "./Header.scss";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="container">
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
            <NavLink
              onClick={() => {
                alert("Under Construction! Thanks")
              }}
            >
              <p> Home </p>
            </NavLink>
          </li>

          <li className="header__item">
            <a onClick={()=>{
                alert("Under Construction! Thanks")

            }}>
              <p>Projects</p>
            </a></li>
            <li className="header__item">
            <a onClick={()=>{
                alert("Under Construction! Thanks")

            }}>
              <p>Resume</p>
            </a></li>
            <li className="header__item">
            <a onClick={()=>{
                alert("Under Construction! Thanks")

            }}>
              <p>About Me</p>
            </a></li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Header;
