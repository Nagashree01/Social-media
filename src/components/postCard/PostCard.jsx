import React from "react";
import { useUser } from "../../context/UserContext";
import { useAuth } from "../../context/AuthContext";
import { AiOutlineHeart, AiFillHeart, AiFillDelete } from "react-icons/ai";
import "./PostCard.css";
import { BiBookmark, BiSolidBookmarkStar } from "react-icons/bi";
import { LiaComments } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../../context/PostContext";

export const PostCard = ({ post }) => {
  const { userState, addBookmark, removeBookmark, getUserInfoByUsername } =
    useUser();
  const {
    checkIfUserHasLikedThePost,
    likePostHandler,
    dislikePostHandler,
    deletePost,
  } = usePosts();
  const { currentUser } = useAuth();
  const { content, _id, username, createdAt, likes } = post;
  const findUserDetails =
    userState?.users?.find((user) => user.username === username) ||
    currentUser.username === username;
  const checkPostIsPresentInBookmark = (postIdToCheck) =>
    userState?.bookmarks?.includes(postIdToCheck);

  const navigate = useNavigate();

  return (
    <div className="postcard">
      <div className="postedBy-user-details">
        <div className="postedBy-details">
          <div>
            <img
              className="profile-img"
              src={findUserDetails.avatarUrl}
              alt={username}
              width="60"
              height="60"
            />
          </div>
          <div
            className="postedBy-name cursor-pointer"
            onClick={() => {
              getUserInfoByUsername(username);
              navigate(`/profile/${username}`);
            }}
          >
            {findUserDetails.firstName} {findUserDetails.lastName}
            <span className="postedBy-username"> @{username}</span>
          </div>
          <div>{new Date(createdAt).toDateString()}</div>
        </div>

        {username === currentUser.username && (
          <div>
            <AiFillDelete
              className=" delete-icon"
              onClick={() => {
                deletePost(_id);
              }}
            />
          </div>
        )}
      </div>
      <div className="content">{content}</div>
      <div className="post-card-icons-section">
        <div className="like-icon-container">
          {checkIfUserHasLikedThePost(post, currentUser) ? (
            <AiFillHeart
              className="post-card-icon"
              onClick={() => {
                dislikePostHandler(_id);
              }}
            />
          ) : (
            <AiOutlineHeart
              className="post-card-icon"
              onClick={() => {
                likePostHandler(_id);
              }}
            />
          )}
          <span>{likes.likeCount}</span>
        </div>
        <div>
          {checkPostIsPresentInBookmark(_id) ? (
            <BiSolidBookmarkStar
              className="post-card-icon"
              onClick={() => {
                removeBookmark(_id);
              }}
            />
          ) : (
            <BiBookmark
              className="post-card-icon"
              onClick={() => {
                addBookmark(_id);
              }}
            />
          )}
        </div>
        <div>
          <LiaComments className="post-card-icon" />
        </div>
      </div>
    </div>
  );
};
