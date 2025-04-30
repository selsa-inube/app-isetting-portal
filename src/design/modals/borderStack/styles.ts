import { IStyledFlex } from "@ptypes/modals/borderStack/IStyledFlex";
import styled from "styled-components";

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
  background: ${({ $background }) => $background};
  border: ${({ $border }) => `1px solid ${$border}`};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  box-sizing: ${({ $boxSizing }) => $boxSizing};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  overflow-y: ${({ $overflowY }) => $overflowY};
  position: ${({ $position }) => $position};
  z-index: ${({ $zIndex }) => $zIndex};
  top: ${({ $top }) => $top};
  right: ${({ $right }) => $right};
  min-width: ${({ $minWidth }) => $minWidth};
`;
export { StyledBorderFlex };
