import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledContainer {
  $smallScreen: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${basic.spacing.s100};
  width: auto;
  padding: ${({ $smallScreen }) =>
    $smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s0}`};
`;

export { StyledContainer };
