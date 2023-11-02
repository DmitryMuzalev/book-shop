import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./slices/appSlice";
import authorReducer from "./slices/authorSlice";
import faqReducer from "./slices/faqSlice";
import learnReducer from "./slices/learnSlice";
import articlesReducer from "./slices/articlesSlice";
import contactsReducer from "./slices/contactsSlice";
import partnersReducer from "./slices/partnersSlice";
import testimonialReducer from "./slices/testimonialsSlice";
import booksReducer from "./slices/booksSlice";
import reasonsTrustReducer from "./slices/reasonsTrustSlice";
import { dbApi } from "./api/dbApi";

export default configureStore({
  reducer: {
    app: appReducer,
    author: authorReducer,
    faq: faqReducer,
    learn: learnReducer,
    articles: articlesReducer,
    contacts: contactsReducer,
    partners: partnersReducer,
    testimonial: testimonialReducer,
    books: booksReducer,
    reasonsTrust: reasonsTrustReducer,
    [dbApi.reducerPath]: dbApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(dbApi.middleware),
});
