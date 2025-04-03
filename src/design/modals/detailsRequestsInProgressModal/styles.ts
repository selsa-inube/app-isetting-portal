import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  border-radius: ${basic.spacing.s100};
  padding: ${basic.spacing.s300};
  gap: ${basic.spacing.s300};
  box-sizing: border-box;

  height: 100%;
`;

const StyledModalConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${basic.spacing.s200};
  background-color: ${inube.palette.neutral.N0};
  border: 1px solid ${inube.palette.neutral.N30};
  border-radius: 8px;
  padding: ${basic.spacing.s200};
`;

const StyledContainerData = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${inube.palette.neutral.N30};
  gap: ${basic.spacing.s4};
  padding: ${basic.spacing.s075} ${basic.spacing.s150} ${basic.spacing.s075}
    ${basic.spacing.s150};
  border-radius: 8px;
  background-color: ${inube.palette.neutral.N10};
`;

export { StyledModal, StyledModalConatiner, StyledContainerData };
