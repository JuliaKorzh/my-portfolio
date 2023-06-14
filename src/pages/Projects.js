
import { projects } from "../helpers/ProjectsList";
import Project from "../components/project/Project";


const Projects = () => {
   return ( 
      <main className="section section-projects">
      <li className="container">
         <h2 className="title-section" id="projects">Projects</h2>
         <ul className="projects">
            {projects.map((project, index)=>{
               return <Project key={index} 
                     title={project.title} 
                     img={project.img}
                     index={index}/>
            })}
         </ul>
      </li>
   </main>
    );
}
 
export default Projects;