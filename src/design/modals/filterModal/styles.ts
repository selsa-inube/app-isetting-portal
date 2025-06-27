import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

interface IStyledSearchUserCard {
  $isActive: boolean;
  $smallScreen: boolean;
}

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

const StyledFilterdUserCard = styled.div<IStyledSearchUserCard>`
  display: flex;
  gap: ${basic.spacing.s100};
  border-radius: ${basic.spacing.s100};
  border: 1px solid
    ${({ theme }) => theme.palette?.neutral?.N40 || inube.palette.neutral.N40};
  padding: ${basic.spacing.s100};
  background-color: ${inube.palette.neutral.N30};
`;

export { StyledModal, StyledContainerButton, StyledFilterdUserCard };
