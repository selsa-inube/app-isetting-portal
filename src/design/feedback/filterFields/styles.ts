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
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  padding: ${basic.spacing.s300};
  display: ${({ $smallScreen }) => ($smallScreen ? "none" : "block")};
`;

const StyledButtonFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const StyledFilterdUserCard = styled.div<IStyledSearchUserCard>`
  display: flex;
  gap: ${basic.spacing.s100};
  width: 100%;
  border-radius: ${basic.spacing.s100};
  border: 1px solid
    ${({ theme }) => theme?.palette?.neutral?.N40 || inube.palette.neutral.N40};
  padding: ${basic.spacing.s100};
  background-color: ${inube.palette.neutral.N30};
  & > * {
    cursor: pointer;
  }
`;
export { StyledSearchUserCard, StyledFilterdUserCard, StyledButtonFilter };
