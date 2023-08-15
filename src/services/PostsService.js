import axios from "axios";

export const getAllPostsService = async () => await axios.get("api/posts");

export const getSinglePostService = async (postId) =>
  await axios.get(`api/posts/${postId}`);

export const getPostsByUsernameService = async (username) =>
  await axios.get(`api/posts/user/${username}`);

export const deletePostService = async (postId, encodedToken) =>
  await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: encodedToken },
  });

export const createPostService = async (post, encodedToken) =>
  await axios.post(
    "api/posts",
    { postData: post },
    {
      headers: { authorization: encodedToken },
    }
  );
export const editPostService = async (postId, postData, encodedToken) =>
  await axios.post(
    `api/posts/edit/${postId}`,
    {
      postData,
    },
    {
      headers: { authorization: encodedToken },
    }
  );

export const likePostService = async (postId, encodedToken) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );

export const dislikePostService = async (postId, encodedToken) =>
  await axios.post(
    `/api/posts/dislike/${postId}`,
    {},
    {
      headers: { authorization: encodedToken },
    }
  );
