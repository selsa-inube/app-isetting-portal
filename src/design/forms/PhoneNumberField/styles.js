import styled from "styled-components";
import { tokensWithReference } from "@design/tokens/tokensWithReference";
import { phoneFieldTokens } from "./tokens";
import { basic } from "@design/tokens";
const fieldHeights = {
  compact: "40px",
  wide: "3rem",
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "")};
  min-width: 0;
`;

const StyledLabelRow = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
  color: ${({ $disabled, theme }) =>
    $disabled
      ? (theme?.phoneField?.label?.color?.disabled ??
        phoneFieldTokens.label.color.disabled)
      : (theme?.phoneField?.label?.color?.regular ??
        phoneFieldTokens.label.color.regular)};
`;

const StyledFieldContainer = styled.div`
  display: flex;
  align-items: stretch;
  border: 1px solid
    ${({ $invalid, theme }) =>
      $invalid
        ? (theme?.phoneField?.field?.border?.color?.invalid ??
          phoneFieldTokens.field.border.color.invalid)
        : (theme?.phoneField?.field?.border?.color?.regular ??
          phoneFieldTokens.field.border.color.regular)};
  background: ${({ $disabled, theme }) =>
    $disabled
      ? (theme?.phoneField?.field?.background?.color?.disabled ??
        phoneFieldTokens.field.background.color.disabled)
      : (theme?.phoneField?.field?.background?.color?.regular ??
        phoneFieldTokens.field.background.color.regular)};
  border-radius: 8px;
  height: ${({ $size }) => fieldHeights[$size]};
  overflow: hidden;
  transition: border-color 0.15s ease;
  flex: 1 1 auto;
  min-width: 0;

  &:focus-within {
    border-color: ${({ theme }) =>
      theme?.phoneField?.field?.border?.color?.focus ??
      phoneFieldTokens.field.border.color.focus};
  }
`;

const StyledCountryButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${basic.spacing.s50};
  background: ${({ theme }) =>
    theme?.phoneField?.countryButton?.background?.color?.regular ??
    phoneFieldTokens.countryButton.background.color.regular};
  border: none;
  padding: 0 ${basic.spacing.s100};
  cursor: pointer;
  font: inherit;
  color: ${({ theme }) =>
    theme?.phoneField?.countryButton?.content?.color?.regular ??
    phoneFieldTokens.countryButton.content.color.regular};
  outline: none;
  border-right: 1px solid
    ${({ theme }) =>
      theme?.phoneField?.countryButton?.border?.color?.regular ??
      phoneFieldTokens.countryButton.border.color.regular};

  ${({ $open, theme }) =>
    $open &&
    `background: ${theme?.phoneField?.countryButton?.background?.color?.hover ?? phoneFieldTokens.countryButton.background.color.hover};`}

  &:hover {
    background: ${({ theme }) =>
      theme?.phoneField?.countryButton?.background?.color?.hover ??
      phoneFieldTokens.countryButton.background.color.hover};
  }
`;

const StyledNumberInput = styled.input`
  flex: 1 1 auto;
  width: 100%;
  min-width: 0;
  border: none;
  outline: none;
  padding: 0 ${basic.spacing.s150};
  font-size: 0.95rem;
  background: transparent;

  &::placeholder {
    color: ${({ theme }) =>
      theme?.phoneField?.numberInput?.placeholder?.color?.regular ??
      phoneFieldTokens.numberInput.placeholder.color.regular};
  }
`;

const StyledDropdown = styled.div`
  position: absolute;
  z-index: 2;
  margin-top: 4px;
  background: ${({ theme }) =>
    theme?.phoneField?.dropdown?.background?.color ??
    phoneFieldTokens.dropdown.background.color};
  border: 1px solid
    ${({ theme }) =>
      theme?.phoneField?.dropdown?.border?.color ??
      phoneFieldTokens.dropdown.border.color};
  box-shadow: ${({ theme }) =>
    `0 4px 8px ${theme?.phoneField?.dropdown?.shadow?.color ?? phoneFieldTokens.dropdown.shadow.color}`};
  border-radius: 8px;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const StyledSearchBox = styled.input`
  border: none;
  border-bottom: ${({ theme }) =>
    `1px solid ${theme?.phoneField?.border?.color?.regular ?? phoneFieldTokens.border.color}`};
  padding: 8px 12px;
  outline: none;
  font-size: 0.85rem;
`;

const StyledCountryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  flex: 1;
`;

const StyledCountryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.85rem;
  background: ${({ $active, theme }) =>
    $active
      ? (theme?.phoneField?.countryItem?.background?.active ??
        phoneFieldTokens.countryItem.background.active)
      : "transparent"};

  &:hover {
    background: ${({ theme }) =>
      theme?.phoneField?.countryItem?.background?.hover ??
      phoneFieldTokens.countryItem.background.hover};
  }
`;

const StyledHelperText = styled.span`
  margin-top: 4px;
  font-size: 0.75rem;
  color: ${({ $error, theme }) =>
    $error
      ? (theme?.phoneField?.helperText?.color?.error ??
        phoneFieldTokens.helperText.color.error)
      : (theme?.phoneField?.helperText?.color?.regular ??
        phoneFieldTokens.helperText.color.regular)};
`;

const StyledErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
`;

const StyledWarningIcon = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
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
};

const StyledFlag = styled.span`
  display: inline-flex;
  width: ${({ $size = 20 }) => $size}px;
  height: ${({ $size = 20 }) => $size}px;
  border-radius: ${({ $round = true }) => ($round ? "50%" : "0")};
  overflow: hidden;
  align-items: center;
  justify-content: center;
  & > svg,
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledDial = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;

const StyledCountryName = styled.span`
  flex: 1;
`;

const StyledCountryCode = styled.span`
  color: ${({ theme }) =>
    theme?.phoneField?.countryItem?.code?.color ??
    phoneFieldTokens.countryItem.code.color};
  font-size: 0.75rem;
`;

export { StyledDial, StyledCountryName, StyledCountryCode, StyledFlag };
