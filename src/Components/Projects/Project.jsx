import "./project.css"
import { useState } from "react";
import {techmap} from "../utils";
function Project({ projectDatum }) {
   
    const [open, OnToggleOpen] = useState(false);
    function ToggleProject() {
        OnToggleOpen(!open);
        if (open) {
            document.body.style.overflow = "unset";
        }
        else {
            document.body.style.overflow = "hidden";
        }
    }
    return (
        <>
            {open ?
                <div id="prjt_popup">
                    < div id="prjt_popup_container">
                        <div id="prjt_popup_title"><h2>{projectDatum.Name}</h2></div>
                        <button id="prjt_popup_close" onClick={ToggleProject}>X</button>
                        <div id="prjt_popup_contentcontainer">
                            <div id="prjt_popup_content">
                            
                            {projectDatum.Images.length != 0 ? <>
                                    <div id="prjt_popup_imageContainer">

                                        {projectDatum.Images.map((image, index) => (
                                            <img id="prjt_popup_image"
                                                key={index}
                                                src={require(`./../../Assets/Images/ProjectImages/${image}`)}
                                            />
                                        ))}
                                    </div>
                                </>
                                    : <></>}
                                      <section id="prjt_popup_techstack"><h4> Tech and tool used:</h4>
                                    <ul>

                                        {projectDatum.Techstack.map((skill, index) => (
                                            <li key={index}>{techmap.get(skill)}</li>
                                        ))}
                                    </ul></section>

                                <div id="prjt_popup_details">
                                    <div id="prjt_popup_longdescription">
                                        <h4>Description</h4>
                                        <div dangerouslySetInnerHTML={{ __html: projectDatum.Longdescription }}></div>
                                    </div>
                                    <div id="prjt_popup_role">
                                        <h4>Role</h4>
                                        <div>{projectDatum.Role}</div>
                                    </div>
                                </div>
                              
                               
                            </div>
                        </div>
                    </div>
                </div> : <></>}
            <div id="prjt_card">
                <div id="prjt_card_title"><h2>{projectDatum.Name}</h2></div>
                <div id="prjt_card_image_container"><img id="prjt_card_image" src={require(`./../../Assets/Images/ProjectImages/${projectDatum.Logo}`)}></img></div>
                <div id="prjt_card_miniDescription">{projectDatum.Description}</div>
                <ul id="prjt_card_skills">
                    {projectDatum.Techstack.map((skill, index) => (
                        <li key={index}>{techmap.get(skill)}</li>
                    ))}

                    {/* <TbBrandUnity id="prjt_card_skill_Tag" /> */}
                    {/* <TbBrandGithub id="prjt_card_skill_Tag" /> */}
                </ul>
                <div id="prjt_card_viewMore">
                    <button id="button" onClick={ToggleProject}>VIEW MORE</button>
                </div>
            </div>
        </>
    );
}
export default Project;