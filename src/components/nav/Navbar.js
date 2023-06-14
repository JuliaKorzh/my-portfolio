import "./style.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {

const activeLink = 'nav-list__link nav-list__link--active';
const notActiveLink = 'nav-list__link';

   return ( 
      <nav className="nav">
         <div className="container">
            <div className="nav__inner">
               <NavLink to="/" className="logo"> <span>MY</span> portfolio </NavLink>
   
               <ul className="nav-list">
                  <li className="nav-list__item">
                     <NavLink className={({isActive})=> isActive ?  activeLink : notActiveLink}
                      to="/">Home</NavLink>
                     </li>
                  <li className="nav-list__item">
                     <NavLink className={({isActive})=> isActive ?  activeLink : notActiveLink}
                      to="/projects">Projects</NavLink>
                     </li>
                  <li className="nav-list__item">
                     <NavLink className={({isActive})=> isActive ?  activeLink : notActiveLink}
                      to="/contact">Contacts</NavLink>
                     </li>
               </ul>
            </div>
         </div>
      </nav>
    );
}
 
export default Navbar;