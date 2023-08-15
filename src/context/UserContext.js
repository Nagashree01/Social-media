import { createContext, useContext, useEffect, useReducer } from "react";
import {
  addBookmarkService,
  editUserProfileService,
  getAllBookmarkService,
  getAllUsersService,
  getUserService,
  removeBookmarkService,
  userFollowService,
  userUnfollowService,
} from "../services/UserService";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";

const UserContext = createContext();

const initialUserState = { users: [], userInfo: {}, bookmarks: [] };
const userReducerFunc = (state, { type, payload }) => {
  switch (type) {
    case "ALL_USERS":
      return { ...state, users: payload };
    case "GET_BOOKMARK":
      return { ...state, bookmarks: payload };
    case "ADD_BOOKMARK":
      return { ...state, bookmarks: payload };
    case "REMOVE_BOOKMARK":
      return { ...state, bookmarks: payload };
    case "FOLLOW_USER":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.username === payload.username) {
            return (user = payload);
          }
          return user;
        }),
      };
    case "EDIT_PROFILE":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.username === payload.username) {
            return (user = payload);
          }
          return user;
        }),
        userInfo: { ...payload },
      };
    case "SINGLE_USER":
      return { ...state, userInfo: payload };
    default:
      break;
  }
};

export const UserContextProvider = ({ children }) => {
  const { token, setCurrentUser } = useAuth();
  const [userState, userDispatch] = useReducer(
    userReducerFunc,
    initialUserState
  );

  const getAllUsers = async () => {
    try {
      const response = await getAllUsersService();
      const {
        data: { users },
        status,
      } = response;
      if (status === 200) {
        userDispatch({ type: "ALL_USERS", payload: users });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserInfoByUsername = async (username) => {
    try {
      const response = await getUserService(username);
      const {
        status,
        data: { user },
      } = response;
      if (status === 200) {
        userDispatch({ type: "SINGLE_USER", payload: user });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getBookmarks = async () => {
    try {
      const response = await getAllBookmarkService(token);
      const {
        data: { bookmarks },
        status,
      } = response;
      if (status === 200) {
        userDispatch({ type: "GET_BOOKMARK", payload: bookmarks });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addBookmark = async (postId) => {
    try {
      const response = await addBookmarkService(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;

      if (status === 200) {
        userDispatch({ type: "ADD_BOOKMARK", payload: bookmarks });
        toast.success("Post added to bookmarks");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeBookmark = async (postId) => {
    try {
      const response = await removeBookmarkService(postId, token);
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        userDispatch({ type: "REMOVE_BOOKMARK", payload: bookmarks });
        toast.success("Post removed bookmarks");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const followUserHandler = async (followUserId) => {
    try {
      const response = await userFollowService(followUserId, token);
      console.log(response);
      const {
        status,
        data: { user, followUser },
      } = response;
      if (status === 200) {
        userDispatch({ type: "FOLLOW_USER", payload: followUser });
        toast.success(`You started following ${followUser.username}`);
        setCurrentUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const unfollowUserHandler = async (unfollowUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await userUnfollowService(unfollowUserId, token);
      if (status === 200) {
        userDispatch({ type: "FOLLOW_USER", payload: followUser });
        setCurrentUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editUserProfileHandler = async (usereditInput) => {
    try {
      const response = await editUserProfileService(usereditInput, token);

      if (response.status === 201) {
        const updatedUser = userState.users.map((user) =>
          user.username === response.data.user.username
            ? response.data.user
            : user
        );
        userDispatch({ type: "ALL_USERS", payload: [...updatedUser] });
        userDispatch({ type: "EDIT_PROFILE", payload: response.data.user });
        setCurrentUser(response.data.user);
        userDispatch({ type: "SINGLE_USER", payload: response.data.user });
        toast.success("Profile Updated successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Profile not updated");
    }
  };

  useEffect(() => {
    getAllUsers();
    getBookmarks();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
        followUserHandler,
        unfollowUserHandler,
        addBookmark,
        removeBookmark,
        getUserInfoByUsername,
        editUserProfileHandler,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
