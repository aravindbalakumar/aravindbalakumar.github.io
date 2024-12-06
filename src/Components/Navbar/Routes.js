import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./../../Pages/Home/Home";
import About from "./../../Pages/Aboutme/AboutMe";
import Blog from "./../../Pages/Blog/Blog";
import MyProjects from "./../../Pages/MyProjects/MyProjects";
import Contact from "./../../Pages/Contact/Contact";
import Gallery from "../../Pages/Gallery/Gallery";
import BlogPage from "../../Pages/CreateBlog/BlogPage";
function RouteResources() {
    return (
         <Routes>
             <Route path="/portfolio" element={<Home />} />
             <Route path="/*" element={<Home />} />
             {/* <Route path="/homepage" element={<Home/>} /> */}
             <Route path="/about" element={<About />} />
             <Route path="/blogs" element={<Blog />} />
             
             <Route path="/gallery" element={<Gallery />} />
              <Route path="/projects" element={<MyProjects/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/createblog" element={<BlogPage/>}/>
         </Routes>
        // </HashRouter>


    );
}
export default RouteResources;