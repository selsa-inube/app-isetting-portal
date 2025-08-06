import styled from "styled-components";
import { basic } from "@design/tokens";

interface IStyledContainerIcon {
  $isTablet?: boolean;
}

const StyledContainerIcon = styled.div<IStyledContainerIcon>`
  display: flex;
  gap: ${basic.spacing.s100};
  padding: ${({ $isTablet }) =>
    $isTablet
      ? `${basic.spacing.s100} ${basic.spacing.s050}`
      : `${basic.spacing.s0}`};
`;

export { StyledContainerIcon };
