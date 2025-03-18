import { basic } from "@design/tokens";
import styled from "styled-components";
interface IStyledContainerIcon {
  $isTablet?: boolean;
}
const StyledContainerIcon = styled.div<IStyledContainerIcon>`
  padding: ${({ $isTablet }) =>
    $isTablet ? `${basic.spacing.s400} ` : `${basic.spacing.s0}`};
  transform: translateX(20px);
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  width: 100%;
  justify-content: center;
`;

export { StyledContainerIcon, StyledContainer };
