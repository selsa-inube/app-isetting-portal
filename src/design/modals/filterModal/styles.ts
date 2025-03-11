import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}
const StyledButtonFilter = styled.div`
  button:nth-child(1) {
    background-color: ${inube.palette.neutral.N10};
    color: ${inube.palette.blue.B400};
    border: 1px solid ${inube.palette.neutral.N40};
  }
`;
const StyledModal = styled.div<IStyledModal>`
  display: flex;
  flex-direction: column;
  background-color: ${inube.palette.neutral.N0};
  width: ${(props) => (props.$smallScreen ? "335px" : "450px")};
  height: auto;
  border-radius: ${basic.spacing.s100};
  padding: ${basic.spacing.s300};
  gap: ${basic.spacing.s300};
  box-sizing: border-box;
`;

const StyledContainerButton = styled.div`
  & button {
    display: flex;
    padding-right: ${basic.spacing.s0};
    justify-content: flex-end;
  }
`;

export { StyledModal, StyledContainerButton, StyledButtonFilter };
