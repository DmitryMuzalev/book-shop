import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  booksList: [
    {
      id: 1,
      authorID: 1,
      author: "Dr. John Abraham",
      cover: "/images/books/book_1.svg",
      title: "atomic one’s",
      annotationMin:
        "As the book contains theoretical content as well as solved questions.",
      annotation:
        "As the book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.",
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
        "Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace.",

      "additional info":
        "This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.",
    },
    {
      id: 2,
      authorID: 1,
      author: "Dr. John Abraham",
      cover: "/images/books/book_1.svg",
      title: "atomic one’s - audio",
      annotationMin:
        "As the book contains theoretical content as well as solved questions.",
      annotation:
        "The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.",
      price: 68.97,
      format: "audio",

      details: {
        isbn10: 98547152365,
        language: "French",
        paperback: 180,
        publisher: "Discovery Book Palace",
        dimension: [20, 14, 4],
        length: 6,
        rating: 4.2,
        ratingCounter: 254,
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
        "Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace.",

      "additional info":
        "This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.",
    },
    {
      id: 3,
      authorID: 1,
      author: "Dr. John Abraham",
      cover: "/images/books/book_1.svg",
      title: "atomic one’s - CD",
      annotationMin:
        "As the book contains theoretical content as well as solved questions.",
      annotation:
        "The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.",
      price: 88.97,
      format: "audio CD + printed book",

      details: {
        isbn10: 98547152365,
        language: "French",
        paperback: 175,
        publisher: "Oxford Book Palace",
        dimension: [20, 18, 4],
        length: 9,
        rating: 4.7,
        ratingCounter: 117,
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
        "Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace.",

      "additional info":
        "This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.",
    },
    {
      id: 4,
      authorID: 1,
      author: "Dr. John Abraham",
      cover: "/images/books/book_2.svg",
      title: "the dark light",
      annotationMin:
        "As the book contains theoretical content as well as solved questions.",
      annotation:
        "The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.",
      price: 25.84,
      format: "printed book",

      details: {
        isbn10: 98547152367,
        language: "English",
        paperback: 354,
        publisher: "Blue Berry Book House",
        dimension: [18, 12, 5],
        length: 12,
        rating: 4.1,
        ratingCounter: 455,
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
        "Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace.",

      "additional info":
        "This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.",
    },
    {
      id: 5,
      authorID: 1,
      author: "Dr. John Abraham",
      cover: "/images/books/book_2.svg",
      title: "the dark light - audio",
      annotationMin:
        "As the book contains theoretical content as well as solved questions.",
      annotation:
        "The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.",
      price: 75.97,
      format: "audio",

      details: {
        isbn10: 98547125417,
        language: "English",
        paperback: 190,
        publisher: "Discovery Book Palace",
        dimension: [20, 28, 4],
        length: 9,
        rating: 4.7,
        ratingCounter: 273,
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
        "Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace.",

      "additional info":
        "This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.",
    },
    {
      id: 6,
      authorID: 1,
      author: "Dr. John Abraham",
      cover: "/images/books/book_2.svg",
      title: "the dark light - CD",
      annotationMin:
        "As the book contains theoretical content as well as solved questions.",
      annotation:
        "The book contains ample theoretical content as well as a number of solved questions, it for sure will help aspirants succeed in learning and writing English proficiently.",
      price: 102.97,
      format: "audio CD + printed book",

      details: {
        isbn10: 98541152365,
        language: "English",
        paperback: 175,
        publisher: "The Hilton Book",
        dimension: [25, 14, 5],
        length: 10,
        rating: 4.3,
        ratingCounter: 181,
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
        "Nowadays English language section is asked in almost all competitive and recruitment examinations like SSC, Banking, CDS, State Level PSCs, etc. Otherwise creatively too, being proficient in English is necessary in this fast-modernizing world of disruptive innovation via the workplace.",

      "additional info":
        "This book has been designed to act as a comprehensive guide to learning English Grammar & Composition. The present book for English Grammar is creatively divided into Articles, Noun, Pronoun, Adverbs, Participle, Gerund, Preposition, Conjunctions disruptive innovation via the workplace.",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
});

export default booksSlice.reducer;
