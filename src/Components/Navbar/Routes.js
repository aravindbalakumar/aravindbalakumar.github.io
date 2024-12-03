import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./../../Pages/Home/Home";
import About from "./../../Pages/Aboutme/AboutMe";
import Blog from "./../../Pages/Blog/Blog";
import Project from "./../../Pages/Projects/Project";
import MyProjects from "./../../Components/MyProjects/MyProjects";
import Contact from "./../../Pages/Contact/Contact";
function RouteResources() {
    return (
         <Routes>
             <Route path="/portfolio" element={<Home />} />
             <Route path="/*" element={<Home />} />
             {/* <Route path="/homepage" element={<Home/>} /> */}
             <Route path="/about" element={<About />} />
             <Route path="/blogs" element={<Blog />} />
              <Route path="/projects" element={<MyProjects/>}/>
              <Route path="/contact" element={<Contact/>}/>
         </Routes>
        // </HashRouter>


    );
}
export default RouteResources;