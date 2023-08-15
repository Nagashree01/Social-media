import React from "react";
import { SideNavbar } from "../../components/sideNavBar/SideNavbar";
import { useUser } from "../../context/UserContext";
import { usePosts } from "../../context/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import "./Bookmark.css";
import { SuggestUser } from "../../components/suggestusers/SuggestUser";

export const Bookmark = () => {
  const { userState } = useUser();
  const {
    postsState: { posts },
  } = usePosts();

  const allBookmarks = userState.bookmarks.map((bookmarkId) =>
    posts.find((post) => post._id === bookmarkId)
  );
  return (
    <div className="bookmarks-page-layout">
      <SideNavbar />
      <div className="main-section">
        <div className="bookmarks-heading">Bookmarks</div>
        <div className="bookmarks-posts">
          {allBookmarks.length > 0 ? (
            allBookmarks.map((post) => {
              return <PostCard post={post} key={post._id} />;
            })
          ) : (
            <div className="no-posts-message">No Bookmarked posts yet!!!</div>
          )}
        </div>
      </div>
      <SuggestUser />
    </div>
  );
};
