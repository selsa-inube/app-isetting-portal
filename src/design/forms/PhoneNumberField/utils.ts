import type { CountryOption } from "./types";
import { countries } from "./countries";

const dialCodeMap: Record<string, string> = (countries as CountryOption[]).reduce(
  (map, country) => {
    map[country.code] = country.dialCode;
    return map;
  },
  {} as Record<string, string>,
);

const getDialCodeByCountryCode = (code: string): string => dialCodeMap[code] ?? "";

export { dialCodeMap, getDialCodeByCountryCode };
