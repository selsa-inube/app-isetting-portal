import styled from "styled-components";
import { basic } from "@design/tokens";
import { inube } from "@inubekit/inubekit";

interface IStyledSearchUserCard {
  $isActive: boolean;
  $smallScreen: boolean;
}

const StyledSearchUserCard = styled.div<IStyledSearchUserCard>`
  border-radius: ${basic.spacing.s100};
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.gray?.regular || inube.palette.neutral.N40};
  padding: ${basic.spacing.s300};
`;
const StyledButtonFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  button:nth-child(1) {
    background-color: ${inube.palette.neutral.N10};
    color: ${inube.palette.blue.B400};
    border: 1px solid ${inube.palette.neutral.N40};
  }
  button:nth-child(2) {
    background-color: ${inube.palette.neutral.N10};
    color: ${inube.palette.blue.B400};
    border: 1px solid ${inube.palette.blue.B400};
  }
  button:nth-child(2) p {
    background-color: ${inube.palette.neutral.N10};
    color: ${inube.palette.blue.B400};
  }

  button:nth-child(2) svg {
    color: ${inube.palette.blue.B400};
  }
`;

const StyledFilterdUserCard = styled.div<IStyledSearchUserCard>`
  display: flex;
  gap: ${basic.spacing.s100};
  width: 80%;
  border-radius: ${basic.spacing.s100};
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.gray?.regular || inube.palette.neutral.N40};
  padding: ${basic.spacing.s100};
  background-color: ${inube.palette.neutral.N30};
  & > * {
    cursor: pointer;
  }
`;
export { StyledSearchUserCard, StyledFilterdUserCard, StyledButtonFilter };
