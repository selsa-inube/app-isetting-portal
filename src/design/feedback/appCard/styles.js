import styled from "styled-components";
import { Link } from "react-router-dom";
import { basic } from "@design/tokens";
import { appCardTokens } from "./tokens";

const StyledAppCard = styled(Link)`
  box-sizing: border-box;
  padding: ${({ $isMobile }) =>
    $isMobile
      ? `${basic.spacing.s200}`
      : `${`${basic.spacing.s150}  ${basic.spacing.s300}`}`};
  height: 130px;
  width: 305px;
  gap: ${basic.spacing.s14};
  display: flex;
  flex-direction: column;

  border-radius: ${basic.spacing.s8};
  text-decoration: none;
  color: ${({ theme }) =>
    theme?.appCard?.background?.color ?? appCardTokens.background.color};
  border: 1px solid
    ${({ theme }) =>
      theme?.appCard?.border?.color ?? appCardTokens.border.color};
  box-shadow: 3px 3px 5px 1px
    ${({ theme }) =>
      theme?.appCard?.shadow?.color ?? appCardTokens.shadow.color};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) =>
      theme?.appCard?.hover?.color ?? appCardTokens.hover.color};
    background-color: ${({ theme }) =>
      theme?.appCard?.hover?.color ?? appCardTokens.hover.color};
    box-shadow: none;
  }
`;

export { StyledAppCard };
