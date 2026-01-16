import { options } from "@config/options/optionMain";

const normalizeOptionsByPublicCode = (publicCode: string) =>
  options.find((data) => data.publicCode === publicCode);

export { normalizeOptionsByPublicCode };
