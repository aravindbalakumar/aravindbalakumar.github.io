import { useState } from "react";
import "./blogItem.css"

function BlogItem({ imgSrc = "", name = "", description = "", longDescription = "", bottomImage = false }) {
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
                <div className="blg_fll" onClick={ToggleXpand}>
                    < div className="blg_fll_modal">
                        <div className="blg_fll_container">
                            {bottomImage ? <></> : <img className="blg_fll_image" src={imgSrc} />}
                            <h2 className="blg_fll_name">{name}</h2>
                            <p className="blg_fll_description">{longDescription}</p>
                            {bottomImage ? <img className="blg_fll_image" src={imgSrc} /> : <></>}
                        </div>
                    </div>
                </div> :
                <></>
            }
            <div className="blog_card" onClick={ToggleXpand}>
            <h4>{name}</h4>
                <img className="blog_card_image" src={imgSrc}></img>
                <div className="blog_card_details">
               
                <section  className="blog_card_description">{description}
                </section>
                </div>
                <button className="blog_card_button" id="button">Read More</button>
                </div>
        </>
    );
}
export default BlogItem;