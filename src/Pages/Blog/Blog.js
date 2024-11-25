import "./blog.css"
import BlogItem from "./BlogItem";
import bl_im_0 from "./../../BlogAssets/Images/0.jpg"
import bl_im_0_1 from "./../../BlogAssets/Images/0_1.jpg"
import bl_im_1 from "./../../BlogAssets/Images/1.jpg"
import bl_im_1_1 from "./../../BlogAssets/Images/1_1.jpg"
import bl_im_2 from "./../../BlogAssets/Images/2.jpg"
import bl_im_2_1 from "./../../BlogAssets/Images/2_1.jpg"
import bl_im_3_1 from "./../../BlogAssets/Images/3_1.jpg";
import bl_im_3 from "./../../BlogAssets/Images/3.jpg";
import bl_im_3_3 from "./../../BlogAssets/Images/3_3.jpg";
import { SiAudacity, SiAdobepremierepro } from "react-icons/si";
function Blog() {
    return (
        <>
            <center><h2 id="Container" >Blogs</h2></center>
            <ul className="BlogContainer">


                <li><BlogItem imgSrc={bl_im_0}
                    name="Corporate Headshot" description="A corporate headshot is a professional portrait featuring a clean background, well-lit with lighting."
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

                    bottomImage/></li>


                <li><BlogItem imgSrc={bl_im_1}
                    name="Aesthetic shot" description=
                    "This shot was done in perfect timing and atmospehere that factored into the aesthetic feel of what I wanted to captured."
                    longDescription={["This shot was done in nighttime and unlinke corporate headshot this was not preplanned,but however the timing and atmospehere factored into what I wanted to captured. The symmetrical reflection of a brightly lit building framed by golden-hued autumn trees on both sides.The building's vibrant purple lights along with the trees created a contrasting picture with the warm tones of the trees and ambient streetlights.The still water in the foreground mirrors the entire scene, adding depth and doubling the visual impact with its perfect reflection,",
                        "making the scene feel like it captured the beauty of architecture and nature under night lighting ultimately making it feel almost dreamlike atmosphere",
                        <><br />
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
                        " and a seperate layer to control the overall brightness",
                        "this Gave the picture the golden husky feel which made it look like a shot from "
                    ]}

                    bottomImage /></li>


                <li><BlogItem imgSrc={bl_im_2}
                    name="Passion" description=
                    "Sight seeing in the presence of stars which fills the night sky. absorbing all the goodness inside and around it and enjoying the urban life style "
                    longDescription={["This shot was taken in a way that the city lights provide a vibrant and dynamic backdrop and was placed on a bridge, which acts as a strong horizontal line leading the eye across the scene while the reflection in the river below adds depth and symmetry. ",
                        "The light casts a soft glow on my face, creates a warm and appealing effect that highlights agains the facial features, making myself stand out amidst the urban setting",
                        <><br />
                            <br />
                            {/* <img src={bl_im_2_1} id="inlineLeft"></img> */}
                            <ol>
                                <li> <b> Focus  of F1.8</b> wide aperture lets in a lot of light, which is key in low-light settings like this. it gives that blurred background effect,while focusing on one self.</li>
                                <li> <b> Used a shutter speed of 1/50s</b>, This speed allows enough light to enter, essential for nighttime shots, and is quick enough to minimize motion blur, keeping everything sharp.</li>
                                <li> <b> ISO of 640, </b> This ISO level is high enough to make the camera more sensitive to light without introducing too much noise, ensuring the image remains clear and bright.</li>
                            </ol>
                            <br />
                        </>
                        , "These settings where optimal but In photoshop worked on just adjustimg the color and exposure in order for the light casted on my face, providing a focal point in the vibrant surroundings. This subtle illumination adds depth and warmth, emphasizing the human element in the urban landscape",

                    ]}

                 bottomImage/></li>

                <li><BlogItem imgSrc={bl_im_3}
                    name="Product Video demo" description=
                    {"\"From struggle to swift\" A product videogrpahy made for how the TFI cycles have better comfort over the traditional one"}
                    longDescription={
                        <><p><br />
                            <br />
                            Working together as a team on this project, Made me realise how team work make magical things happen, through collaborative effort.
                            <br />
                            I played the role of a continuity person which primarly focused on these parts specifically
                            <ol>
                                <li> Ensuring there is continuity between the shots</li>
                                <li> Record and register the duration between each shots</li>
                                <li> Acquirng the necessary equipments </li>
                                <li> Edited sound and voice overs audios in audacity</li>
                            </ol>

                            <br />

                            <h4>Planning phase:</h4>
                            During our Initial meet we finalized on the type of theme we wanted to follow something that shows
                            how the transition from the old generation to new generation should feel like and finalized it to transitioning from black and white to color
                            and in our next meet we finalized the product to be of cycle and also drew some draft of how the shots should be.
                            For the cycles I took on the responsibility of renting/lending them
                            <br /><br />
                            <h4>Shoot phase:</h4>
                            Eventhough we preplanned the shoot, we initially had some difficulty in placing the camera position and place of shot but after a prolonged discussion,
                            we where able to finalize the location of shots.<br/><img src={bl_im_3_3} id="inlineRight" />
                            but each shots had it own preparation time and also had the problem of incoming and outgoing traffic.
                            <br />For each shot,In order to maintain continuity, <b> I ensured that the time duration of each shots and also the continuity between 2 different shots where flawless so I started noting the time</b>
                            <img src={bl_im_3_1} id="inlineLeft" />
                            <br /><br />
                            <center><table id="table">
                                <thead>
                                    <tr>
                                        <th width="25%">Shot</th>
                                        <th width="25%">Time Start</th>
                                        <th width="25%">Time End</th>
                                        <th width="25%">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td id="tabledatacolumn" >Shot_1-1</td>
                                        <td id="tabledatacolumn">12:01</td>
                                        <td id="tabledatacolumn">12:02</td>
                                        <td id="tabledatacolumn">00:00:20</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_1-2</td>
                                        <td id="tabledatacolumn">12:04 </td>
                                        <td id="tabledatacolumn">12:05</td>
                                        <td id="tabledatacolumn">00:00:25</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_2-1</td>
                                        <td id="tabledatacolumn">12:11</td>
                                        <td id="tabledatacolumn">12:11</td>
                                        <td id="tabledatacolumn">00:00:15</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_2-2</td>
                                        <td id="tabledatacolumn">12:11</td>
                                        <td id="tabledatacolumn">12:12</td>
                                        <td id="tabledatacolumn">00:00:16</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_3-1</td>
                                        <td id="tabledatacolumn">12:30</td>
                                        <td id="tabledatacolumn">12:31</td>
                                        <td id="tabledatacolumn">00:00:40</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_3-2</td>
                                        <td id="tabledatacolumn">12:35</td>
                                        <td id="tabledatacolumn">12:36</td>
                                        <td id="tabledatacolumn">00:00:42</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_4-1</td>
                                        <td id="tabledatacolumn">12:41</td>
                                        <td id="tabledatacolumn">12:42</td>
                                        <td id="tabledatacolumn">00:00:15</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_4-2</td>
                                        <td id="tabledatacolumn">12:44</td>
                                        <td id="tabledatacolumn">12:45</td>
                                        <td id="tabledatacolumn">00:00:16</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_4-3</td>
                                        <td id="tabledatacolumn">12:48</td>
                                        <td id="tabledatacolumn">12:49</td>
                                        <td id="tabledatacolumn">00:00:26</td>
                                    </tr>
                                    <tr>
                                        <td id="tabledatacolumn">Shot_5-1</td>
                                        <td id="tabledatacolumn">12:56</td>
                                        <td id="tabledatacolumn">12:56</td>
                                        <td id="tabledatacolumn">00:00:10</td>
                                    </tr>
                                </tbody>
                            </table>
                            </center>
                            <br /><br />
                            <h4>Editing phase:</h4>
                            During this phase, we faced the problem of noice and voice over so I took the responsibility of removing the overall noise in <SiAudacity />Audacity and to add depth and base to the Voice Over I used <SiAdobepremierepro />Adobe PremierPRO. And finally after tweaking we where able to finish the video
                            <center>
                            <br /><br />
                                <h4>Video</h4>
                                <iframe id="YoutubePlayer" width="560" height="315" src="https://www.youtube.com/embed/51YGQZ-WkUk?si=ih6cUIwVS2vy83XB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </center></p>
                        </>
                    }

                /></li>

            </ul>
        </>
    );
}
export default Blog;
