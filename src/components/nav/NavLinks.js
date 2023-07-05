import { motion } from "framer-motion";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
   
   const activeLink = classes["link-active"];
   const notActiveLink = classes["link"];

   const animateFrom = {opacity: 0, y: -40}
   const animateTo ={opacity: 1, y: 0}

   return ( 
      <ul className={classes["nav-list"]}>
      <motion.li 
      initial= {animateFrom}
      animate={animateTo}
      transition={{delay: 0.05}}
      className={classes["nav-list__item"]}
      onClick={()=>props.isMobile && props.closeMobileMenu()}>
         <NavLink className={({isActive})=> isActive ?  activeLink : notActiveLink}
         to="/">Home</NavLink>
         </motion.li>
      <motion.li 
         initial= {animateFrom}
         animate={animateTo}
         transition={{delay: 0.2}}
         className={classes["nav-list__item"]}
         onClick={()=>props.isMobile && props.closeMobileMenu()}>
            <NavLink className={({isActive})=> isActive ?  activeLink : notActiveLink}
            to="/projects">Projects</NavLink>
         </motion.li>
      <motion.li 
         initial= {animateFrom}
         animate={animateTo}
         transition={{delay: 0.3}}
         className={classes["nav-list__item"]}
         onClick={()=>props.isMobile && props.closeMobileMenu()}>
            <NavLink className={({isActive})=> isActive ?  activeLink : notActiveLink}
            to="/contact">Contacts</NavLink>
         </motion.li>
   </ul> );
}
 
export default NavLinks;