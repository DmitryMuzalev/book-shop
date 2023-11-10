import { isValidPhoneNumber } from "libphonenumber-js";
const validationPhoneNumber = (number) => {
  return isValidPhoneNumber(number) || "Incorrect phone number! ";
};

export { validationPhoneNumber };
