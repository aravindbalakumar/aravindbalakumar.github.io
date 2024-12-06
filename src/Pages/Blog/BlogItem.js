import { useState, useEffect } from "react";
import { database } from "../../Components/utils";
import { ref, onValue, update, push } from "firebase/database";
import { BiSolidLike ,BiSolidHeart,BiSolidMessage} from "react-icons/bi";
import "./blogItem.css"

function BlogItem({ blogIndex = "", imgSrc = "", name = "", description = "", longDescription = "", bottomImage = false, topImage = false }) {

    useEffect(() => {
        const blogRef = ref(database, `Blogs/${blogIndex}`);
        onValue(blogRef, (snapshot) => {
            const blogData = snapshot.val();
            if (blogData) {
                setComments(Object.values(blogData.comments || {}));
                setReactions(blogData.reactions || { like: 0, love: 0 });
            }
        });
    }, [blogIndex]);
    const [newUsername, setNewUsername] = useState("");
    const [expand, SetExpanded] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [reactions, setReactions] = useState({ like: 0, love: 0 });
    var ToggleXpand = () => {
        SetExpanded(!expand);
        if (expand) {
            document.body.style.overflow = "unset";
        }
        else {
            document.body.style.overflow = "hidden";
        }
    }
    const addComment = () => {
        if (newComment.trim() && newUsername.trim()) {
            const commentsRef = ref(database, `Blogs/${blogIndex}/comments`);
            push(commentsRef, { user: newUsername, text: newComment }) // Store username and comment
                .then(() => {
                    setNewComment(""); // Clear input field
                    setNewUsername(""); // Clear username field
                })
                .catch((error) => {
                    console.error("Error adding comment:", error);
                });
        } else {
            alert("Please enter both your name and a comment.");
        }
    };

    // Add a reaction
    const handleReaction = (type) => {
        const reactionsRef = ref(database, `Blogs/${blogIndex}/reactions`);
        const updatedReactions = { ...reactions, [type]: (reactions[type] || 0) + 1 };

        update(reactionsRef, updatedReactions).catch((error) => {
            console.error("Error updating reactions:", error);
        });
    };

    return (
        <>
            {expand ?
                <div className="blg_fll" >
                    < div className="blg_fll_modal">

                        <button className="blg_fll_close" onClick={ToggleXpand}>X</button>
                        <div className="blg_fll_container">
                            {topImage ? <img className="blg_fll_image" src={imgSrc} /> : <></>}
                            <h2 className="blg_fll_name">{name}</h2>
                            <p className="blg_fll_description" dangerouslySetInnerHTML={{ __html: longDescription }}></p>
                            {bottomImage ? <img className="blg_fll_image" src={imgSrc} /> : <></>}
                            <div className="reactions_section">
                                <button onClick={() => handleReaction("like")}><BiSolidLike/> Like ({reactions.like})</button>
                                <button onClick={() => handleReaction("love")}><BiSolidHeart/> Love ({reactions.love})</button>
                            </div>
                            <div className="comments_section">
                               
                                <form>

                                <div id="contact_label_value">
            <label>Name</label>
            <hr id="line" /> <input type="text" placeholder="Your Name" value={newUsername} onChange={(e) => setNewUsername(e.target.value)}/></div>
            <div id="contact_label_value">
            <label>Comment</label>
            <hr id="line" /> <input type="text" placeholder="Add a comment" value={newComment} onChange={(e) => setNewComment(e.target.value)}/></div>

                                
                                    <button onClick={addComment}>Add Comment</button>
                                </form>
                                <h3>Comments</h3>
                                <ul id="comments_list">
                                    {comments && Object.keys(comments).length > 0
                                        ? Object.values(comments).map((comment, index) => (
                                            <li key={index}>
                                               <p> <strong>{comment.user}:</strong> {comment.text}</p>
                                            </li>
                                        ))
                                        : <p>No comments yet. Be the first to comment!</p>}

                                </ul>
                                
                            </div>
                            
                        </div>
                    </div>
                </div> :
                <></>
            }
            <div className="blog_card" onClick={ToggleXpand}>
                <h4 className="blog_card_title">{name}</h4>
                <div className="blog_card_image_container"><img className="blog_card_image" src={imgSrc}></img></div>
                <div className="blog_card_details">

                    <section className="blog_card_description">{description}
                    </section>
                </div>
                <div className="blog_card_bot">
                <div className="blog_card_status">
                <span id="reaction-icon"><BiSolidLike/>:{reactions.like}</span>
                <span id="reaction-icon"><BiSolidHeart/>:{reactions.love}</span>
                <span id="reaction-icon"><BiSolidMessage/>:{comments!=null && comments!=undefined?comments.length:0}</span>
                </div>
                <button className="blog_card_button" id="button">Read More</button>
                </div>
            </div>
        </>
    );
}
export default BlogItem;