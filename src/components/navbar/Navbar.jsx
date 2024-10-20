import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const animations = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span {...animations}>Jashandeep Singh</motion.span>
        <div className="social">
          <a href="#">
            <motion.img src="/facebook.png" alt="" {...animations} />
          </a>
          <a href="#">
            <motion.img src="/instagram.png" alt="" {...animations} />
          </a>
          <a href="#">
            <motion.img src="/youtube.png" alt="" {...animations} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
