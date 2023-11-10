import { parsePhoneNumberFromString } from "libphonenumber-js";

import { v4 as uuidv4 } from "uuid";

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

const normalizePhoneNumber = (number) => {
  const phoneNumber = parsePhoneNumberFromString(number);
  if (!phoneNumber) {
    return number;
  }
  return phoneNumber.formatInternational();
};

export { dateFormat, onSubmitForm, normalizePhoneNumber };
