import React, { useState } from "react";
import "./EditProfile.css";
import { useAuth } from "../../context/AuthContext";
import { useUser } from "../../context/UserContext";

export const EditProfile = () => {
  const { currentUser } = useAuth();
  const { editUserProfileHandler } = useUser();
  const [editProfileForm, setEditprofileForm] = useState(false);
  const [editUserInfo, setEditUserInfo] = useState(currentUser);
  const [showAvatarOptions, setShowAvatarOptions] = useState(false);
  const [isavatar, setIsAvatar] = useState(editUserInfo.avatarUrl || "");

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditUserInfo((user) => ({ ...user, [name]: value }));
  };

  const allAvatars = [
    "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
    "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
    "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
    "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
    "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736626/avatar3_idnawj.jpg",
    "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
  ];

  const handleAvatarChange = (avatar) => {
    setIsAvatar(() => avatar);
    setEditUserInfo((prev) => ({ ...prev, avatarUrl: avatar }));
  };
  const editProfile = (e) => {
    e.preventDefault();
    //setEditUserInfo((prev) => ({ ...prev, avatarUrl: isavatar }));
    editUserProfileHandler(editUserInfo);
    setEditprofileForm(false);
  };
  return (
    <div>
      <button
        className="edit-profile-button"
        onClick={() => setEditprofileForm(true)}
      >
        Edit Profile
      </button>
      {editProfileForm && (
        <div className="form">
          <div className="form-content">
            <span
              className="close"
              onClick={() => {
                setEditprofileForm(false);
              }}
            >
              &times;
            </span>
            <h2 className="edit-profile-heading">Edit Profile</h2>
            <div className="form-details">
              <div>
                <img
                  src={isavatar}
                  alt={editUserInfo.username}
                  width="100"
                  height="100"
                  className="user-avatar"
                  onClick={() => {
                    setShowAvatarOptions(true);
                  }}
                />
              </div>
              {showAvatarOptions && (
                <div className="all-avatars-section">
                  <div className="choose-avatar-heading">
                    <p>Choose Avatar</p>
                    <span
                      className="avatar-close"
                      onClick={() => {
                        setShowAvatarOptions(false);
                      }}
                    >
                      &times;
                    </span>
                  </div>
                  <div className="all-avatars">
                    {allAvatars.map((avt, index) => (
                      <img
                        src={avt}
                        alt="avatars"
                        width="50"
                        className="avatar"
                        height={50}
                        key={index}
                        onClick={() => {
                          handleAvatarChange(avt);
                          setShowAvatarOptions(false);
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div>
                <label>First Name:</label>
                <input
                  value={editUserInfo.firstName}
                  type="text"
                  name="firstName"
                  onChange={handleEditInputChange}
                />
              </div>
              <div>
                <label>Last Name:</label>
                <input
                  value={editUserInfo.lastName}
                  type="text"
                  name="lastName"
                  onChange={handleEditInputChange}
                />
              </div>
              <div>
                <label>Bio: </label>
                <input
                  type="text"
                  name="bio"
                  onChange={handleEditInputChange}
                  value={editUserInfo.bio}
                  required
                />
              </div>
              <div>
                <label>Website: </label>
                <input
                  type="text"
                  name="website"
                  onChange={handleEditInputChange}
                  value={editUserInfo.website}
                  required
                />
              </div>
              <div>
                <button
                  className="save-btn"
                  onClick={(e) => {
                    editProfile(e);
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
