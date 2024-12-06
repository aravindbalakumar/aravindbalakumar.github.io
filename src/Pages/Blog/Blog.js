import "./blog.css"
import BlogItem from "./BlogItem";
import { useEffect,useState} from 'react';
import { database } from '../../Components/utils';
import { onValue, ref } from 'firebase/database';

function Blog() {

    //gets the update blog
    const [blogs, updateBlog] = useState([]);
    useEffect(() => {
        // query reference blogs in the firebase 
        const query = ref(database, "Blogs");
        //onvalue change always gets called when data is updated in firebase or
        return onValue(query, (snapshot) => { 
          const data = snapshot.val();
            // if not snap shot exist then quit updates blog array 
          if (snapshot.exists()) {
            const blogArray = Object.values(data);
            updateBlog(blogArray);
          }
        });
      }, []);

    return (
        <>
            <center><h2 id="Container" >Blogs</h2></center>
            <ul className="BlogContainer">
                {/* contains all blog instances*/}
                {blogs.map((blogData,blgID)=>(
                    <li>
                        <BlogItem key={blogData.blgID} blogIndex={blgID} imgSrc={blogData.keyImage} description={blogData.description} name={blogData.name} longDescription={blogData.longDescription} bottomImage={blogData.botImage} topImage={blogData.topImage}/>
                    </li>
                ))}

                
            </ul>
        </>
    );
}
export default Blog;
