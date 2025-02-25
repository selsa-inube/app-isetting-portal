import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${basic.spacing.s0} ${basic.spacing.s050} ${basic.spacing.s0}
    ${basic.spacing.s025};
  gap: ${basic.spacing.s100};
  border-radius: ${basic.spacing.s050};
  background-color: ${({ theme }) =>
    theme.color?.surface?.gray?.regular || inube.palette.neutral.N30};
  cursor: pointer;
`;

export { StyledContainer };
