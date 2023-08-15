import { createContext, useContext, useEffect, useReducer } from "react";
import {
  createPostService,
  deletePostService,
  dislikePostService,
  getAllPostsService,
  getPostsByUsernameService,
  likePostService,
} from "../services/PostsService";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const PostsContext = createContext();

const initialPostsState = { posts: [], postsByUsername: [] };

const postsReducer = (state, { type, payload }) => {
  switch (type) {
    case "ALL_POSTS":
      return { ...state, posts: payload };
    case "LIKE_POST":
      return { ...state, posts: payload };
    case "DISLIKE_POST":
      return { ...state, posts: payload };
    case "DELETE_POST":
      return { ...state, posts: payload };
    default:
      break;
  }
};

export const PostsContextProvider = ({ children }) => {
  const { token } = useAuth();
  const [postsState, postsDispatch] = useReducer(
    postsReducer,
    initialPostsState
  );

  const getAllPosts = async () => {
    try {
      const response = await getAllPostsService();

      const {
        status,
        data: { posts },
      } = response;
      if (status === 200) {
        postsDispatch({ type: "ALL_POSTS", payload: posts });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createPost = async (post) => {
    try {
      const response = await createPostService(post, token);
      const {
        status,
        data: { posts },
      } = response;
      if (status === 201) {
        postsDispatch({ type: "ALL_POSTS", payload: posts });
        toast.success("Post Created Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async (postId) => {
    try {
      const response = await deletePostService(postId, token);
      const {
        status,
        data: { posts },
      } = response;

      if (status === 201) {
        postsDispatch({ type: "DELETE_POST", payload: posts });
        toast.success("Post Deleted");
      }
    } catch (error) {
      console.log(error);
      toast.error("Post not deleted! Try again");
    }
  };

  const likePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await likePostService(postId, token);
      if (status === 201) {
        postsDispatch({ type: "LIKE_POST", payload: posts });
        toast.success("Liked a post");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const dislikePostHandler = async (postId) => {
    try {
      const {
        status,
        data: { posts },
      } = await dislikePostService(postId, token);
      if (status === 201) {
        postsDispatch({ type: "DISLIKE_POST", payload: posts });
        toast.success("Unliked the post");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const getPostsByUsername = async (username) => {
    try {
      const response = await getPostsByUsernameService(username);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPosts();
  });

  const checkIfUserHasLikedThePost = (post, currentUser) => {
    return post?.likes?.likedBy?.some(
      (user) => user.username === currentUser.username
    );
  };

  return (
    <PostsContext.Provider
      value={{
        getAllPosts,
        postsState,
        postsDispatch,
        createPost,
        likePostHandler,
        dislikePostHandler,
        getPostsByUsername,
        checkIfUserHasLikedThePost,
        deletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
