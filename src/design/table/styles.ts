import styled from "styled-components";

interface IStyledContainer {
  $multipleTables?: boolean;
  $pageLength?: number;
  $entriesLength?: number;
  $isTablet?: boolean;
  $withGeneralizedTitle?: boolean;
}

const StyledContainerTable = styled.div<IStyledContainer>`
  position: relative;
  width: 100%;
  & > td,
  & > div {
    justify-content: center;
  }

  ${({ $isTablet }) =>
    $isTablet &&
    `
  
    & > td {
      justify-content: flex-start;
    }

  `}

  ${({ $withGeneralizedTitle, $isTablet }) =>
    $isTablet &&
    !$withGeneralizedTitle &&
    `
    & > div > div {
       overflow: auto;
  }
  `}
`;

export { StyledContainerTable };
