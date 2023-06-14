import Header from "../components/header/Header";

const Home = () => {
   return ( 
      <>
      <Header/>
      <main className="section section-skills">
            <div className="container">
                  <div className="skills__inner">
                  <h2 className="title-section">Skills</h2>
                  <h3 className="skills__title">Frontend</h3>
                  <p className="skills__text"> HTML, CSS, Sass, Gulp, Webpack, JavaScript, React, Figma</p>
                  <h3 className="skills__title">Backend</h3>
                  <p className="skills__text">NodeJS, MongoDB</p>
                  </div>
            </div>
       </main>
      </>
    );
}
 
export default Home;