import { useState } from "react";
import { data } from "../data/data";

function Posts() {
  const[contentData ,setContentData] = useState(data)

  function add(id){
    const newData = [...contentData]
    newData[id].likes = newData[id].likes +1
    setContentData(newData)
  }

  function deleteC(id){
    const newData = [...contentData]
    newData[id].likes = newData[id].likes - 1
    setContentData(newData)
  }

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {data.map((post,index) => (
          <div className="post-item" key={post.id}>
            <div className="post-header">
              <h2>{post.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{post.likes}</span>
              </div>
            </div>
            <p className="post-content">
              {post.content}
            </p>
            <div className="post-actions">
              <button className="like-button" onClick={() => add(index)}>Like</button>
              <button className="dislike-button" onClick={() => deleteC(index)}>Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;

