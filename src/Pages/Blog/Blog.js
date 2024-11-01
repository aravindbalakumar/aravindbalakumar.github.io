import "./blog.css"
import BlogItem from "./BlogItem";
import bl_im_0 from "./../../BlogAssets/Images/0.jpg"
import bl_im_0_1 from "./../../BlogAssets/Images/0_1.jpg"
import bl_im_1 from "./../../BlogAssets/Images/1.jpg"
import bl_im_1_1 from "./../../BlogAssets/Images/1_1.jpg"
import bl_im_2 from "./../../BlogAssets/Images/2.jpg"
import bl_im_2_1 from "./../../BlogAssets/Images/2_1.jpg"
function Blog() {
    return (
        <>
            <center><h2 >My Projects</h2>
            </center>
            <ul className="BlogContainer">


                <li><BlogItem imgSrc={bl_im_0}
                    name="Corporate Headshot" description="A corporate headshot is a professional portrait featuring a clean background, well-lit with lighting.In my corporate headshot, I wear a classic black and white striped T-shirt, adding a touch of modern style while maintaining a polished, professional look. The background is clean and neutral, helping to keep the focus on me, while soft, natural lighting complements my features without casting harsh shadows. My pose is natural, with relaxed shoulders and a slight angle to convey warmth and approachability. Framed from the chest up, the shot highlights a balanced combination of confidence and approachability, creating an image that reflects both my professional and personable side."
                    longDescription={["For the Corporate shot, I pre-plannned certain aspects such as Dress and the location, One of the vital thing was the location used the CSIS buildings green screen to take the professional picture,so that any amount of edit can be done to background",
                        "Secondly,The dress I chose the Black and white stripped for the contrasting colors which presented me in a professional manner. As for the camera I lended  ZV-E10 from the library to take the photograph.",
                        "As far as the shoot goes, I Set the camera settings as below",
                        <><br />
                            <br />
                            <img src={bl_im_0_1} id="inlineLeft"></img>
                            <ol>
                                <li> <b> Focus  of F 5.6</b>  was chosen to ensure the depth of detials and my fact to be captured in detials while softly blurring the background  </li>
                                <li> <b> Used a shutter speed of 1/50s</b>, as for the picture there where not many moving details and  since it was static this was a natural choice</li>
                                <li> <b> ISO of 1600, </b> was set to boost the amount of natural lighting captured and bringing clarity to my face.</li>
                            </ol>
                            <br />
                            <br />
                        </>
                        , "In my corporate headshot, these settings allowed me to capture a well-lit image even in moderate lighting conditions, keeping my face clear and focused against a softly blurred background.",
                        "The black and white striped T-shirt adds a modern touch, while my relaxed pose and direct gaze project professionalism and approachability. Altogether, this headshot presents a warm, confident, and polished image ideal for corporate settings."
                        , "In photoshop had add some touch up and also replace the green screen, which was achieved by using the color range tool to select the green space, however ther was a spec of difficulty due to the non uniform lightning in background, so manually had to tinker the color range settings to select the regions which where not selected and created a mask"
                        , "From there, I successfully seperated myself and started removing the color component from the background making it monochrome "

                    ]}

                bottomImage /></li>


                <li><BlogItem imgSrc={bl_im_1}
                    name="Aesthetic shot" description=
                    "This shot was done in nighttime and unlinke corporate headshot this was not preplanned,but however the timing and atmospehere factored into what I wanted to captured. The symmetrical reflection of a brightly lit building framed by golden-hued autumn trees on both sides.The building's vibrant purple lights along with the trees created a contrasting picture with the warm tones of the trees and ambient streetlights.The still water in the foreground mirrors the entire scene, adding depth and doubling the visual impact with its perfect reflection, making the scene feel like it captured the beauty of architecture and nature under night lighting ultimately making it feel almost dreamlike atmosphere"
                    longDescription={["This shot was done in nighttime and unlinke corporate headshot this was not preplanned,but however the timing and atmospehere factored into what I wanted to captured. The symmetrical reflection of a brightly lit building framed by golden-hued autumn trees on both sides.The building's vibrant purple lights along with the trees created a contrasting picture with the warm tones of the trees and ambient streetlights.The still water in the foreground mirrors the entire scene, adding depth and doubling the visual impact with its perfect reflection,",
                        "making the scene feel like it captured the beauty of architecture and nature under night lighting ultimately making it feel almost dreamlike atmosphere",
                        <><br/>
                            <br />
                            <img src={bl_im_1_1} id="inlineLeft"></img>
                            <ol>
                                <li> <b> Focus  of F4</b> as i need the building to be sharper and the background to be slightly blurred I decided to take F4 while also preserving the depth </li>
                                <li> <b> Used a shutter speed of 1/50s</b>, This speed allows enough light to enter, essential for nighttime shots, and is quick enough to minimize motion blur, keeping everything sharp.</li>
                                <li> <b> ISO of 1600, </b> was the best choice for nightitme and due to Low-light coniditions this boosted the amount of natural lighting captured.</li>
                            </ol>
                            <br />
                        </>
                        , "The settings was a perfect choice due to night time and the buildings vibrant purple lights, creating a dramatic contrast against the dark night sky.",
                        "the trees with the golden leaves along with water reflection which deepens the composition but also gives the sense of calm and tranquility"
                        , "In photoshop had add some touch up by adding layers",
                            "one layer to balance midtones of color and overall color control",
                            "Exposure Layer to adjust exposure",
                            " and a seperate layer to control the overall brightness"                        ,
"this Gave the picture the golden husky feel which made it look like a shot from "
                    ]}

                 bottomImage/></li>

                
<li><BlogItem imgSrc={bl_im_2}
                    name="Passion" description=
                    "Sight seeing in the presence of stars which fills the night sky. absorbing all the goodness inside and around it and enjoying the urban life style "
                    longDescription={["This shot was taken in a way that the city lights provide a vibrant and dynamic backdrop and was placed on a bridge, which acts as a strong horizontal line leading the eye across the scene while the reflection in the river below adds depth and symmetry. ",
                        "The light casts a soft glow on my face, creates a warm and appealing effect that highlights agains the facial features, making myself stand out amidst the urban setting",
                        <><br/>
                            <br />
                            {/* <img src={bl_im_2_1} id="inlineLeft"></img> */}
                            <ol>
                                <li> <b> Focus  of F1.8</b> wide aperture lets in a lot of light, which is key in low-light settings like this. it gives that blurred background effect,while focusing on one self.</li>
                                <li> <b> Used a shutter speed of 1/50s</b>, This speed allows enough light to enter, essential for nighttime shots, and is quick enough to minimize motion blur, keeping everything sharp.</li>
                                <li> <b> ISO of 640, </b> This ISO level is high enough to make the camera more sensitive to light without introducing too much noise, ensuring the image remains clear and bright.</li>
                            </ol>
                            <br />
                        </>
                        ,"These settings where optimal but In photoshop worked on just adjustimg the color and exposure in order for the light casted on my face, providing a focal point in the vibrant surroundings. This subtle illumination adds depth and warmth, emphasizing the human element in the urban landscape",
                        
                    ]}

                 /></li>
                
            </ul>
        </>
    );
}
export default Blog;