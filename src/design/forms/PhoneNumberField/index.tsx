import { useState } from "react";

import { PhoneNumberFieldUI } from "./interface";
import { countries as defaultCountries } from "./countries";
import { CountryOption } from "@ptypes/design/phoneInput/ICountryOption";
import { IPhoneNumberField } from "@ptypes/design/phoneInput/IPhoneNumberField";

const PhoneNumberField = (props: IPhoneNumberField) => {
  const {
    value: externalValue,
    onChange,
    countryCode = "CO",
    onCountryChange,
    countries,
    ...rest
  } = props;

  const availableCountries =
    countries && countries.length > 0 ? countries : defaultCountries;

  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    () =>
      availableCountries.find((country) => country.code === countryCode) ??
      availableCountries[0]
  );

  const handleSelectedCountryChange = (newCountry: CountryOption) => {
    setSelectedCountry(newCountry);
    onCountryChange?.(newCountry);
  };

  return (
    <PhoneNumberFieldUI
      {...rest}
      value={externalValue}
      countryCode={selectedCountry.code}
      onChange={onChange}
      onCountryChange={handleSelectedCountryChange}
      countries={availableCountries}
    />
  );
};

export { PhoneNumberField };
