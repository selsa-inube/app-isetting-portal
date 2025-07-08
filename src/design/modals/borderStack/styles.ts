import styled from "styled-components";
import { tokensBorderStack } from "./tokens";
import {IAppearenceBorderStack} from "@ptypes/design/IAppearenceBorderStack";  

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
    theme?.borderStack?.[$background].background ??
    tokensBorderStack[$background].background};
  border: ${({ $border, theme }) =>
    `1px solid ${theme?.borderStack?.[$border].border ?? tokensBorderStack[$border].border}`};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-sizing: ${({ $boxSizing }) => $boxSizing};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  overflow-y: ${({ $overflowY }) => $overflowY};
`;
export { StyledBorderFlex };
