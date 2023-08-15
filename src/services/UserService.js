import axios from "axios";

export const getAllUsersService = async () => await axios.get("/api/users");

export const getUserService = async (username) =>
  await axios.get(`/api/users/${username}`);

export const editUserProfileService = async (editInput, encodedToken) =>
  await axios.post(
    "/api/users/edit",
    { userData: editInput },
    { headers: { authorization: encodedToken } }
  );

export const addBookmarkService = async (postId, encodedToken) =>
  await axios.post(
    `api/users/bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

export const removeBookmarkService = async (postId, encodedToken) =>
  await axios.post(
    `api/users/remove-bookmark/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

export const getAllBookmarkService = async (encodedToken) =>
  await axios.get("api/users/bookmark", {
    headers: { authorization: encodedToken },
  });

export const userFollowService = async (followUserId, encodedToken) =>
  await axios.post(
    `api/users/follow/${followUserId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

export const userUnfollowService = async (followUserId, encodedToken) =>
  await axios.post(
    `api/users/unfollow/${followUserId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
