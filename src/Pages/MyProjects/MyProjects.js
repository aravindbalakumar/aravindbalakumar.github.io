import "./myProjects.css"
import projectImage from "./../../Assets/Images/profilePicSmall_old.jpg";
import Project from "../../Components/Projects/Project";
import data from "./../../Assets/Other/Projects.json";

function MyProjects() {
    return (
        
        <>
            <center><h2 id="Container">Projects</h2>
            </center>
            
            <ul id="myProjects">
            {data.Projects.map((projectDatum, index) =>
                <li><Project key={index} projectDatum={projectDatum} /></li>)}

            </ul>
        </>
    );
}
export default MyProjects;