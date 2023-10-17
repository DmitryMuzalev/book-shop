import { socialNetwork } from "./socialNetwork";

const author = {
  name: "Dr. John Abraham",
  photo: "./images/photos/avatar_about_author_2.jpg",
  bio: "An author, a website or magazine, have a an organization that wants to recommend books, or even just a book-lover with anInstagram feed, you can sign up to be an affiliate, start your own shop, and be rewarded for your advocacy of books.",
  aboutMe:
    "We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading.",
  info: {
    country: "united kingdom",
    language: "english",
    genre: "historical",
    "first publication": 1991,
  },
  socialNetwork: socialNetwork,
  achievements: [
    {
      id: 1,
      title: "great author awards - 2006",
      description:
        "Won a best author of the year for my second & fourth book about the science fiction.",
    },
    {
      id: 2,
      title: "highest rating for a book - 2008",
      description:
        "All of my books are rated highly from the book publisher and also from the readers.",
    },
    {
      id: 3,
      title: "highest paid author- 2014",
      description:
        "Highest paid author for the decade based on the number of selling books and novels.",
    },
  ],
};

export { author };
