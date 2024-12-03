import "./myProjects.css"
import projectImage from "./../../Assets/Images/profilePicSmall_old.jpg";
import Project from "../../Components/Projects/Project";
function MyProjects() {

    
    return (
        
        <>
            <center><h2 id="Container">Projects</h2>
            </center>
            
            <ul id="myProjects">
                <li><Project title="TEST" miniDesc="TEST" skill="TEST" /></li>
                <li><Project title="TEST" miniDesc="TEST" skill="TEST" /></li>
                <li><Project title="TEST" miniDesc="TEST" skill="TEST" /></li>
                <li><Project title="TEST" miniDesc="TEST" skill="TEST" /></li>
                <li><Project title="TEST" miniDesc="TEST" skill="TEST" /></li>

            </ul>
        </>
    );
}
export default MyProjects;