import styled from "styled-components";
import { IAppearenceBorderStack } from "@ptypes/design/IAppearenceBorderStack";
import { tokensBorderStack } from "./tokens";

interface IStyledFlex {
  $background: IAppearenceBorderStack;
  $border: IAppearenceBorderStack;
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
  $minHeight?: string;
  $maxHeight?: string;
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
    theme?.borderStack?.[$background].background?.color ??
    tokensBorderStack[$background].background.color};
  border: ${({ $border, theme }) =>
    `1px solid ${theme?.borderStack?.[$border].border?.color ?? tokensBorderStack[$border].border.color}`};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-sizing: ${({ $boxSizing }) => $boxSizing};
  box-shadow: ${({ $boxShadow, theme }) =>
    $boxShadow &&
    `${$boxShadow} ${theme?.borderStack?.dark.border?.color ?? tokensBorderStack.dark.border.color}`};
  overflow-y: ${({ $overflowY }) => $overflowY};
  min-height: ${({ $minHeight }) => $minHeight};
  max-height: ${({ $maxHeight }) => $maxHeight};
  overflow-x: ${({ $overflowY }) => $overflowY && "hidden"};
`;
export { StyledBorderFlex };
