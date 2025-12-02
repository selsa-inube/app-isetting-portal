import { useState, useMemo, useRef, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Text } from "@inubekit/inubekit";
import { countries as defaultCountries } from "./countries";
import { PHONE_NUMBER_FIELD_TEXT } from "./constants";

import {
  StyledWrapper,
  StyledLabelRow,
  StyledFieldContainer,
  StyledCountryButton,
  StyledNumberInput,
  StyledDropdown,
  StyledSearchBox,
  StyledCountryList,
  StyledCountryItem,
  StyledHelperText,
  StyledErrorContainer,
  StyledWarningIcon,
  StyledFlag,
  StyledDial,
  StyledCountryName,
  StyledCountryCode,
} from "./styles";
import { phoneFieldTokens } from "./tokens";
import { CountryOption } from "@ptypes/design/phoneInput/ICountryOption";
import { IPhoneNumberField } from "@ptypes/design/phoneInput/IPhoneNumberField";

const sanitizePhoneValue = (input: string) =>
  input.replace(/[^0-9\s\-()]/g, "");

const PhoneNumberFieldUI = (props: IPhoneNumberField) => {
  const {
    id,
    label = PHONE_NUMBER_FIELD_TEXT.labelDefault,
    placeholder = PHONE_NUMBER_FIELD_TEXT.placeholderDefault,
    value = "",
    countryCode = "CO",
    showDialCode = true,
    onChange,
    onCountryChange,
    disabled,
    maxLength = 20,
    error,
    fullwidth,
    size = "compact",
    countries,
    searchPlaceholder = PHONE_NUMBER_FIELD_TEXT.searchPlaceholder,
    noResultsText = PHONE_NUMBER_FIELD_TEXT.noResultsText,
    selectCountryAriaLabel = PHONE_NUMBER_FIELD_TEXT.selectCountryAriaLabel,
  } = props;

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const availableCountries = countries?.length ? countries : defaultCountries;
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(
    () =>
      availableCountries.find((country) => country.code === countryCode) ??
      availableCountries[0]
  );
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const filteredCountries = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    if (!normalizedSearch) return availableCountries;
    return availableCountries.filter(
      (country) =>
        country.name.toLowerCase().includes(normalizedSearch) ||
        country.dialCode.replace("+", "").includes(normalizedSearch) ||
        country.code.toLowerCase() === normalizedSearch
    );
  }, [searchTerm, availableCountries]);

  const handleCountrySelect = (newCountry: CountryOption) => {
    setSelectedCountry(newCountry);
    onCountryChange?.(newCountry);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleGlobalMouseDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("mousedown", handleGlobalMouseDown);
    return () => window.removeEventListener("mousedown", handleGlobalMouseDown);
  }, []);

  return (
    <StyledWrapper $fullwidth={fullwidth}>
      {label && (
        <StyledLabelRow htmlFor={id} $disabled={disabled}>
          <Text type="label"> {label}</Text>
        </StyledLabelRow>
      )}
      <StyledFieldContainer
        $size={size}
        $invalid={!!error}
        $disabled={disabled}
      >
        <StyledCountryButton
          type="button"
          aria-label={selectCountryAriaLabel}
          onClick={() => !disabled && setIsDropdownOpen((current) => !current)}
          $size={size}
          $open={isDropdownOpen}
          disabled={disabled}
        >
          <StyledFlag>
            <ReactCountryFlag svg countryCode={selectedCountry.code} />
          </StyledFlag>
          {showDialCode && (
            <StyledDial>({selectedCountry.dialCode})</StyledDial>
          )}
          <MdKeyboardArrowDown size={18} />
        </StyledCountryButton>
        <StyledNumberInput
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={(e) =>
            onChange({
              target: {
                name: id,
                value: sanitizePhoneValue(e.target.value),
              },
            })
          }
          disabled={disabled}
          maxLength={maxLength}
          $size={size}
          autoComplete="tel"
          inputMode="tel"
        />
      </StyledFieldContainer>
      {isDropdownOpen && (
        <StyledDropdown>
          <StyledSearchBox
            placeholder={searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <StyledCountryList>
            {filteredCountries.map((country) => (
              <StyledCountryItem
                key={country.code}
                onClick={() => handleCountrySelect(country)}
                $active={country.code === selectedCountry.code}
              >
                <StyledFlag $size={18}>
                  <ReactCountryFlag svg countryCode={country.code} />
                </StyledFlag>
                <StyledCountryName>{country.name}</StyledCountryName>
                <StyledCountryCode>{country.dialCode}</StyledCountryCode>
              </StyledCountryItem>
            ))}
            {filteredCountries.length === 0 && (
              <StyledCountryItem $active={false}>
                <StyledCountryName>{noResultsText}</StyledCountryName>
              </StyledCountryItem>
            )}
          </StyledCountryList>
        </StyledDropdown>
      )}

      {error && (
        <StyledErrorContainer>
          <StyledWarningIcon>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1L11 10H1L6 1Z"
                stroke={phoneFieldTokens.helperText.color.error}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M6 4V6"
                stroke={phoneFieldTokens.helperText.color.error}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="6"
                cy="8.5"
                r="0.5"
                fill={phoneFieldTokens.helperText.color.error}
              />
            </svg>
          </StyledWarningIcon>
          <StyledHelperText $error>{error}</StyledHelperText>
        </StyledErrorContainer>
      )}
    </StyledWrapper>
  );
};

export { PhoneNumberFieldUI };
