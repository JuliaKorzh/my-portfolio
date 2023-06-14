import abstract from "../../img/header_abstract.png";
import "./style.css";

const Header = () => {
   return (  
      <header className="header">
      <div className="header__inner">
        <h1 className="header__title"><strong>Hi, my name is <span>Julia</span></strong> <br/>
            a frontend developer</h1>
        <a className="btn" href="#!">Download CV</a>
      </div>
      <img className="header__img" src={abstract} alt="abstract"/>
</header>
   );
}
 
export default Header;