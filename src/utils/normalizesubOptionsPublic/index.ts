import { subOptions } from "@config/options/subOptions";

const normalizeSubOptionsByPublicCode = (
  publicCode: string,
  publicCodeSubOption: string
) =>
  subOptions.find(
    (data) =>
      data.publicCode === publicCode &&
      data.publicCodeOption === publicCodeSubOption
  );

  export { normalizeSubOptionsByPublicCode };