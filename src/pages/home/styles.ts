import styled from "styled-components";
import { Link } from "react-router-dom";
import { basic } from "@design/tokens";

interface IStyledCollapseIcon {
  $collapse: boolean;
  $isTablet: boolean;
  $smallScreen?: boolean;
}
interface IStyledContainer {
  $smallScreen?: boolean;
  $typeTabs?: boolean;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-S300, ${basic.spacing.s300});
  align-self: stretch;

  padding: ${(props) =>
    props.$smallScreen
      ? ` ${(basic.spacing.s200, basic.spacing.s16)} `
      : `${basic.spacing.s600} ${basic.spacing.s1600} ${basic.spacing.s1000} `};
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
