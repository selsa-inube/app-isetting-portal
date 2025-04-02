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

const StyledContainerButton = styled.div`
  & button {
    display: flex;
    padding-right: ${basic.spacing.s0};
    justify-content: flex-end;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${inube.palette.neutral.N30};
  gap: ${basic.spacing.s200};
  width: 100%;
`;

const StyledContainerData = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${inube.palette.neutral.N30};
  gap: ${basic.spacing.s4};
  padding: ${basic.spacing.s075} ${basic.spacing.s150} ${basic.spacing.s075}
    ${basic.spacing.s150};
  border-radius: 8px;
  border: 1px solid ${inube.palette.neutral.N30};
  background-color: ${inube.palette.neutral.N10};
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

const StyledContainerDataTraceabilitydos = styled.div`
  width: 107px;
  border: 1px solid ${inube.palette.neutral.N30};
  padding: ${basic.spacing.s025} ${basic.spacing.s10};
  background-color: ${inube.palette.neutral.N30};
  border-radius: 4px;
`;

export {
  StyledModal,
  StyledContainerButton,
  StyledModalTraceability,
  StyledModalConatiner,
  StyledContainer,
  StyledContainerData,
  StyledContainerDataTraceability,
  StyledContainerDataTraceabilitydos,
};
