import { string, boolean, date } from "yup";

import { validationMessages } from "./validationMessages";

const validationRules = {
  name: string().max(50, validationMessages.maxCharacters(50)),
  string: string().max(100, validationMessages.maxCharacters(100)),
  boolean: boolean(),
  date: date(),
};

export { validationRules };
