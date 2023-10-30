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
      rating: 4.5,
    },
    {
      id: 2,
      author: "Christina Louis",
      avatar: "./images/testimonials/Christina Louis.jpg",
      title: "creative writing skill",
      message:
        "Sent an email after to books arrived to ask about the author & I received a reply.",
      rating: 4.2,
    },
    {
      id: 3,
      author: "James Anderson",
      avatar: "./images/testimonials/James Anderson.jpg",
      title: "perfect response author",
      message:
        "I had a question about the book and the author response was great & comfort.",
      rating: 4.9,
    },
  ],
  overallRating: 4.4,
};
const testimonialsSlice = createSlice({ name: "testimonials", initialState });

/* const test = +(
  testimonialsList.reduce((acc, t) => acc + t.rating, 0) /
  testimonialsList.length
).toFixed(1); */

export default testimonialsSlice.reducer;
