import styled from "styled-components";
import { Link } from "react-router-dom";
import { basic } from "@design/tokens";

interface IStyledCollapseIcon {
  $collapse: boolean;
  $isTablet: boolean;
  $smallScreen?: boolean;
}
interface IStyledContainer {
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
`;

const StyledTitle = styled.div<IStyledContainer>`
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

const StyledFooter = styled.footer<IStyledFooter>`
  display: flex;
  margin-top: auto;
  justify-content: center;
  padding-top: ${({ $isMobile }) => $isMobile && "50px"};
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

const StyledCollapse = styled.div`
  position: absolute;
  margin-top: 10px;
`;

export {
  StyledContainer,
  StyledHeaderContainer,
  StyledTitle,
  StyledContentImg,
  StyledLogo,
  StyledFooter,
  StyledCollapseIcon,
  StyledCollapse,
};
