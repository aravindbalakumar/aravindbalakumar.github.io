import { TbBrandUnity, TbBrandGithub, TbBrandFirebase, TbBrandCSharp, TbAugmentedReality2 } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
const techmap = new Map();
techmap.set("unity", <TbBrandUnity id="prjt_card_skill_Tag" />);
techmap.set("firebase", <TbBrandFirebase id="prjt_card_skill_Tag" />);
techmap.set("github", <TbBrandGithub id="prjt_card_skill_Tag" />);
techmap.set("c#", <TbBrandCSharp id="prjt_card_skill_Tag" />);
techmap.set("ar", <TbAugmentedReality2 id="prjt_card_skill_Tag" />);
function GetSocialMedia() {
    return (
        <section id="socialMediaHolder">
            <a href="https://github.com/aravindbalakumar"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aravind-balakumar-s-97142439/"><FaLinkedin /></a>
            <a href="https://www.facebook.com/aravind.balakumar"><FaFacebook /></a>
        </section>
    );
}
export { techmap, GetSocialMedia };