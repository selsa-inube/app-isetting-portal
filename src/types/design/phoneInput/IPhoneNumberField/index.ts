import { CountryOption } from "../ICountryOption";

interface IPhoneNumberField {
  id: string;
  label?: string;
  placeholder?: string;
  value?: string;
  countryCode?: string;
  showDialCode?: boolean;
  onChange: (e: { target: { name: string; value: string } }) => void;
  onCountryChange?: (country: CountryOption) => void;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  error?: string;
  fullwidth?: boolean;
  size?: "compact" | "wide";
  countries?: CountryOption[];
  searchPlaceholder?: string;
  noResultsText?: string;
  selectCountryAriaLabel?: string;
  minDigits?: number;
}

export type { IPhoneNumberField };
