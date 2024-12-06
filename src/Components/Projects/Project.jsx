import "./project.css"
import { useState } from "react";
import {techmap} from "../utils";
function Project({ projectDatum }) {
   var maxImage=0;
   const [index, setIndex] = useState(0);
    const [open, OnToggleOpen] = useState(false);
   
    function ToggleProject() {
        OnToggleOpen(!open);
        {/*toggles the popup */}
        if (open) {
            {/*set so that internal scroll will take percedance */}
            document.body.style.overflow = "unset";
            
        }
        else {
            document.body.style.overflow = "hidden";
        }
    }
    maxImage=projectDatum.Images.length;{/* takes max images  */}
    function OnNext()
    {
        var tempIndex = index+1;
        if(tempIndex > maxImage-1) 
        {
            {/* if the  index is greater than  last index of the array then 0 is set for infinite scroll effect*/}
            setIndex(0);
        }
        else{
            console.log(tempIndex+"/"+maxImage);
            setIndex(tempIndex);
        }
    }
    function OnPrevious()
    {
        var tempIndex = index-1;
        if(tempIndex<0)
        {
            {/** */}
            {/* if the  index is less than 0 then last index of the array  is set for infinite scroll effect*/}
            console.log(tempIndex);
            setIndex(maxImage-1);
        }
        else{
            setIndex(tempIndex);
        }
    }
    
    return (
        <>
            {open ? /*Checks wether th project popup is open if true shows the full screen popup else shows the card */
                <div id="prjt_popup"> {/*shows the popup */}
                    < div id="prjt_popup_container">
                        <div id="prjt_popup_title"><h2>{projectDatum.Name}</h2></div>
                        <button id="prjt_popup_close" onClick={ToggleProject}>X</button>
                        <div id="prjt_popup_contentcontainer">
                            <div id="prjt_popup_content">
                            
                            {maxImage != 0 ?  /*Checks wether th project image has atleast one image */
                            <div id="prjt_popup_galleryView">
                            <button onClick={OnPrevious}>&lt;</button>
                                    <div id="prjt_popup_imageContainer">
                                            <img id="prjt_popup_image" src={require(`./../../Assets/Images/ProjectImages/${projectDatum.Images[index]}`)}/>
                                    </div>
                                    <button onClick={OnNext}>&gt;</button>
                                </div>
                                    : <></>}
                                      <section id="prjt_popup_techstack"><h4> Tech and tool used:</h4>
                                    <ul>

                                        {projectDatum.Techstack.map((skill, index) => (
                                            <li key={index}>{techmap.get(skill)}</li>
                                        ))}
                                    </ul></section>
                                                {/*Checks wether th project popup is open */}
                                <div id="prjt_popup_details">
                                    <div id="prjt_popup_longdescription">
                                        <h4>Description</h4>
                                        <div dangerouslySetInnerHTML={{ __html: projectDatum.Longdescription }}></div>
                                    </div>
                                    <div id="prjt_popup_role">
                                        <h4>Role</h4>
                                        <div dangerouslySetInnerHTML={{ __html: projectDatum.Role }}></div>
                                    </div>
                                </div>
                              
                               
                            </div>
                        </div>
                    </div>
                </div> : 
                
            <div id="prjt_card"> {/*shows the card */}
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
            </div>}
        </>
    );
}
export default Project;