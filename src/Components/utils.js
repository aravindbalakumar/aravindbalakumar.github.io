import { TbBrandUnity, TbBrandGithub, TbBrandFirebase, TbBrandCSharp, TbAugmentedReality2, TbBrandAmazon ,TbBrandJavascript,TbHtml,TbBrandCss3} from "react-icons/tb";
import{SiAmazons3,SiWebgl} from "react-icons/si"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
const techmap = new Map();
techmap.set("unity", <TbBrandUnity id="prjt_card_skill_Tag" />);
techmap.set("firebase", <TbBrandFirebase id="prjt_card_skill_Tag" />);
techmap.set("js", <TbBrandJavascript id="prjt_card_skill_Tag" />);
techmap.set("html", <TbHtml id="prjt_card_skill_Tag" />);
techmap.set("css", <TbBrandCss3 id="prjt_card_skill_Tag" />);
techmap.set("webgl", <SiWebgl id="prjt_card_skill_Tag" />);
techmap.set("github", <TbBrandGithub id="prjt_card_skill_Tag" />);
techmap.set("amazons3", <SiAmazons3 id="prjt_card_skill_Tag" />);
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
const firebaseConfig = {
  apiKey: "AIzaSyBCFvuZsMuYxk4TlIWCvVC6Q7DkqAHzgpU",
  authDomain: "portfolio-3543a.firebaseapp.com",
  databaseURL: "https://portfolio-3543a-default-rtdb.firebaseio.com",
  projectId: "portfolio-3543a",
  storageBucket: "portfolio-3543a.firebasestorage.app",
  messagingSenderId: "478225003220",
  appId: "1:478225003220:web:f6e1a07c83b7f1a261c141",
  measurementId: "G-HRVMS6HB4F"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);
const database= getDatabase(firebaseapp);
export { techmap, GetSocialMedia,firebaseapp ,database,analytics};