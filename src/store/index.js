import { configureStore } from "@reduxjs/toolkit";

import authorReducer from "./slices/authorSlice";
import faqReducer from "./slices/faqSlice";
import learnReducer from "./slices/learnSlice";
import articlesReducer from "./slices/articlesSlice";
import contactsReducer from "./slices/contactsSlice";
import partnersReducer from "./slices/partnersSlice";
import testimonialReducer from "./slices/testimonialsSlice";
import booksReducer from "./slices/booksSlice";

export default configureStore({
  reducer: {
    author: authorReducer,
    faq: faqReducer,
    learn: learnReducer,
    articles: articlesReducer,
    contacts: contactsReducer,
    partners: partnersReducer,
    testimonial: testimonialReducer,
    books: booksReducer,
  },
});
