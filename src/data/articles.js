const articles = [
  {
    id: 1,
    banner: "./images/articles/article_1.jfif",
    title: "Significant reading has more info number",
    description:
      "Override the digital divide with additional clickthroughs from DevOps for real-time schemas.",
    date: new Date("10.06.23"),
    category: "classics",
  },
  {
    id: 2,
    banner: "./images/articles/article_2.jfif",
    title: "Many variations of pass majority have suffered",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.",
    date: new Date("09.12.23"),
    category: "detective & mystery",
  },
  {
    id: 3,
    banner: "./images/articles/article_3.jfif",
    title: "Words which don’t look even slightly believable",
    description:
      "Podcasting operational change management inside of workflows to establish a framework.",
    date: new Date("08.25.23"),
    category: "ideology",
  },
  {
    id: 4,
    banner: "./images/articles/article_4.jfif",
    title: "Effective and best blogs for book lovers",
    description:
      "Taking seamless key performance indicators offline to maximize the long book reading tail.",
    date: new Date("07.15.23"),
    category: "classics",
  },
  {
    id: 5,
    banner: "./images/articles/article_5.jfif",
    title: "Books changed my ideology about life",
    description:
      "Dramatically visualize customer-directed convergence without revolutionary ROI.",
    date: new Date("06.08.23"),
    category: "ideology",
  },
  {
    id: 6,
    banner: "./images/articles/article_6.jfif",
    title: "The principles of writing and the reading",
    description:
      "Dramatically maintain clicks-and-mortar solutions without the main functional solutions.",
    date: new Date("05.17.23"),
    category: "ideology",
  },
  {
    id: 7,
    banner: "./images/articles/article_7.jpg",
    title: "The energy efficiency offers hydrotherapy or swim",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, est laboriosam at officiis ipsum labore.",
    date: new Date("04.19.23"),
    category: "detective & mystery",
  },
  {
    id: 8,
    banner: "./images/articles/article_8.jfif",
    title: "Release of Letraset sheets tools containing  passages",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad provident magni consequuntur sequi consequatur odio. Fugiat, blanditiis?",
    date: new Date("03.06.23"),
    category: "detective & mystery",
  },
  {
    id: 9,
    banner: "./images/articles/article_9.jfif",
    title: "Lorem ipsum dolor sit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nobis ipsa veniam repellendus, maiores voluptas reprehenderit assumenda?",
    date: new Date("02.13.23"),
    category: "detective & mystery",
  },
];

const dateFormat = (date) => {
  const USDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return USDate.format(date);
};

export { articles, dateFormat };
