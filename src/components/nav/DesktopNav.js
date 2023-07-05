import classes from "./Navbar.module.css";
import NavLinks from "./NavLinks";

const DesktopNav = () => {
   return ( 
      <nav className={classes.desktopNav}>
         <NavLinks/>
      </nav>
    );
}
 
export default DesktopNav;