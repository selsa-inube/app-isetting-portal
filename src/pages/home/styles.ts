import { Link } from "react-router-dom";
import styled from "styled-components";
import { basic } from "@design/tokens";

interface IStyledCollapseIcon {
  $collapse: boolean;
  $isTablet: boolean;
}

interface IStyledContainerSection {
  $isMobile: boolean;
}

interface IStyledTitle {
  $isTablet: boolean;
}
interface IStyledContainerCards {
  $isTablet: boolean;
}
interface IStyledFooter {
  $isMobile: boolean;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: ${basic.spacing.s500};
  height: 100vh;
  overflow-y: auto;
`;
const StyledContainerSection = styled.div<IStyledContainerSection>`
  display: flex;
  flex-direction: column;
  padding: ${({ $isMobile }) =>
    $isMobile ? `${basic.spacing.s200}` : `${basic.spacing.s0}`};
  gap: ${({ $isMobile }) =>
    $isMobile ? `${basic.spacing.s300}` : `${basic.spacing.s0}`};
`;

const StyledHeaderContainer = styled.div`
  position: relative;
  & div > div {
    cursor: pointer;
  }
`;

const StyledContentImg = styled(Link)`
  width: 100px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
  max-height: 32px;
  height: auto;
`;

const StyledTitle = styled.div<IStyledTitle>`
  padding: ${({ $isTablet }) =>
    $isTablet
      ? `var(--spacing-S200, ${basic.spacing.s200})`
      : `${basic.spacing.s400} ${basic.spacing.s0} ${basic.spacing.s200}`};
  display: flex;
  flex-direction: column;
  align-items: ${({ $isTablet }) => $isTablet && "flex-start"};
  gap: ${({ $isTablet }) =>
    $isTablet
      ? `var(--spacing-S300, ${basic.spacing.s300})`
      : `${basic.spacing.s0}`};
  align-self: ${({ $isTablet }) => $isTablet && "stretch"};
`;

const StyledContainerCards = styled.div<IStyledContainerCards>`
  display: flex;
  box-sizing: border-box;
  justify-content: ${({ $isTablet }) => ($isTablet ? "center" : "flex-start")};
  flex-wrap: wrap;
  gap: ${basic.spacing.s400};
`;

const StyledFooter = styled.footer<IStyledFooter>`
  display: flex;
  margin-top: auto;
  padding: ${basic.spacing.s0} ${basic.spacing.s1600} ${basic.spacing.s0};
  justify-content: center;
`;

const StyledCollapseIcon = styled.div<IStyledCollapseIcon>`
  display: flex;
  transition: all 500ms ease;
  position: absolute;
  top: 13.5px;
  transform: ${({ $collapse }) =>
    $collapse ? "rotate(-90deg)" : "rotate(90deg)"};
  left: ${({ $isTablet }) => ($isTablet ? "150px" : "142px")};
`;

export {
  StyledContainer,
  StyledHeaderContainer,
  StyledTitle,
  StyledContentImg,
  StyledLogo,
  StyledContainerCards,
  StyledFooter,
  StyledContainerSection,
  StyledCollapseIcon,
};
