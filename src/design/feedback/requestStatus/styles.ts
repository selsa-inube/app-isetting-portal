import styled from "styled-components";
import { basic } from "@design/tokens";
import { inube } from "@inubekit/inubekit";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "320px" : "550px")};
  height: ${(props) => (props.$smallScreen ? "280px" : "374px")};
  border-radius: ${basic.spacing.s100};
  padding: ${(props) =>
    props.$smallScreen ? `${basic.spacing.s150}` : `${basic.spacing.s300}`};
  box-sizing: border-box;
  gap: ${(props) =>
    props.$smallScreen ? `${basic.spacing.s050}` : `${basic.spacing.s300}`};
`;

const StyledContainerButton = styled.div`
  & button {
    display: flex;
    padding-right: ${basic.spacing.s0};
    justify-content: flex-end;
  }
`;

export { StyledModal, StyledContainerButton };
