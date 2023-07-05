import classes from "./Navbar.module.css";
import NavLinks from "./NavLinks";
import {MdMenu} from "react-icons/md";
import {MdClose} from "react-icons/md";
import { useState } from "react";


const MobileNav = () => {

   const [open, setOpen] = useState(false)

   const hamburgerIcon =  <MdMenu className={classes.hamburger} size="40px" color="#E27D60"  
                           onClick={() => setOpen(!open)}/>

   const closeIcon =  <MdClose className={classes.hamburger} size="40px" color="#E27D60"  
                           onClick={() => setOpen(!open)}/>
   
   const closeMobileMenu = () => setOpen(false);

   return ( 
      <nav className={classes.mobileNav}>
         {open ? closeIcon : hamburgerIcon}
         {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
      </nav>
    );
}
 
export default MobileNav;