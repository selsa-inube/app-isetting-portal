import styled from "styled-components";
import { basic } from "@design/tokens";

interface IStyledBusinessUnitsList {
  $isMobile: boolean;
  $isTablet: boolean;
  $scroll?: boolean;
}

interface IStyledBusinessUnits {
  $isMobile: boolean;
}

const StyledBusinessUnits = styled.div<IStyledBusinessUnits>`
  & form {
    & > div {
      margin: ${basic.spacing.s500} auto ${basic.spacing.s0};
      width: ${({ $isMobile }) => ($isMobile ? "auto" : "500px")};
    }
  }

  & button {
    margin-top: ${basic.spacing.s300};
  }
`;

const StyledBusinessUnitsList = styled.div<IStyledBusinessUnitsList>`
  & > div {
    list-style: none;
    max-height: 330px;
    min-height: ${({ $isTablet }) => $isTablet && "200px"};
    width: ${({ $isMobile }) => ($isMobile ? "250px" : "500px")};
    overflow-y: auto;
  }
`;

const StyledNoResults = styled.div`
  margin: ${basic.spacing.s200} ${basic.spacing.s0};
`;

const StyledBusinessUnitsItem = styled.li`
  width: 100%;
`;

export {
  StyledBusinessUnits,
  StyledBusinessUnitsList,
  StyledNoResults,
  StyledBusinessUnitsItem,
};
