import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: {
    label: "24A Kingston St, Las Vegas NC 28202, USA.",
    url: "#!",
  },
  mail: {
    label: "support@pages.com",
    url: "mailto: support@pages.com",
  },
  phone: {
    label: "(+22) 123 - 4567 - 900",
    url: "tel:+221234567900",
  },
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
    {
      id: 4,
      name: "instagram",
      url: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
});

export default contactsSlice.reducer;
