import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // {
  //   _id: uuid(),
  //   firstName: "Adarsh",
  //   lastName: "Balika",
  //   username: "adarshbalika",
  //   password: "adarshBalika123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  //   bookmarks: [],
  // },
  {
    _id: uuid(),
    firstName: "Adrianna",
    lastName: "Willis",
    username: "Adrianna",
    password: "Willis6",
    avatarUrl:
      "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
    bio: "Professional musicaholic",
    website: "https://example.com/Adrainnawillis",
    createdAt: "2023-01-13T07:00:00",
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Nancy",
        lastName: "Ellison",
        username: "Nancy",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Nancy",
        lastName: "Ellison",
        username: "Nancy",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "Jonathan",
    lastName: "Sandler",
    username: "Jonathan",
    password: "Sandler7",
    avatarUrl:
      "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
    bio: "Writer. Travel fanatic",
    website: "https://example.com/JonathanWillis",
    createdAt: "2023-01-14T07:00:00",
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        firstName: "Rita",
        lastName: "White",
        username: "Rita",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Dan",
        lastName: "Park",
        username: "Dan",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
      },
      {
        _id: uuid(),
        firstName: "Nicolas",
        lastName: "Frost",
        username: "Nicolas",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736626/avatar3_idnawj.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Nicolas",
    lastName: "Frost",
    username: "Nicolas",
    password: "Frost5",
    avatarUrl:
      "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736626/avatar3_idnawj.jpg",
    bio: "Entrepreneur. Web geek. ",
    website: "https://example.com/nicolas",
    createdAt: "2023-01-15T07:00:00",
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        firstName: "Jonathan",
        lastName: "Sandler",
        username: "Jonathan",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Carl",
        lastName: "Sandford",
        username: "Carl",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Melissa",
    lastName: "Lake",
    username: "Melissa",
    password: "Lake4",
    avatarUrl:
      "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
    bio: "Friendly troublemaker.",
    website: "https://Melissa.com/",
    createdAt: "2023-02-16T08:00:00",
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        firstName: "Carl",
        lastName: "Sandford",
        username: "Carl",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Rita",
        lastName: "White",
        username: "Rita",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Carl",
    lastName: "Sandford",
    username: "Carl",
    password: "Sanford7",
    avatarUrl:
      "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
    bio: "Coffee ninja.",
    website: "https://example.com/carl-sanford",
    createdAt: "2023-01-20T07:00:00",
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        firstName: "Nicolas",
        lastName: "Frost",
        username: "Nicolas",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736626/avatar3_idnawj.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Melissa",
        lastName: "Lake",
        username: "Melissa",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Rita",
    lastName: "White",
    username: "Rita",
    password: "White5",
    avatarUrl:
      "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
    bio: "Total coffee nerd.",
    website: "https://example.com/rita-white",
    createdAt: "2023-01-22T07:00:00",
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        firstName: "Melissa",
        lastName: "Lake",
        username: "Melissa",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Jonathan",
        lastName: "Sandler",
        username: "Jonathan",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
      },
      {
        _id: uuid(),
        firstName: "Dan",
        lastName: "Park",
        username: "Dan",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Dan",
    lastName: "Park",
    username: "Dan",
    password: "Park4",
    avatarUrl:
      "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
    bio: "Making History...",
    website: "https://example.com/dan-park",
    createdAt: "2023-01-11T07:00:00",
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        firstName: "Jonathan",
        lastName: "Sandler",
        username: "Jonathan",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Rita",
        lastName: "White",
        username: "Rita",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Nancy",
    lastName: "Ellison",
    username: "Nancy",
    password: "Ellison7",
    avatarUrl:
      "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
    bio: "🍩 worry 🐝 happy.",
    website: "https://nancy-e.com/",
    createdAt: "2023-01-13T09:00:00",
    updatedAt: formatDate(),
    bookmarks: [],
    following: [
      {
        _id: uuid(),
        firstName: "Adrianna",
        lastName: "Willis",
        username: "Adrianna",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Adrianna",
        lastName: "Willis",
        username: "Adrianna",
        avatarUrl:
          "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
      },
    ],
  },
];
