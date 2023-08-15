import axios from "axios";

export const loginService = async (username, password) =>
  await axios.post("api/auth/login", {
    username: username,
    password: password,
  });

export const signupService = async (
  firstName,
  lastName,
  email,
  userName,
  password
) =>
  await axios.post("api/auth/signup", {
    firstName,
    lastName,
    email,
    userName,
    password,
  });
