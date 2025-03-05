import { basic } from "@design/tokens";
import { inube } from "@inubekit/inubekit";
import styled from "styled-components";

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

const StyledFilterdUserCard = styled.div<IStyledSearchUserCard>`
  width: 80%;
  border-radius: ${basic.spacing.s100};
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.gray?.regular || inube.palette.neutral.N40};
  padding: ${basic.spacing.s200};
  background-color: ${inube.palette.neutral.N30};
`;
export { StyledSearchUserCard, StyledFilterdUserCard };
