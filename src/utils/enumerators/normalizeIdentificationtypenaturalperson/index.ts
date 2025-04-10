import { nameIdentificationtypenaturalperson } from "@config/users/nameIdentificationtypenaturalperson";

const normalizeIdentification = (code: string) =>
  nameIdentificationtypenaturalperson.find((element) => element.code === code);

export { normalizeIdentification };
