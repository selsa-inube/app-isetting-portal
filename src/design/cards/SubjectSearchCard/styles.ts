import styled from "styled-components";
import { inube } from "@inubekit/inubekit";
import { basic } from "@design/tokens";

interface IStyledSubjectSearchCard {
  $isActive: boolean;
  $smallScreen: boolean;
}

const StyledSubjectSearchCardText = styled.div`
  padding: ${basic.spacing.s8} ${basic.spacing.s16};
`;

const StyledSubjectSearchCard = styled.div<IStyledSubjectSearchCard>`
  width: 100%;
  height: ${({ $smallScreen }) => ($smallScreen ? "56px" : "auto")};
  box-sizing: border-box;
  border-radius: ${basic.spacing.s8};
  border: 1px solid ${inube.palette.neutral.N30};
  cursor: pointer;
  background-color: ${inube.palette.neutral.N30 || inube.palette.neutral.N0};

  box-shadow: ${`0px 1px 3px 1px ${inube.palette.neutralAlpha.N40A}, 0px 1px 2px 0px ${
    inube.palette.neutralAlpha.N60A
  }`};
`;

export { StyledSubjectSearchCard, StyledSubjectSearchCardText };
