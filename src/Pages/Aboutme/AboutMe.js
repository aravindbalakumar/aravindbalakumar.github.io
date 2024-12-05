import "./aboutMe.css"
import profilepic from "./../../Assets/Images/profilePic.jpg"
import { IconContext } from "react-icons";
import MyJourney from "./../../Components/MyJourney/MyJourney"
import { TbBrandUnity, TbBrandCSharp,TbBrandJavascript,TbBrandHtml5,TbBrandReact,TbBrandCss3,TbBrandGithub,TbBrandNodejs } from "react-icons/tb";
import {GetSocialMedia} from "./../../Components/utils";

function AboutMe() {

    return (
        <>
        <center><h2 id="Container" >About me</h2></center>
            <div className="fullWidth">
            
                <p className="aboutMeDetail"><h2>I'm Aravind Balakumar S,</h2> A developer and interaction designer passionate about crafting immersive and intuitive experiences in AR/VR and game development. With a strong technical foundation and a creative approach to problem-solving, I focus on blending the boundaries of technology and user experience. Inspired by projects that integrate biometrics and interactive tech, I’m constantly exploring how new technologies can shape meaningful interactions.
                    Currently pursuing my masters in Interaction Experience design University of limerick in Ireland, I bring a global perspective and diverse industry experience, dedicated to making digital experiences as engaging and impactful as possible.</p>
                <div className="pictureHolder">
                    <img src={profilepic} className="profilePicFace"></img>

                    <GetSocialMedia/>

                </div>
            </div>
            <center>
                <h2 id="Container" >WHAT I KNOW</h2>
                <IconContext.Provider value={{ color: "#d9d9d9", size: "3.5rem" }}>
                        <section id="skillHolder"><TbBrandUnity /> <TbBrandCSharp /><TbBrandJavascript/>
                        <TbBrandHtml5/>
                        <TbBrandReact/>
                        <TbBrandNodejs/>
                        <TbBrandCss3/>
                        <TbBrandGithub/> </section>
                    </IconContext.Provider>;
           
            </center>
            <center>
            <h2 id="Container"> My Journey</h2></center>
            <MyJourney/>
        </>
    );
}
export default AboutMe;