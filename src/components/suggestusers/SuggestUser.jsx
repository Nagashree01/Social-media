import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";
import "./SuggestUser.css";
import { useNavigate } from "react-router-dom";

export const SuggestUser = () => {
  const { currentUser } = useAuth();
  const { userState, followUserHandler, getUserInfoByUsername } = useUser();
  const navigate = useNavigate();

  const filteredUsers = userState?.users
    ?.filter((allUser) => allUser.username !== currentUser?.username)
    ?.filter(
      (user) =>
        !currentUser?.following?.find((item) => item.username === user.username)
    );
  return (
    <div className="suggested-users">
      <div className="suggested-users-container">
        <div className="suggested-user-heading">Suggested Users</div>
        <div className="suggested-user-list">
          {filteredUsers?.map((user) => (
            <div key={user.username} className="suggested-user">
              <div
                className="suggested-user-details cursor-pointer"
                onClick={() => {
                  getUserInfoByUsername(user.username);
                  navigate(`/profile/${user.username}`);
                }}
              >
                <div>
                  <img
                    src={user.avatarUrl}
                    alt={user.username}
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <div>
                    {user.firstName} {user.lastName}
                  </div>
                  <div>@{user.username}</div>
                </div>
              </div>

              <div>
                <button
                  className="follow-btn"
                  onClick={() => {
                    followUserHandler(user._id);
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
