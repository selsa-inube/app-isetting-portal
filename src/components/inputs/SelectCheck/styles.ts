import styled from "styled-components";
import { inube } from "@inubekit/foundations";

import { ISelectcheckProps } from ".";

interface IStyledInputContainer {
  disabled: ISelectcheckProps["disabled"];
  $focused: boolean;
  $status: ISelectcheckProps["status"];
  $readonly: ISelectcheckProps["readonly"];
  onClick: ISelectcheckProps["onClick"];
}

const sizeOptions = {
  compact: {
    height: "40px",
  },
  wide: {
    height: "48px",
  },
};

interface IStyledInput {
  $focused: boolean;
  $size: ISelectcheckProps["size"];
  $status: ISelectcheckProps["status"];
  $fullwidth: ISelectcheckProps["fullwidth"];
  $required: ISelectcheckProps["required"];
  onClick?: ISelectcheckProps["onClick"];
  onFocus: ISelectcheckProps["onFocus"];
  onBlur?: ISelectcheckProps["onBlur"];
  onChange?: ISelectcheckProps["onChange"];
}

interface IStyledContainer {
  disabled: ISelectcheckProps["disabled"];
  $fullwidth: ISelectcheckProps["fullwidth"];
}

export const StyledContainer = styled.div<IStyledContainer>`
  position: relative;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "300px")};
`;

export const StyledInputContainer = styled.div<IStyledInputContainer>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  background-color: ${({ theme, $readonly }) =>
    $readonly &&
    (theme?.color?.surface?.light?.clear || inube.palette.neutral.N0)};
  border-color: ${({ theme, disabled, $readonly, $status, $focused }) => {
    if (disabled) {
      return (
        (theme?.color?.text?.dark?.disabled || inube.palette.neutral.N20) +
        "; pointer-events: none; opacity: 0.5;"
      );
    }
    if ($focused && !$readonly) {
      return (
        theme?.color?.text?.primary?.hover || inube.palette.blue.B300
      );
    }
    if ($status === "invalid" && !$readonly) {
      return (
        theme?.color?.text?.error?.regular || inube.palette.red.R400
      );
    }
    return (
      theme?.color?.stroke?.divider?.regular ||
      inube.palette.neutral.N40
    );
  }};

  opacity: ${({ disabled }) => (disabled ? "0.5" : "none")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const StyledInput = styled.input<IStyledInput>`
  outline: none;
  border-radius: 8px;
  padding-right: ${({ theme }) => theme?.spacing?.s150 || '12px'};
  padding-left: ${({ theme }) => theme?.spacing?.s200 || "16px"};
  border-style: none;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.size};
  font-weight: ${({ theme }) =>
    theme?.typography?.body?.large?.font || "400"}; 
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.tracking};
  color: ${({ theme, disabled }) => {
    if (disabled) {
      return (
        theme?.color?.text?.dark?.disabled || inube.palette.neutral.N20
      );
    }
    return theme?.color?.text?.dark?.regular || inube.palette.neutral.N900;
  }};
  background-color: ${({ theme }) =>
    theme?.color?.surface?.light?.clear || inube.palette.neutral.N0};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ $size }) => sizeOptions[$size!]};

  ::placeholder {
    color: ${({ theme }) =>
      theme?.color?.text?.dark?.disabled || inube.palette.neutral.N20};
  }

  &:focus {
    outline: none;
    border-width: 2px;
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;
