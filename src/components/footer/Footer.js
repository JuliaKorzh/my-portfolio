import gitHub from "../../img/icons/gitHub.svg";
import linkedIn from "../../img/icons/linkedIn.svg";

import "./style.css";

const Footer = () => {
   return ( 
      <footer className="footer">
                <div className="footer__list">
                  <a className="footer__link" href="https://github.com/JuliaKorzh">
                      <img className="footer__icon" src={gitHub} alt="github"/>
                  </a>
                  <a className="footer__link" href="https://www.linkedin.com/in/iuliia-korzh-02049b276/">
                      <img className="footer__icon" src={linkedIn} alt="linkedIn"/>
                  </a>
                </div>
          </footer>
    );
}
 
export default Footer;