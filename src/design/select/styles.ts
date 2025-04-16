import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";
import { UseInputColor } from "@hooks/design/useSelectCheck";
import { ISelectCheck } from ".";

interface IStyledInputContainer {
  disabled: ISelectCheck["disabled"];
  $focused: boolean;
  $status: ISelectCheck["status"];
  $readonly: ISelectCheck["readonly"];
  onClick: ISelectCheck["onClick"];
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
  $size: ISelectCheck["size"];
  $status: ISelectCheck["status"];
  $fullwidth: ISelectCheck["fullwidth"];
  $required: ISelectCheck["required"];
  onClick?: ISelectCheck["onClick"];
  onFocus: ISelectCheck["onFocus"];
  onBlur?: ISelectCheck["onBlur"];
  onChange?: ISelectCheck["onChange"];
}

interface IStyledContainer {
  disabled: ISelectCheck["disabled"];
  $fullwidth: ISelectCheck["fullwidth"];
}

const StyledContainer = styled.div<IStyledContainer>`
  position: relative;
  width: 100%;
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

const StyledInputContainer = styled.div<IStyledInputContainer>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${basic.spacing.s8};
  user-select: none;
  border-width: 1px;
  border: 1px solid ${inube.palette.neutral.N50};
  background-color: ${({ theme, $readonly }) =>
    $readonly && (theme?.palette?.neutral?.N0 || inube.palette.neutral.N0)};
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "none")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
const StyledInput = styled.input<IStyledInput>`
  outline: none;
  border-radius: ${basic.spacing.s8};
  padding-right: ${basic.spacing.s12};
  padding-left: ${basic.spacing.s16};
  border-style: none;
  font-family: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme?.typography?.body?.large?.font || inube.typography.body.large.size};
  line-height: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.lineHeight};
  letter-spacing: ${({ theme }) =>
    theme?.typography?.body?.large?.font ||
    inube.typography.body.large.tracking};
  color: ${({ disabled }) => UseInputColor(disabled)};
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N0 || inube.palette.neutral.N0};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ $size }) => sizeOptions[$size!]};

  ::placeholder {
    color: ${({ theme }) =>
      theme?.palette?.neutral?.N20 || inube.palette.neutral.N20};
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

export { StyledContainer, StyledInputContainer, StyledInput };
