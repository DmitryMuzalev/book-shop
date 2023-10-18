import { createSlice } from "@reduxjs/toolkit";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const initialState = {
  id: 1,
  name: "Dr. John Abraham",
  photos: [
    "./images/photos/avatar_about_author.jpg",
    "./images/photos/avatar_about_author_2.jpg",
    "./images/photos/avatar_about_author_3.jpg",
  ],
  bio: "An author, a website or magazine, have a an organization that wants to recommend books, or even just a book-lover with anInstagram feed, you can sign up to be an affiliate, start your own shop, and be rewarded for your advocacy of books.",
  aboutMe:
    "We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading.",

  books: [
    {
      id: 1,
      authorID: 1,
      author: "Dr. John Abraham",
      cover: "./images/books/book_1.svg",
      title: "atomic one’s",
      annotation:
        "As the book contains theoretical content as well as solved questions.",
      price: 13.84,
      format: "printed book",
      details: {
        isbn10: 98547152365,
        language: "English",
        paperback: 254,
        publisher: "The Hilton Book",
        dimension: [20, 14, 4],
        length: 10,
        rating: 4.4,
        ratingCounter: 305,
      },
      chapters: [
        {
          number: 1,
          title: "Chapter-1 Get started intro",
          description:
            "You can double your knowledge by reading this ever needed book that can last a lifetime.",
          details: {
            pages: "106pages",
            length: "2 Hours",
          },
        },
        {
          number: 2,
          title: "Chapter-2 The Roman culture",
          description:
            "It will help to improve your life career with the perfect and needed knowledge about your life.",
          details: {
            pages: "180pages",
            length: "3 Hours",
          },
        },
        {
          number: 3,
          title: "Chapter-3 How They Servived",
          description:
            "It will help to improve your life career with the perfect and needed knowledge about your life.",
          details: {
            pages: "250pages",
            length: "4 Hours",
          },
        },
        {
          number: 4,
          title: "Chapter-4 The End Of Romans",
          description:
            "Promote your book via Pages shop to support your writing & reading career.",
          details: {
            pages: "175pages",
            length: "3 Hours",
          },
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illo veniam velit nulla eveniet mollitia.",
      "additional info":
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci, voluptatum earum repudiandae in, architecto delectus ad hic, consectetur modi rem asperiores incidunt ratione dolores voluptas. Dicta tempora possimus tenetur?",
      "rating counter": 315,
    },
    {
      id: 2,
      authorID: 1,
      author: "Dr. John Abraham",
      cover: "./images/books/book_2.svg",
      title: "atomic one’s",
      annotation:
        "As the book contains theoretical content as well as solved questions.",
      price: 13.84,
      format: "printed book",
      details: {
        isbn10: 98547152365,
        language: "English",
        paperback: 254,
        publisher: "The Hilton Book",
        dimension: [20, 14, 4],
        length: 3,
        rating: 4.4,
      },
      chapters: [
        {
          number: 1,
          title: "Chapter-1 Get started intro",
          description:
            "You can double your knowledge by reading this ever needed book that can last a lifetime.",
          details: {
            pages: "106pages",
            length: "2 Hours",
          },
        },
        {
          number: 2,
          title: "Chapter-2 The Roman culture",
          description:
            "It will help to improve your life career with the perfect and needed knowledge about your life.",
          details: {
            pages: "180pages",
            length: "3 Hours",
          },
        },
        {
          number: 3,
          title: "Chapter-3 How They Servived",
          description:
            "It will help to improve your life career with the perfect and needed knowledge about your life.",
          details: {
            pages: "250pages",
            length: "4 Hours",
          },
        },
        {
          number: 4,
          title: "Chapter-4 The End Of Romans",
          description:
            "Promote your book via Pages shop to support your writing & reading career.",
          details: {
            pages: "175pages",
            length: "3 Hours",
          },
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illo veniam velit nulla eveniet mollitia.",
      "additional info":
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci, voluptatum earum repudiandae in, architecto delectus ad hic, consectetur modi rem asperiores incidunt ratione dolores voluptas. Dicta tempora possimus tenetur?",
      "rating counter": 315,
    },
  ],

  details: {
    rating: 4.5,
    quantityBooks: 2,
    awards: 4,
  },

  info: {
    country: "united kingdom",
    language: "english",
    genre: "historical",
    "first publication": 1991,
  },

  contacts: {
    email: "johnabraham@gmail.com",
    phone: "(+2) 123 545 9000",
    qrCode: "./images/other/qr_code.svg",
    socialNetworks: [
      {
        id: 1,
        name: "facebook",
        url: "https://www.facebook.com/",
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: "twitter",
        url: "https://twitter.com/",
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: "linkedin",
        url: "https://www.linkedin.com/",
        icon: <FaLinkedinIn />,
      },
    ],
  },

  awards: [
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

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
});

export default authorSlice.reducer;
