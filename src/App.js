import "./App.css";

import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import { Login } from "./pages/loginPage/Login";
import { Signup } from "./pages/signupPage/Signup";
import { Home } from "./pages/home/Home";
import { RequireAuth } from "./components/requireAuth/RequireAuth";
import { Explore } from "./pages/explore/Explore";
import { Bookmark } from "./pages/bookmark/Bookmark";
import { Profile } from "./pages/profile/Profile";
import { SinglePost } from "./pages/singlepost/SinglePost";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster position="top-center" />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        <Route
          path="/explore"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmark"
          element={
            <RequireAuth>
              <Bookmark />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/post/:postId"
          element={
            <RequireAuth>
              <SinglePost />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
