import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import "./NewPost.css";
import { usePosts } from "../../context/PostContext";

export const NewPost = () => {
  const { currentUser } = useAuth();
  const { createPost } = usePosts();
  const [newpost, setNewpost] = useState({ content: "" });

  const newPostChangeHandler = (e) => {
    return setNewpost({ content: e.target.value });
  };
  //console.log(newpost);
  const createPostHandler = () => {
    createPost(newpost);
    setNewpost({ content: "" });
  };

  return (
    <div className="new-post-container">
      <div className="new-post-details">
        <div>
          <img
            src={currentUser.avatarUrl}
            alt={currentUser.username}
            width="50"
            height="50"
          />
        </div>
        <div className="text-area-container">
          <textarea
            className="text-area-content"
            name="content"
            value={newpost.content}
            placeholder="Whats's happening"
            onChange={newPostChangeHandler}
          ></textarea>
        </div>
      </div>
      <div className="post-btn-container">
        <button
          onClick={() => {
            createPostHandler();
          }}
          disabled={newpost.content.length > 0 ? false : true}
          className="post-btn"
        >
          Post
        </button>
      </div>
    </div>
  );
};
