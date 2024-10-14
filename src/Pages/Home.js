import './Home.css';
import Navbar from '../Components/Navbar/Navbar.js';
import ProfilePic from './../Assets/Images/profilePicSmall.jpg'
import SkillContainer from '../Components/SkillContainer/SkillContainer.js'
import WorkExperienceContainer from '../Components/WorkExperience/WorkExperienceContainer.js'
import GalleryScroller from '../Components/Gallery/Gallery.js'
function Home()
{
    
    return(
        <>
        <Navbar></Navbar>
        <div className="container">
            <div className="fullWidthContainer scrollto" id='About'>
                
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img className="profilePicFace" src={ProfilePic} alt="profile"></img>
            </div>
            <div className='fullWidthContainer scrollto' id='Skills'>
               
                <div className='subDivision'> <SkillContainer/></div>
                <div className='subDivision'> <WorkExperienceContainer/></div>
            </div>
            <div className="fullWidthContainer">
                
               <div className='subDivision'><GalleryScroller/></div>
            </div>
            <div className="fullWidthContainer">
                
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img className="profilePicFace" src={ProfilePic} alt="profile"></img>
            </div>
            <div className="fullWidthContainer">
                
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <img className="profilePicFace" src={ProfilePic} alt="profile"></img>
            </div>
        </div>
        </>
    );
}

export default Home;