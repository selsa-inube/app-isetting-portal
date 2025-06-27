import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

const StyledModal = styled.div`
  display: flex;
  position: absolute;
  top: 6px;
  right: 2px;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: 155px;
  box-sizing: border-box;
  padding: ${basic.spacing.s100} ${basic.spacing.s150};
  gap: ${basic.spacing.s600};
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: ${basic.spacing.s100};
  z-index: 1;
`;

const StyledContentActions = styled.div``;

export { StyledModal, StyledContentActions };
