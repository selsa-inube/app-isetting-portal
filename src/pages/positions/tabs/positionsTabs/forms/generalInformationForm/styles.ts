import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledContainerFields {
  $isMobile: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${basic.spacing.s300};
  min-height: 55vh;
`;

const StyledContainerFields = styled.div<IStyledContainerFields>`
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${basic.spacing.s100};
  width: auto;
  gap: ${basic.spacing.s300};
  padding: ${({ $isMobile }) =>
    $isMobile ? `${basic.spacing.s150}` : `${basic.spacing.s300}`};
`;

export { StyledContainer, StyledContainerFields };
