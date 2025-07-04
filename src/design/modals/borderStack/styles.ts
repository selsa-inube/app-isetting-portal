import styled from "styled-components";

interface IStyledFlex {
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
  $background?: string;
  $border?: string;
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
    $background ?? theme.palette.neutral.N0};
  border: ${({ $border }) => `1px solid ${$border}`};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-sizing: ${({ $boxSizing }) => $boxSizing};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  overflow-y: ${({ $overflowY }) => $overflowY};
  min-height: ${({ $minHeight }) => $minHeight};
  max-height: ${({ $maxHeight }) => $maxHeight};
`;
export { StyledBorderFlex };
