import React from "react";
import { SideNavbar } from "../../components/sideNavBar/SideNavbar";
import "./Profile.css";
import { useParams, Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import { usePosts } from "../../context/PostContext";
import { PostCard } from "../../components/postCard/PostCard";
import { SuggestUser } from "../../components/suggestusers/SuggestUser";
import { EditProfile } from "../../components/editprofile/EditProfile";

export const Profile = () => {
  const { username } = useParams();
  const {
    userState: { userInfo },
  } = useUser();
  const { postsState } = usePosts();
  const { currentUser } = useAuth();

  const postsByUser = postsState?.posts?.filter(
    (post) => post.username === userInfo?.username
  );

  return (
    <div className="profile-page-layout">
      <SideNavbar />
      <div className="profile-main-section">
        <div className="profile-heading">Profile</div>
        <div className="profile-info-container">
          <div className="profile-info">
            <div className="profile-image">
              <img
                src={userInfo?.avatarUrl}
                alt={userInfo?.username}
                width="150"
                height="150"
              />
            </div>
            <div className="profile-details">
              <div>
                {userInfo?.firstName} {userInfo?.lastName}
              </div>
              <div>@{userInfo?.username}</div>
              <div>{userInfo?.bio}</div>
              <Link
                to={userInfo?.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {userInfo?.website}
              </Link>
              <div className="followers-following-info">
                <span>{userInfo?.following?.length} Following</span>
                <span>{userInfo?.followers?.length} Followers</span>
              </div>
            </div>
          </div>
          {currentUser.username === username && (
            <div className="current-user-option">
              <EditProfile />
            </div>
          )}
        </div>
        <div>
          <div className="posts-by-username-heading">Posts By {username}</div>
          <div className="posts-by-user">
            {postsByUser?.length > 0 ? (
              postsByUser?.map((post) => {
                return <PostCard post={post} key={post._id} />;
              })
            ) : (
              <div className="no-posts-message">No Posts Yet!!</div>
            )}
          </div>
        </div>
      </div>
      <SuggestUser />
    </div>
  );
};
