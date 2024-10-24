import { useState } from "react";
import { blogPost } from "../data/Post";

function Posts() {
  const [post, setPost] = useState(blogPost);

  const likePost = (indexPost) => {
    const newPost = [...post];
    newPost[indexPost].likes = newPost[indexPost].likes + 1;
    setPost(newPost);
  };

  const dislikePost = (indexPost) => {
    const newPost = [...post];
    if (newPost[indexPost].likes > 0) {
      newPost[indexPost].likes = newPost[indexPost].likes - 1;
    }
    setPost(newPost);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {post.map((item, index) => {
          return (
            <div className="post-item">
              <div className="post-header">
                <h2>{item.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button onClick={() => likePost(index)} className="like-button">
                  Like
                </button>
                <button
                  onClick={() => dislikePost(index)}
                  className="dislike-button"
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
        {/*<div class="post-item">
          <div class="post-header">
            <h2>Post Title #1</h2>
            <div class="post-social-media-stats">
              <span class="stats-topic">Likes: </span>
              <span class="post-likes">10</span>
            </div>
          </div>
          <p class="post-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vel turpis vestibulum, aliquet ipsum vitae, auctor risus. Morbi
            tincidunt, leo non molestie consectetur, elit libero faucibus
            tellus, sed fringilla tortor libero sit amet odio. Maecenas sed ante
            condimentum mauris euismod pellentesque eu eu justo...
          </p>
          <div class="post-actions">
            <button class="like-button">Like</button>
            <button class="dislike-button">Dislike</button>
          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default Posts;
