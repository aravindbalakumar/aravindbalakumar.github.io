import './Home.css';
import ProfilePic from './../../Assets/Images/corporate.png'
import MyProjects from './../../Components/MyProjects/MyProjects.js';
function Home() {

    return (
        <>
            <center><section id="profilePicContainer">
                <img id ="profilePic"src={ProfilePic}></img>
                </section>
            <section>
                <h2>ARAVIND BALAKUMAR SHIVA SANKAR</h2>
                <p>Game Developer(unity)/website Developer/UI & UX Designer</p>
            </section>
            </center>

            <br/>
            <br/>
            <section id="introContainer">
<p>
An developer having worked in different industries predominantly in AR/VR and Game Development,Currently trying to intertwine technical and creative aspect by actively learning skills and also pursuing Interaction and Experience Design
                </p>
            <section id="introRedirectButtons">
                <button id="button">Know what I can Provide</button>
                <button id="button">Know what I did</button>
            </section>
            </section>
        </>
    );
}

export default Home;