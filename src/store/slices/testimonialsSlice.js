import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testimonialsList: [
    {
      id: 1,
      author: "Martin Philips",
      avatar: "./images/testimonials/Martin Philips.jpg",
      title: "great books collections",
      message:
        "I was searching this book for many years and I was happy that I could find it here.",
      rating: "./images/other/rating.svg",
    },
    {
      id: 2,
      author: "Christina Louis",
      avatar: "./images/testimonials/Christina Louis.jpg",
      title: "creative writing skill",
      message:
        "Sent an email after to books arrived to ask about the author & I received a reply.",
      rating: "./images/other/rating.svg",
    },
    {
      id: 3,
      author: "James Anderson",
      avatar: "./images/testimonials/James Anderson.jpg",
      title: "perfect response author",
      message:
        "I had a question about the book and the author response was great & comfort.",
      rating: "./images/other/rating.svg",
    },
  ],
};
const testimonialsSlice = createSlice({ name: "testimonials", initialState });

export default testimonialsSlice.reducer;
