import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "📚🌟 Looking for your next literary adventure? Dive into the captivating world of 'The Book Thief' by Markus Zusak, where words wield extraordinary power and hearts are forever changed. #BookRecommendation #LiteraryJourney",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Nancy",
          lastName: "Ellison",
          username: "Nancy",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
        {
          _id: uuid(),
          firstName: "Rita",
          lastName: "White",
          username: "Rita",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Adrianna",
    createdAt: "2023-03-13T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📖🌈 In a world of endless possibilities, books offer a kaleidoscope of perspectives. From fiction to non-fiction, they are the keys that unlock our minds and set our imaginations free. #Books #ImaginationUnleashed",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rita",
          lastName: "White",
          username: "Rita",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
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
          firstName: "Jonathan",
          lastName: "Sandler",
          username: "Jonathan",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Nancy",
    createdAt: "2023-03-12T07:15:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📚🌌 Embark on a cosmic odyssey with 'Dune' by Frank Herbert, a masterpiece that weaves politics, religion, and ecology into a captivating sci-fi epic. #ScienceFiction #BookNerd",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Carl",
          lastName: "Sandford",
          username: "Carl",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
        },
        {
          _id: uuid(),
          firstName: "Adrianna",
          lastName: "Willis",
          username: "Adrianna",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
        },
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
      dislikedBy: [],
    },
    username: "Jonathan",
    createdAt: "2023-03-14T05:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📖🎭 Step into the enchanting world of 'The Night Circus' by Erin Morgenstern, where a magical circus comes alive at night, weaving spells of wonder and delight. #MagicalRealism #ReadersParadise",
    likes: {
      likeCount: 3,
      likedBy: [
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
        {
          _id: uuid(),
          firstName: "Carl",
          lastName: "Sandford",
          username: "Carl",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Rita",
    createdAt: "2023-03-11T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📚🏰 Journey to the wizarding world of Hogwarts with 'Harry Potter and the Sorcerer's Stone' by J.K. Rowling – a timeless tale of friendship, bravery, and the power of love. #HarryPotter #ReadingMagic",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rita",
          lastName: "White",
          username: "Rita",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
        {
          _id: uuid(),
          firstName: "Adrianna",
          lastName: "Willis",
          username: "Adrianna",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Dan",
    createdAt: "2023-03-15T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Nothing beats the smell of new books📚📖📗📙",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Adrianna",
          lastName: "Willis",
          username: "Adrianna",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
        },
        {
          _id: uuid(),
          firstName: "Rita",
          lastName: "White",
          username: "Rita",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
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
          firstName: "Jonathan",
          lastName: "Sandler",
          username: "Jonathan",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
        },
        {
          _id: uuid(),
          firstName: "Melissa",
          lastName: "Lake",
          username: "Melissa",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Jonathan",
    createdAt: "2023-03-20T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📖🌍 'The Alchemist' by Paulo Coelho reminds us to chase our dreams fearlessly, for the journey itself is what truly matters. A soul-stirring fable that leaves an indelible mark on your heart. #Inspiration #BookWisdom",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rita",
          lastName: "White",
          username: "Rita",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Nicolas",
    createdAt: "2023-04-11T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📚🌹 Love, loss, and the resilience of the human spirit intertwine in 'The Kite Runner' by Khaled Hosseini, a poignant tale of friendship set against the backdrop of Afghanistan's tumultuous history. #MustRead #EmotionalJourney",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Melissa",
          lastName: "Lake",
          username: "Melissa",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
        },
        {
          _id: uuid(),
          firstName: "Adrianna",
          lastName: "Willis",
          username: "Adrianna",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Carl",
    createdAt: "2023-04-13T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📖💡 Unlock the secrets of creativity with 'Big Magic' by Elizabeth Gilbert – a book that celebrates the magical process of living a creative life. #Creativity #InspirationUnleashed",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Carl",
          lastName: "Sandford",
          username: "Carl",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Melissa",
    createdAt: "2023-04-12T05:10:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📚🌟 Lose yourself in the intricate web of plots and conspiracies with 'The Girl with the Dragon Tattoo' by Stieg Larsson – a gripping Nordic noir that keeps you on the edge of your seat. #Thriller #PageTurner",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Melissa",
          lastName: "Lake",
          username: "Melissa",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
        },
        {
          _id: uuid(),
          firstName: "Jonathan",
          lastName: "Sandler",
          username: "Jonathan",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Adrianna",
    createdAt: "2023-04-15T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📖🍂 As the leaves fall, immerse yourself in the hauntingly beautiful 'The Picture of Dorian Gray' by Oscar Wilde, a tale of beauty, corruption, and the price of eternal youth. #ClassicLiterature #AutumnReads",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Jonathan",
          lastName: "Sandler",
          username: "Jonathan",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736661/avatar5_lvlmaq.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Dan",
    createdAt: "2023-04-07T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📚🎭 Explore the power of identity and love in 'The Great Gatsby' by F. Scott Fitzgerald – a timeless masterpiece that continues to resonate with readers across generations. #LiteraryClassic #BookLove",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Adrianna",
          lastName: "Willis",
          username: "Adrianna",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
        },
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
          firstName: "Nancy",
          lastName: "Ellison",
          username: "Nancy",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
        {
          _id: uuid(),
          firstName: "Melissa",
          lastName: "Lake",
          username: "Melissa",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
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
      dislikedBy: [],
    },
    username: "Rita",
    createdAt: "2023-04-17T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📖🌊 Set sail on an unforgettable adventure with 'Life of Pi' by Yann Martel, where a boy's survival at sea becomes a metaphor for the resilience of the human spirit. #Adventure #BookwormsChoice",
    likes: {
      likeCount: 2,
      likedBy: [
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
          firstName: "Nicolas",
          lastName: "Frost",
          username: "Nicolas",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736626/avatar3_idnawj.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Carl",
    createdAt: "2023-04-27T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📚🌺 'The Secret Garden' by Frances Hodgson Burnett is a heartwarming tale that reminds us of the magic of nature and the transformative power of love and friendship. #ChildrensBook #NatureMagic",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rita",
          lastName: "White",
          username: "Rita",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
        {
          _id: uuid(),
          firstName: "Melissa",
          lastName: "Lake",
          username: "Melissa",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736637/avatar4_hnmshn.jpg",
        },
        {
          _id: uuid(),
          firstName: "Carl",
          lastName: "Sandford",
          username: "Carl",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Nicolas",
    createdAt: "2023-04-21T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📖🗽 Delve into the inspiring life of 'Becoming' by Michelle Obama, an intimate memoir that chronicles her journey from the South Side of Chicago to the White House, inspiring millions along the way. #Memoir #EmpoweringReads",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Adrianna",
          lastName: "Willis",
          username: "Adrianna",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736667/avatar6_eke8go.jpg",
        },
        {
          _id: uuid(),
          firstName: "Carl",
          lastName: "Sandford",
          username: "Carl",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736519/avatar1_krl9te.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Nancy",
    createdAt: "2023-04-15T07:00:00",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "📚🍫 'Like Water for Chocolate' by Laura Esquivel is a delectable blend of romance and magical realism, where passion and culinary delights intertwine in a story that touches the soul. #MagicalRealism #BookishDelights",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Rita",
          lastName: "White",
          username: "Rita",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
        {
          _id: uuid(),
          firstName: "Nancy",
          lastName: "Ellison",
          username: "Nancy",
          avatarUrl:
            "https://res.cloudinary.com/dfvuon2wq/image/upload/v1690736615/avatar2_x7ushm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "Dan",
    createdAt: "2023-05-25T07:00:00",
    updatedAt: formatDate(),
  },
];
