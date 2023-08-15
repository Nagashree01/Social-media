import React from "react";
import { SideNavbar } from "../../components/sideNavBar/SideNavbar";
import { usePosts } from "../../context/PostContext";
import "./Explore.css";
import { PostCard } from "../../components/postCard/PostCard";
import { SuggestUser } from "../../components/suggestusers/SuggestUser";
export const Explore = () => {
  const { postsState } = usePosts();
  return (
    <div className="explore-page-layout">
      <SideNavbar />
      <div className="main-section">
        <div className="explore-heading">Explore</div>
        <div className="explore-posts">
          {postsState.posts.map((post) => {
            return <PostCard post={post} key={post._id} />;
          })}
        </div>
      </div>
      <SuggestUser />
    </div>
  );
};
