import { useState } from "react";
import "./blogItem.css"

function BlogItem({imgSrc="",name="",description="",longDescription="" ,bottomImage=false})
{
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
                            {bottomImage?<></>:<img className="prj_fll_image" src={imgSrc} />}
                            <h2 className="prj_fll_name">{name}</h2>
                            <p className="prj_fll_description">{longDescription}</p>
                            {bottomImage?<img className="prj_fll_image" src={imgSrc} />:<></>}
                        </div>
                    </div>
                </div> :
                <></>
            }
            <div className="blogInstance" onClick={ToggleXpand}>
                <img className="project_image" src={imgSrc}></img>
                <h2 className="project_name">{name}</h2>
                <p className="project_short_description">{description}
                    <br/> 
                    <br/> 
                    <button id="button">Read More</button>
                </p>
               
            </div>
        </>
    );
}
export default BlogItem;