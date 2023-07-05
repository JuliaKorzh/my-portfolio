import abstract from "../../img/header_abstract.png";
import "./style.css";
const PDF_FILE_URL = 'http://localhost:3000/Iuliia_Korzh_CV.pdf'

const Header = () => {
   const downloadFileAtURL=(url)=>{
      fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
         const blobURL = window.URL.createObjectURL(new Blob([blob]))
         const aTag = document.createElement('a');
         aTag.href=blobURL;
         aTag.setAttribute('download', 'Iuliia_Korzh_CV.pdf');
         document.body.appendChild(aTag);
         aTag.click();
         aTag.remove()
      })


   }

   return (  
      <header className="header">
      <div className="header__inner">
        <h1 className="header__title"><strong>Hi, my name is <span>Julia</span></strong> <br/>
            a frontend developer</h1>
        <button onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}} className="btn" href="#!">Download CV</button>
      </div>
      <img className="header__img" src={abstract} alt="abstract"/>
</header>
   );
}
 
export default Header;