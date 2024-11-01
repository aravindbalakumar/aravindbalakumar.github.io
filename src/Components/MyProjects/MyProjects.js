import "./myProjects.css"
import { useState } from "react";
import projectImage from "./../../Assets/Images/profilePicSmall_old.jpg";
var  longDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it \? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.";
function MyProjects() {

    return (
        <>
            <center><h2 >My Projects</h2>
            </center>
            <ul className="projectContainer">
                <li><Projects imgSrc={projectImage} name="Trial project" description="Trial description" longDescription={longDescription}/></li>
                <li><Projects imgSrc={projectImage} name="1" description="summa" longDescription={longDescription}/></li>
                <li><Projects imgSrc={projectImage} name="1" description="summa" longDescription={longDescription}/></li>
                <li><Projects imgSrc={projectImage} name="1" description="summa" longDescription={longDescription}/></li>
                <li><Projects imgSrc={projectImage} name="1" description="summa" longDescription={longDescription}/></li>
                <li><Projects imgSrc={projectImage} name="1" description="summa" longDescription={longDescription}/></li>
                <li><Projects imgSrc={projectImage} name="1" description="summa" longDescription={longDescription}/></li>
            </ul>
        </>
    );
}
export default MyProjects;

function Projects({ imgSrc = "", name = "", description = "", longDescription = "" }) {

    const [expand, SetExpanded] = useState(false);
    var ToggleXpand = () => {
        SetExpanded(!expand);
        if (expand) {
            document.body.style.overflow = "unset";
        }
        else {
            document.body.style.overflow = "hidden";
        }
    }

    return (
        <>
            {expand ?
                <div className="prj_fll" onClick={ToggleXpand}>
                    < div className="prj_fll_modal">
                        <div className="prj_fll_container">
                            <img className="prj_fll_image" src={imgSrc} />
                            <span className="prj_fll_name">{name}</span>
                            <p className="prj_fll_description">{longDescription}</p>
                        </div>
                    </div>
                </div> :
                <></>
            }
            <div className="projectInstance" onClick={ToggleXpand}>
                <img className="project_image" src={imgSrc}></img>
                <span className="project_name">{name}</span>
                <p className="project_short_description">{description}</p>
            </div>
        </>
    );
}