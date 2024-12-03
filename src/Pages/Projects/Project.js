import "./project.css"
import imgTemp from "./../../BlogAssets/Images/0.jpg";
import { TbBrandUnity } from "react-icons/tb";

function Project({title="", miniDesc="", skill=""})
{
    return (
    <>
        <div id="prjt_card">
            <div id="prjt_card_title">{title}</div>
            <div id="prjt_card_image_container"><img id="prjt_card_image" src={imgTemp}></img></div>
            <div id="prjt_card_miniDescription">{miniDesc}</div>
            {/* <div id="prjt_card_skills">{skill}</div> */}
            <div id="prjt_card_skills"><TbBrandUnity /></div>
            <div id="prjt_card_viewMore">
                <button id="button">VIEW MORE</button>
            </div>
        </div>
    </>
    );
}
export default Project;