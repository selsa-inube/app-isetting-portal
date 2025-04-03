import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModalTraceability = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${basic.spacing.s150};
  background-color: ${inube.palette.neutral.N0};
  border: 1px solid ${inube.palette.neutral.N30};
  border-radius: 8px;
  width: ${({ $smallScreen }) => ($smallScreen ? "auto" : "400px")};
  padding: ${basic.spacing.s300};
`;

const StyledContainerDataTraceability = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${inube.palette.neutral.N30};
  padding: ${basic.spacing.s150};
  gap: ${basic.spacing.s4};
  border-radius: 8px;
  border: 1px solid ${inube.palette.neutral.N10};
  background-color: ${inube.palette.neutral.N10};
  width: 100%;
  box-sizing: border-box;
`;

export { StyledContainerDataTraceability, StyledModalTraceability };
