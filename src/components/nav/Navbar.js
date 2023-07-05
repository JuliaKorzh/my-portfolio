import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";


const Navbar = () => {

   return ( 
      <nav className={classes.nav}>
         <div className={classes.container}>
            <div className={classes["nav__inner"]}>
               <NavLink to="/" className={classes.logo}> <span>MY</span> portfolio </NavLink>
               <DesktopNav/>
               <MobileNav/>
            </div>
         </div>
      </nav>
    );
}
 
export default Navbar;