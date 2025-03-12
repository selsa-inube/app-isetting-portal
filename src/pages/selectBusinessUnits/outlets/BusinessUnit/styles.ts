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
    margin-bottom: ${basic.spacing.s300};
  }
`;

const StyledBusinessUnitsList = styled.div<IStyledBusinessUnitsList>`
  & > div {
    display: flex;
    list-style: none;
    max-height: 330px;
    min-height: ${({ $isTablet }) => $isTablet && "200px"};
    width: ${({ $isMobile }) => ($isMobile ? "auto" : "500px")};
    overflow-y: ${({ $isMobile }) => ($isMobile ? "250px" : "auto")};
  }
`;

const StyledBusinessUnitsText = styled.div<IStyledBusinessUnits>`
  & > p:nth-child(1) {
    font-size: ${({ $isMobile }) => ($isMobile ? "18px" : "25px")};
  }
  & > p:nth-child(2) {
    font-size: ${({ $isMobile }) => ($isMobile ? "12px" : "18px")};
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
  StyledBusinessUnitsText,
};
