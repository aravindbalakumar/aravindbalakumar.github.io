import "./blogList.css"

function BlogList() {
    return(
    <section id="blogList">
        <BlogListItem />
        <BlogListItem />
        <BlogListItem />
    </section>);
}
function BlogListItem({blogThumb="",blogTitle="BlogTItle",blogSmallDescription="SmallDescription"}) {
   return( <div id="blogItem">
        <img id="blogThumbImage" src={blogThumb}></img>
        <div id="blogContainer">
            <h3>{blogTitle}</h3>
            <p>{blogSmallDescription}</p>
        </div>
    </div>)
}
export default BlogList;