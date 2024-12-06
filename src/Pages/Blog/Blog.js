import "./blog.css"
import BlogItem from "./BlogItem";
import { useEffect,useState} from 'react';
import { database } from '../../Components/utils';
import { onValue, ref } from 'firebase/database';

function Blog() {

    const [blogs, updateBlog] = useState([]);
    useEffect(() => {
        const query = ref(database, "Blogs");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
    
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
