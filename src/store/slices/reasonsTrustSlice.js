import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reasonsTrustList: [
    {
      icon: "./images/icons/safety.svg",
      title: "secure payments",
      description: "Fully secured SSL technology for safer Checkout option.",
    },
    {
      icon: "./images/icons/cube.svg",
      title: "free shipping",
      description:
        "Fully safe and fast delivery as soon as possible without any cost.",
    },
    {
      icon: "./images/icons/lightning.svg",
      title: "100% Satisfactions",
      description:
        "We're responsible for provide fully satisfied products to our customers.",
    },
  ],
};

const reasonsTrustSlice = createSlice({ name: "reasonsTrusts", initialState });

export default reasonsTrustSlice.reducer;
