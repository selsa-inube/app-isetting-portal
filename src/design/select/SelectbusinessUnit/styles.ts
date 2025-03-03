import styled from "styled-components";
import { basic } from "@design/tokens";

interface IStyledBusinessUnitsList {
  $scroll?: boolean;
  $smallScreen: boolean;
  $smallScreenTable?: boolean;
}

const StyledBusinessUnits = styled.div<IStyledBusinessUnitsList>`
  & form {
    & > div {
      margin: auto;
      width: ${({ $smallScreen }) => ($smallScreen ? "500px" : "auto")};
    }
  }

  & button {
    margin-top: 24px;
  }
`;

const StyledBusinessUnitsList = styled.div<IStyledBusinessUnitsList>`
  & form {
    & > div {
      margin: ${basic.spacing.s500} auto ${basic.spacing.s0};
      width: ${({ $smallScreen }) => ($smallScreen ? "auto" : "500px")};
    }
  }

  & button {
    margin-top: ${basic.spacing.s300};
  }
`;

const StyledNoResults = styled.div`
  margin: ${basic.spacing.s12} ${basic.spacing.s0};
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
