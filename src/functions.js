const dateFormat = (date) => {
  const USDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return USDate.format(date);
};

export { dateFormat };
