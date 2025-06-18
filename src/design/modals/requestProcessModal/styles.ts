import styled from "styled-components";
import { IIconAppearance, inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

interface IStyledContainerProgressBar {
  $appearance: IIconAppearance;
  $height: string;
}

interface IStyledStepIndicator {
  $statusError: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  gap: ${basic.spacing.s200};
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "335px" : "550px")};
  height: auto;
  border-radius: ${basic.spacing.s100};
  padding: ${(props) =>
    props.$smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s300}`};
  box-sizing: border-box;
`;

const StyledContainerFields = styled.div`
  display: flex;
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${basic.spacing.s100};
  gap: ${basic.spacing.s100};
  padding: ${basic.spacing.s150};
`;

const StyledContainerProgressBar = styled.div<IStyledContainerProgressBar>`
  width: 100%;
  background-color: ${inube.palette.neutral.N30};
  border: 1px solid ${inube.palette.neutral.N40};
  border-radius: ${basic.spacing.s050};
  height: ${({ $height }) => $height};
`;

const StyledStepIndicator = styled.div<IStyledStepIndicator>`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  align-items: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ $statusError }) =>
    $statusError ? `${inube.palette.red.R400}` : `${inube.palette.green.G400}`};
`;

export {
  StyledModal,
  StyledContainerFields,
  StyledContainerProgressBar,
  StyledStepIndicator,
};
