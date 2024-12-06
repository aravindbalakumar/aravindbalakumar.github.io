import React, { useState } from 'react';
import './BlogPage.css';
import img1 from './../../Assets/Images/ProjectImages/ARDecors_2.png'
import img2 from './../../Assets/Images/ProjectImages/ARDecors_1.png'




function BlogPage(){
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "THE CYCLE",
      content: "Under the sprawling tree, players rest from cricket, watching dogs frolic nearby. The scene brims with serenity, nature’s embrace offering a peaceful respite in the harmony of sport and life.",
      image: img1, // Placeholder image
      likes: 10,
      hearts: 5,
      emojiReactions: { "😊": 3, "🔥": 4, "👍": 2 },
    },
    {
      id: 2,
      title: "A Smart Bag for School Students Safety and Security in Oman",
      content: "The idea behind the paper is to transform the conventional school bag into a smart bag connected to the Internet of Things and aimed at elementary school pupils. Its concept uses GPS to follow the student's location; whenever it detects dangers like gas and smoke around the student, it sends a signal to the user.Najiya Salim Khamis Al Mahrizi, Shaik Mazhar Hussain ",
      image: img2, // Placeholder image
      likes: 10,
      hearts: 5,
      emojiReactions: { "😊": 3, "🔥": 4, "👍": 2 },
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const addNewPost = () => {
    if (!newPost.title || !newPost.content || !newPost.image) return;
    const newPostObject = {
      id: posts.length + 1,
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
      likes: 0,
      hearts: 0,
      emojiReactions: { "😊": 0, "🔥": 0, "👍": 0 },
    };
    setPosts([newPostObject, ...posts]);
    setNewPost({ title: "", content: "", image: "" });
  };

  const handleReaction = (postId, type) => {
    setPosts(
      posts.map(post => {
        if (post.id === postId) {
          post[type]++;
        }
        return post;
      })
    );
  };

  const handleEmojiReaction = (postId, emoji) => {
    setPosts(
      posts.map(post => {
        if (post.id === postId) {
          post.emojiReactions[emoji]++;
        }
        return post;
      })
    );
  };

  const openEditPost = (post) => {
    setIsEditing(true);
    setCurrentPost(post);
  };

  const saveEditPost = () => {
    if (currentPost) {
      setPosts(
        posts.map(post => (post.id === currentPost.id ? currentPost : post))
      );
      setIsEditing(false);
      setCurrentPost(null);
    }
  };

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Share your thougts.</h1>
        <button className="add-post-button" onClick={addNewPost}>
          + Add Post
        </button>
      </header>

      {isEditing && currentPost && (
        <div className="edit-banner">
          <h2>Edit Post</h2>
          <input
            type="text"
            value={currentPost.title}
            onChange={(e) =>
              setCurrentPost({ ...currentPost, title: e.target.value })
            }
          />
          <textarea
            value={currentPost.content}
            onChange={(e) =>
              setCurrentPost({ ...currentPost, content: e.target.value })
            }
          />
          <button onClick={saveEditPost}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      )}

      <div className="add-post-form">
        <input
          type="text"
          placeholder="Enter post title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Enter post content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <input
          type="text"
          placeholder="Enter image URL"
          value={newPost.image}
          onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
        />
        <button onClick={addNewPost}>Submit Post</button>
      </div>

      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <div className="reactions">
                <button onClick={() => handleReaction(post.id, "likes")}>
                  👍 Like ({post.likes})
                </button>
                <button onClick={() => handleReaction(post.id, "hearts")}>
                  ❤️ Heart ({post.hearts})
                </button>
                {["😊", "🔥",].map(emoji => (
                  <button
                    key={emoji}
                    onClick={() => handleEmojiReaction(post.id, emoji)}
                  >
                    {emoji} ({post.emojiReactions[emoji]})
                  </button>
                ))}
              </div>
              <button
                className="edit-button"
                onClick={() => openEditPost(post)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
