import styled from "styled-components";
import { tokens } from "./tokens";
import { IBackground } from "@ptypes/design/IBackground";
import { IBorder } from "@ptypes/design/IBorder";

interface IStyledFlex {
  $background: IBackground;
  $border: IBorder;
  $justifyContent?: string;
  $alignItems?: string;
  $alignContent?: string;
  $direction?: string;
  $wrap?: string;
  $height?: string;
  $width?: string;
  $gap?: string;
  $margin?: string;
  $padding?: string;
  $borderRadius?: string;
  $boxSizing?: string;
  $boxShadow?: string;
  $overflowY?: string;
}

const StyledBorderFlex = styled.div<IStyledFlex>`
  display: flex;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  align-items: ${({ $alignItems }) => $alignItems};
  align-content: ${({ $alignContent }) => $alignContent};
  flex-direction: ${({ $direction }) => $direction};
  flex-wrap: ${({ $wrap }) => $wrap};
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};
  gap: ${({ $gap }) => $gap};
  margin: ${({ $margin }) => $margin};
  padding: ${({ $padding }) => $padding};
  background: ${({ $background, theme }) =>
    theme?.borderStack?.background?.[$background].color ??
    tokens.background[$background].color};
  border: ${({ $border, theme }) =>
    `1px solid ${theme?.borderStack?.border?.[$border].color ?? tokens.border[$border].color}`};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-sizing: ${({ $boxSizing }) => $boxSizing};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  overflow-y: ${({ $overflowY }) => $overflowY};
`;
export { StyledBorderFlex };
