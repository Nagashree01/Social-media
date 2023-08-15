import React, { useState } from "react";
import { SideNavbar } from "../../components/sideNavBar/SideNavbar";
import "./Home.css";
import { usePosts } from "../../context/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { useAuth } from "../../context/AuthContext";

import { SuggestUser } from "../../components/suggestusers/SuggestUser";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { NewPost } from "../../components/newpost/NewPost";

export const Home = () => {
  const { currentUser } = useAuth();
  const { postsState } = usePosts();
  const postsByFollowingUsers = postsState.posts.filter(
    (post) =>
      currentUser?.following.some(
        (followingUser) => followingUser.username === post.username
      ) || currentUser.username === post.username
  );
  const [sortOption, setSortOption] = useState({
    showOption: false,
    sortBy: "Popular",
  });
  const handleSortOption = (value) => {
    return setSortOption({
      showOption: false,
      sortBy: value,
    });
  };

  const sortedPosts = (sortByType, posts) => {
    if (sortByType === "Popular") {
      const filteredPosts = posts.sort(
        (a, b) => b.likes.likeCount - a.likes.likeCount
      );
      return filteredPosts;
    } else if (sortByType === "Latest") {
      const filteredPosts = posts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return filteredPosts;
    } else {
      const filteredPosts = posts.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      return filteredPosts;
    }
  };

  return (
    <div className="home-page-layout">
      <SideNavbar className="side-nav" />
      <div className="main-section">
        <div className="home-heading">Home</div>
        <div>
          <NewPost />
        </div>

        <div className="sort-container">
          <div>{sortOption.sortBy} posts</div>
          <div className="sort-icon-container cursor-pointer">
            <HiOutlineAdjustmentsHorizontal
              className="sort-icon"
              onClick={() => {
                setSortOption((prev) => ({
                  ...prev,
                  showOption: !prev.showOption,
                }));
              }}
            />
            {sortOption.showOption && (
              <div className="sort-options">
                <ul>
                  <li
                    onClick={() => {
                      handleSortOption("Popular");
                    }}
                  >
                    Popular
                  </li>
                  <li
                    onClick={() => {
                      handleSortOption("Latest");
                    }}
                  >
                    Latest
                  </li>
                  <li
                    onClick={() => {
                      handleSortOption("Oldest");
                    }}
                  >
                    Oldest
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
          {sortedPosts(sortOption.sortBy, postsByFollowingUsers).map((post) => {
            return <PostCard post={post} />;
          })}
        </div>
      </div>
      <SuggestUser />
    </div>
  );
};
