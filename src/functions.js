const { v4: uuidv4 } = require("uuid");

const dateFormat = (date) => {
  const USDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return USDate.format(date);
};

const onSubmitForm = async (data, cb) => {
  if (data) {
    cb({ id: uuidv4(), ...data })
      .unwrap()
      .catch((error) => console.error("rejected", error));
  }
};

export { dateFormat, onSubmitForm };
